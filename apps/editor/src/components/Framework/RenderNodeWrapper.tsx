import { DragOutlined } from '@ant-design/icons'
import { useEditor, useNode } from '@craftjs/core'
import * as React from 'react'
import { useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useFrame } from 'react-frame-component'

export interface RenderNodeWrapperProps {
  render: React.ReactElement
}

export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({ render }) => {
  const currentRef = useRef<HTMLDivElement>(null)
  const { id } = useNode()
  const { query, isActive, isHover } = useEditor((state, query) => {
    const [selectNodeId] = state.events.selected
    const [hoverNodeId] = state.events.hovered
    const [dragNodeId] = state.events.dragged
    return {
      isActive: query.getEvent('selected').contains(id),
      isHover: query.getEvent('hovered').contains(id),
      isDragged: query.getEvent('dragged').contains(id),
      selectNodeId,
      hoverNodeId,
      dragNodeId,
    }
  })
  console.log(id, isActive, isHover)
  const {
    dom,
    name,
    isRootNode,
    moveable,
    connectors: { drag },
  } = useNode(node => {
    return {
      dom: node.dom,
      parent: node.data.parent,
      name: node.data.displayName,
      isRootNode: query.node(id).isRoot(),
      moveable: query.node(node.id).isDraggable(),
      deletable: query.node(node.id).isDeletable(),
      isResize: node.data.custom.useResize || false,
    }
  })
  const { document: canvasDocument } = useFrame()

  // Click
  useEffect(() => {
    if (dom) {
      if (isActive) {
        dom.classList.add('editor-component-active')
      } else {
        dom.classList.remove('editor-component-active')
      }
    }
  }, [dom, isActive])

  // Hover
  useEffect(() => {
    if (dom && !isRootNode) {
      if (isHover && !isActive) {
        dom.classList.add('editor-component-hover')
      } else {
        dom.classList.remove('editor-component-hover')
      }
    }
  }, [dom, isHover, isRootNode, isActive])

  // 定位提示框的位置
  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 }
    return {
      top: top > 24 ? top - 24 : bottom,
      left: left,
    }
  }, [])
  const { top, left } = getPos(dom!)

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            // 物料的提示框
            <div
              ref={currentRef}
              style={{
                left,
                top,
                zIndex: 9999,
                position: 'fixed',
                background: '#2178ea',
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                minWidth: 'max-content',
                height: 24,
                color: '#fff',
                paddingInline: 6,
                fontSize: 12,
              }}
            >
              {name}
              {moveable && <DragOutlined ref={drag as any} style={{ marginLeft: 8 }} />}
            </div>,
            canvasDocument?.body as HTMLElement,
          )
        : null}
      {render}
    </>
  )
}

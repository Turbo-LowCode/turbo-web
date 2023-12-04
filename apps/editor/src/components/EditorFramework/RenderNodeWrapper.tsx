import { ArrowUpOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons'
import { useEditor, useNode } from '@craftjs/core'
import { Typography } from 'antd'
import * as React from 'react'
import { useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useFrame } from 'react-frame-component'

export interface RenderNodeWrapperProps {
  render: React.ReactElement
}

// 过滤一些不需要渲染的物料节点
const filterRenderNode = ['__Slot__']

export const RenderNodeWrapper: React.FC<RenderNodeWrapperProps> = ({ render }) => {
  const currentRef = useRef<HTMLDivElement>(null)
  const { id } = useNode()
  const { query, isActive, isHover, actions, isFilterNode } = useEditor((state, query) => {
    const node = state.nodes[id]
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
      isFilterNode: filterRenderNode.includes(node.data.name),
    }
  })
  const {
    dom,
    parent,
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

  // 定位提示框的位置
  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 }
    return {
      top: top > 24 ? top - 24 : bottom,
      left: left,
    }
  }, [])

  const handleToParent = useCallback(() => {
    if (parent) {
      actions.selectNode(parent)
    }
  }, [parent])

  const handleDelete = useCallback(() => {
    actions.delete(id)
  }, [id])

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

  const { top, left } = getPos(dom!)

  return (
    <>
      {!isFilterNode && (isHover || isActive)
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
                gap: '8px',
                minWidth: 'max-content',
                height: 24,
                color: '#fff',
                paddingInline: 6,
                fontSize: 14,
              }}
            >
              <Typography.Text style={{ marginRight: 16, color: 'white' }}>{name}</Typography.Text>
              {moveable && <DragOutlined ref={drag as any} style={{ cursor: 'pointer' }} />}
              <ArrowUpOutlined onClick={handleToParent} style={{ cursor: 'pointer' }} />
              <DeleteOutlined onClick={handleDelete} style={{ cursor: 'pointer' }} />
            </div>,
            canvasDocument?.body as HTMLElement,
          )
        : null}
      {render}
    </>
  )
}

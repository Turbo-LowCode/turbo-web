import { useEditor } from '@craftjs/core'
import { connectJSRuntimeVM, mountJSModule } from '@turbolc/core'
import dayjs from 'dayjs'
import { FC, useEffect } from 'react'
import { Canvas } from './Canvas/Canvas'
import { DocumentFrame } from './Canvas/DocumentFrame'
import { Header } from './Header/Header'
import { Left } from './Left/Left'
import { Right } from './Right/Right'
import { useSchemaStore } from './stores/schema'

export interface EditorProps {
  isPreview: boolean
}

export const Editor: FC<EditorProps> = ({ isPreview }) => {
  const jsModuleCode = useSchemaStore(state => state.jsModuleCode)
  const { actions, nodeId } = useEditor(state => {
    const [currentNodeId] = state.events.selected
    return {
      nodeId: currentNodeId,
    }
  })

  useEffect(() => {
    // @ts-ignore
    window.__nodeId__ = nodeId
  }, [nodeId])

  // 初始化js模块
  useEffect(() => {
    if (jsModuleCode) mountJSModule(jsModuleCode)
  }, [jsModuleCode])

  // 初始化js模块默认依赖
  useEffect(() => {
    const { sandbox } = connectJSRuntimeVM()
    sandbox.turboScope.dependencies = {
      dayjs,
      '@turbolc/store': {
        getState: () => {
          console.log('我是get方法')
        },
        setState: () => {
          console.log('我是set方法')
        },
      },
      // 透传一些改变物料的方法
      '@turbolc/materials': {
        setProp: (cb: (props: any) => void) => {
          // @ts-ignore
          actions.setProp(window.__nodeId__, cb)
        },
      },
    }
  }, [])

  return isPreview ? (
    <DocumentFrame />
  ) : (
    <div className='grid overflow-hidden h-full grid-rows-[auto_1fr]'>
      <Header />
      <div id='editorContent' className='h-full grid grid-cols-[auto_1fr_300px]'>
        <Left />
        <Canvas />
        <Right />
      </div>
    </div>
  )
}

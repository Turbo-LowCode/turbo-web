import {
  EditorRefProps,
  FrameworkContextProvider,
  FrameworkProviderProps,
  connectJSRuntimeVM,
  mountJSModule,
} from '@turbolc/core'
import { __antdMaterials__, __baseMaterials__, __commonMaterials__, __formMaterials__ } from '@turbolc/materials'
import dayjs from 'dayjs'
import { forwardRef, useEffect } from 'react'
import { Canvas } from './Canvas/Canvas'
import { DocumentFrame } from './Canvas/DocumentFrame'
import { Header } from './Header/Header'
import { Left } from './Left/Left'
import { RenderNodeWrapper } from './RenderNodeWrapper'
import { Right } from './Right/Right'
import { useSchemaStore } from './stores/schema'

export type FrameworkProps = FrameworkProviderProps & {
  schema?: string
  isPreview?: boolean
  // children?: React.ReactNode
}

export const EditorFramework = forwardRef<EditorRefProps, FrameworkProps>(
  ({ enabled = true, isPreview = false }, ref) => {
    const jsModuleCode = useSchemaStore(state => state.jsModuleCode)

    // 初始化js模块
    useEffect(() => {
      mountJSModule(jsModuleCode)
    }, [jsModuleCode])

    // 初始化js模块默认依赖
    useEffect(() => {
      const { sandbox } = connectJSRuntimeVM()
      sandbox.turboScope.dependencies = {
        dayjs,
        '@turbo/store': {
          getState: () => {
            console.log('我是get方法')
          },
          setState: () => {
            console.log('我是set方法')
          },
        },
      }
    }, [])

    return (
      <FrameworkContextProvider
        ref={ref}
        enabled={enabled}
        resolver={{ ...__baseMaterials__, ...__antdMaterials__, ...__formMaterials__, ...__commonMaterials__ }}
        onRender={RenderNodeWrapper}
        indicator={{
          success: '#3a8efe',
          error: '#f95053',
        }}
      >
        {/* 供予预览直接显示子组件 */}
        {isPreview ? (
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
        )}
      </FrameworkContextProvider>
    )
  },
)

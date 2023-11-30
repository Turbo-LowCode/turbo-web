import { EditorRefProps, FrameworkContextProvider, FrameworkProviderProps } from '@turbo/core'
import { __antdMaterials__, __baseMaterials__ } from '@turbo/materials'
import { forwardRef } from 'react'
import { Canvas } from './Canvas/Canvas'
import { Header } from './Header/Header'
import { Left } from './Left/Left'
import { RenderNodeWrapper } from './RenderNodeWrapper'
import { Right } from './Right/Right'

export type FrameworkProps = FrameworkProviderProps & {
  schema?: string
  children?: React.ReactNode
}

export const EditorFramework = forwardRef<EditorRefProps, FrameworkProps>(({ enabled = true }, ref) => {
  return (
    <FrameworkContextProvider
      ref={ref}
      enabled={enabled}
      resolver={{ ...__baseMaterials__, ...__antdMaterials__ }}
      onRender={RenderNodeWrapper}
    >
      <div className="grid overflow-hidden h-full grid-rows-[auto_1fr]">
        <Header />
        <div id="editorContent" className="h-full grid grid-cols-[auto_1fr_300px]">
          <Left />
          <Canvas />
          <Right />
        </div>
      </div>
    </FrameworkContextProvider>
  )
})

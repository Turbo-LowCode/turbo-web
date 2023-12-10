import { EditorRefProps, FrameworkContextProvider, FrameworkProviderProps } from '@turbolc/core'
import { __antdMaterials__, __baseMaterials__, __commonMaterials__, __formMaterials__ } from '@turbolc/materials'
import { forwardRef } from 'react'
import { Editor } from './Editor'
import { RenderNodeWrapper } from './RenderNodeWrapper'

export type FrameworkProps = FrameworkProviderProps & {
  schema?: string
  isPreview?: boolean
}

export const EditorFramework = forwardRef<EditorRefProps, FrameworkProps>(
  ({ enabled = true, isPreview = false }, ref) => {
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
        <Editor isPreview={isPreview} />
      </FrameworkContextProvider>
    )
  },
)

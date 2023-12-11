import { Options } from '@craftjs/core'
import { EditorRefProps, FrameworkContextProvider, FrameworkProviderProps } from '@turbolc/core'
import { __antdMaterials__, __baseMaterials__, __commonMaterials__, __formMaterials__ } from '@turbolc/materials'
import { forwardRef } from 'react'
import { Editor } from './Editor'
import { RenderNodeWrapper } from './RenderNodeWrapper'
import { useSchemaStore } from './stores/schema'

export type FrameworkProps = FrameworkProviderProps & {
  schema?: string
  isPreview?: boolean
}

export const EditorFramework = forwardRef<EditorRefProps, FrameworkProps>(
  ({ enabled = true, isPreview = false }, ref) => {
    const setSerializeNodes = useSchemaStore(state => state.setSerializeNodes)

    const handleEditorChange: Options['onNodesChange'] = query => {
      const serializeNodes = query.getSerializedNodes()
      setSerializeNodes(serializeNodes)
    }

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
        onNodesChange={handleEditorChange}
      >
        <Editor isPreview={isPreview} />
      </FrameworkContextProvider>
    )
  },
)

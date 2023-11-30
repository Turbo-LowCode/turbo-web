import { Editor } from '@craftjs/core'

export type EditorProps = React.ComponentProps<typeof Editor>

export type FrameworkProviderProps = Pick<EditorProps, 'enabled'>

export interface EditorRefProps {
  loadEditorSchema: (
    json: string,
    options?: {
      useState?: boolean
    },
  ) => void
}

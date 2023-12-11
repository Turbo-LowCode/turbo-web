import { Options } from '@craftjs/core'
import { PropsWithChildren } from 'react'

export type EditorProps = PropsWithChildren<Partial<Options>>

export type FrameworkProviderProps = Pick<EditorProps, 'enabled'>

export interface EditorRefProps {
  loadEditorSchema: (
    json: string,
    options?: {
      useState?: boolean
    },
  ) => void
}

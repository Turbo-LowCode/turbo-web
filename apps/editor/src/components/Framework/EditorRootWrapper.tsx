import { Editor } from '@craftjs/core'
import { FC, PropsWithChildren } from 'react'

interface EditorRootWrapperProps extends PropsWithChildren {}

export const EditorRootWrapper: FC<EditorRootWrapperProps> = ({ children }) => {
  return <Editor>{children}</Editor>
}

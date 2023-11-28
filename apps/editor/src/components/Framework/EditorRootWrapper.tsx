import { Editor } from '@craftjs/core'
import { FC, PropsWithChildren } from 'react'

interface EditorRootWrapperProps extends PropsWithChildren {}

const EditorRootWrapper: FC<EditorRootWrapperProps> = ({ children }) => {
  return <Editor>{children}</Editor>
}

export default EditorRootWrapper

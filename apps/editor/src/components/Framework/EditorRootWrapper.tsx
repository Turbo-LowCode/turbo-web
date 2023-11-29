import { Editor } from '@craftjs/core'
import { __antdMaterials__, __baseMaterials__ } from '@turbo/materials'
import { FC, PropsWithChildren } from 'react'

interface EditorRootWrapperProps extends PropsWithChildren {}

export const EditorRootWrapper: FC<EditorRootWrapperProps> = ({ children }) => {
  return <Editor resolver={{ ...__baseMaterials__, ...__antdMaterials__ }}>{children}</Editor>
}

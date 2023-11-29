import { Editor } from '@craftjs/core'
import { __antdMaterials__, __baseMaterials__ } from '@turbo/materials'
import { FC, PropsWithChildren } from 'react'
import { RenderNodeWrapper } from './RenderNodeWrapper'

interface EditorRootWrapperProps extends PropsWithChildren {}

export const EditorRootWrapper: FC<EditorRootWrapperProps> = ({ children }) => {
  return (
    <Editor resolver={{ ...__baseMaterials__, ...__antdMaterials__ }} onRender={RenderNodeWrapper}>
      {children}
    </Editor>
  )
}

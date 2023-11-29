import { CanvasRootId } from '@turbo/core'
import { StyleProvider } from 'antd-style'
import { FC, PropsWithChildren, useRef } from 'react'
import ReactFrameComponent, { FrameContextConsumer } from 'react-frame-component'

interface RenderViewSandboxProps extends PropsWithChildren {}

export const RenderViewSandbox: FC<RenderViewSandboxProps> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <ReactFrameComponent ref={iframeRef} id={CanvasRootId} className="w-full h-full m-0 p-0 border-none">
      <FrameContextConsumer>
        {({ document }) => {
          return <StyleProvider container={document?.head}>{children}</StyleProvider>
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  )
}

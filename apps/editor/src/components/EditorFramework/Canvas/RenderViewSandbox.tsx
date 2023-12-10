import { CanvasRootId } from '@turbolc/core'
import { StyleProvider } from 'antd-style'
import { FC, PropsWithChildren, useRef } from 'react'
import ReactFrameComponent, { FrameContextConsumer } from 'react-frame-component'

interface RenderViewSandboxProps extends PropsWithChildren {}

export const RenderViewSandbox: FC<RenderViewSandboxProps> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <ReactFrameComponent
      ref={iframeRef}
      id={CanvasRootId}
      className='w-full h-full m-0 p-0 border-none'
      head={
        <>
          <style>
            <link href='https://cdn.skypack.dev/sanitize.css' rel='stylesheet' />
            <link href='https://unpkg.com/antd@5.11.5/dist/reset.css' rel='stylesheet'></link>
            <link
              href='https://cdn.jsdelivr.net/npm/primereact@10.0.2/resources/themes/lara-light-indigo/theme.css'
              rel='stylesheet'
            />
            <link href='https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css' rel='stylesheet'></link>
            {`
            .editor-component-active {
              position: relative;
            }

            .editor-component-active::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px solid #1677ff;
            }

            .editor-component-hover {
              position: relative;
            }

            .editor-component-hover::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px dashed #1677ff;
              background: rgba(0, 0, 0, 0.1);
            }

            #ROOT {
              width: 100%;
              height: 100%;
            }
            `}
          </style>
          <script src='https://www.unpkg.com/draggable-polyfill@1.2.4/index.js'></script>
        </>
      }
    >
      <FrameContextConsumer>
        {({ document }) => {
          return <StyleProvider container={document?.head}>{children}</StyleProvider>
        }}
      </FrameContextConsumer>
    </ReactFrameComponent>
  )
}

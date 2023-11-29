import { Canvas, Element, Frame } from '@craftjs/core'
import { __AntDButton__, __Box__, __Provider__ } from '@turbo/materials'

export const DocumentFrame = () => {
  return (
    <div id="__CanvasViewPort__" style={{ width: '100vw', height: '100vh', paddingInline: 12 }}>
      <Frame>
        <Canvas canvas is={__Provider__} backgroundColor="#fff" width="100%" height="100%">
          <Element canvas is={__Box__}>
            <__AntDButton__ />
          </Element>
        </Canvas>
      </Frame>
    </div>
  )
}

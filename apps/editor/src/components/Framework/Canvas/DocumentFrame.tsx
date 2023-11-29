import { Canvas, Element, Frame } from '@craftjs/core'
import { __AntDButton__, __Box__, __Provider__ } from '@turbo/materials'

export const DocumentFrame = () => {
  return (
    <div id="__CanvasViewPort__" className="w-screen h-screen ps-3 pe-3">
      <Frame>
        <Canvas canvas is={__Provider__} backgroundColor="#ffffff" width="100%" height="100%">
          <Element canvas is={__Box__}>
            <__AntDButton__ />
          </Element>
        </Canvas>
      </Frame>
    </div>
  )
}

import { Canvas, Element, Frame, useEditor } from '@craftjs/core'
import { __AntDButton__, __Box__, __Provider__ } from '@turbolc/materials'
import { useEffect } from 'react'

export const DocumentFrame = () => {
  // TODO: 暂时先放在这里处理
  const { actions } = useEditor()

  useEffect(() => {
    const appId = localStorage.getItem('appId') ?? 'test'
    // 设置一个兜底的appId
    if (appId === 'test') {
      localStorage.setItem('appId', 'test')
    }
    if (appId) {
      const schema = localStorage.getItem(`${appId}_schema`)
      if (schema) {
        actions.deserialize(schema)
      }
    }
  }, [])

  return (
    <div id='__CanvasViewPort__' className='w-screen h-screen px-3'>
      <Frame>
        <Canvas canvas is={__Provider__} backgroundColor='#fff' width='100%' height='100%'>
          <Element canvas is={__Box__}>
            <__AntDButton__ />
          </Element>
        </Canvas>
      </Frame>
    </div>
  )
}

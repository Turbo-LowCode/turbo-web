import { createReactMaterial } from '@turbo/core/src/index'
import InputSettings from './Settings'
import InputView from './View'

const _Input = createReactMaterial(InputView, {
  displayName: 'Input',
  related: {
    settings: InputSettings,
  },
})

export default _Input

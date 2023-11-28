import { createReactMaterial } from '@turbo/core'
import InputSettings from './settings'
import InputView from './view'

const _Input = createReactMaterial(InputView, {
  displayName: 'Input',
  related: {
    settings: InputSettings,
  },
})

export default _Input

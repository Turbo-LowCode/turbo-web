import { createReactMaterial } from '@turbo/core'
import TextAreaSettings from './settings'
import TextAreaView from './view'

const _TextArea = createReactMaterial(TextAreaView, {
  displayName: 'TextArea',
  related: {
    settings: TextAreaSettings,
  },
})

export default _TextArea

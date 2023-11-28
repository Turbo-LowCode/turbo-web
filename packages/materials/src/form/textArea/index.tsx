import { createReactMaterial } from '@turbo/core/src/index'
import TextAreaSettings from './Settings'
import TextAreaView from './View'

const _TextArea = createReactMaterial(TextAreaView, {
  displayName: 'TextArea',
  related: {
    settings: TextAreaSettings,
  },
})

export default _TextArea

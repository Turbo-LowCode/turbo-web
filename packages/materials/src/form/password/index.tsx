import { createReactMaterial } from '@turbo/core/src/index'
import InputPasswordSettings from './Settings'
import InputPasswordView from './View'

const _InputPassword = createReactMaterial(InputPasswordView, {
  displayName: 'InputPassword',
  related: {
    settings: InputPasswordSettings,
  },
})

export default _InputPassword

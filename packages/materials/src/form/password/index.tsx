import { createReactMaterial } from '@turbo/core'
import PasswordSettings from './settings'
import PasswordView from './view'

const _Password = createReactMaterial(PasswordView, {
  displayName: 'Password',
  related: {
    settings: PasswordSettings,
  },
})

export default _Password

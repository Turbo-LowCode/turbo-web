import { createReactMaterial } from '@turbolc/core'
import { ProTableSetting } from './setting'
import { ProTableView, defaultProps } from './view'

export const __ProTable__ = createReactMaterial(
  ProTableView,
  {
    displayName: '高阶表格',
    related: {
      settingRender: ProTableSetting,
    },
  },
  {
    ...defaultProps,
  },
)

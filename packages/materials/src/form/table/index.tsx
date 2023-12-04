import { createReactMaterial } from '@turbolc/core'
import { TableSetting } from './setting'
import { TableView, defaultProps } from './view'

export const __Table__ = createReactMaterial(
  TableView,
  {
    displayName: '高阶表格',
    related: {
      settingRender: TableSetting,
    },
  },
  {
    ...defaultProps,
  },
)

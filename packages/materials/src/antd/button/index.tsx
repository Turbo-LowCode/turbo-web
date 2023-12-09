import { createReactMaterial } from '@turbolc/core'
import { ButtonSetting } from './setting'
import { ButtonView, defaultProps } from './view'

export const __AntDButton__ = createReactMaterial(
  ButtonView,
  {
    displayName: '按钮',
    custom: {
      // 物料支持的event配置项
      eventOptions: [
        {
          label: '点击事件',
          value: 'onClick',
        },
        {
          label: '修改事件',
          value: 'onChange',
        },
      ],
    },
    related: {
      settingRender: ButtonSetting,
    },
  },
  {
    ...defaultProps,
    href: undefined,
  },
)

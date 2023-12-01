import { Element } from '@craftjs/core'
import { createReactMaterial } from '@turbolc/core'
import { CardSetting } from './setting'
import { CardView } from './view'

export const __AntDCard__ = createReactMaterial(
  CardView,
  {
    displayName: '卡片',
    props: {},
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: CardSetting,
    },
  },
  {
    title: (
      <Element canvas id='card-title-slot' is='div'>
        标题
      </Element>
    ),
    extra: (
      <Element canvas id='card-title-extra' is='div'>
        额外空间
      </Element>
    ),
    children: (
      <Element canvas id='card-title-children' is='div'>
        <div>请添加组件</div>
      </Element>
    ),
  },
)

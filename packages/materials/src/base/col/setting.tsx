import { FormSetter } from '@turbolc/setter'
import { InputNumber } from 'antd'

export const ColSetting = () => {
  return (
    <div>
      <FormSetter
        fields={{
          name: 'span',
          label: '栅格占位格数',
          tooltip: '栅格占位格数，为 0 时相当于 display: none',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'pull',
          label: '栅格向左移动格数',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'push',
          label: '栅格向右移动格',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'order',
          label: '栅格顺序',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'offset',
          label: '栅格左侧的间隔格数',
          tooltip: '间隔内不可以有栅格',
        }}
      >
        <InputNumber />
      </FormSetter>
    </div>
  )
}

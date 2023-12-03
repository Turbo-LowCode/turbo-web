import { FormSetter, toOptions } from '@turbolc/setter'
import { InputNumber, Select } from 'antd'

export const RowSetting = () => {
  return (
    <div>
      <FormSetter
        fields={{
          name: 'justify',
          label: '水平对齐',
        }}
      >
        <Select options={toOptions(['top', 'middle', 'bottom', 'stretch'])} />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'align',
          label: '垂直对齐',
        }}
      >
        <Select options={toOptions(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'])} />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'gutter',
          label: '栅格间隔',
        }}
      >
        <InputNumber />
      </FormSetter>
    </div>
  )
}

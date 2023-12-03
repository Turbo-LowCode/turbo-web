import { FormSetter } from '@turbolc/setter'
import { Input, Segmented } from 'antd'

export const TitleSetting = () => {
  return (
    <div>
      <FormSetter
        fields={{
          name: 'children',
          label: '文本内容',
        }}
      >
        <Input />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'level',
          label: '级别',
          tooltip: '重要程度，相当于 h1、h2、h3、h4、h5',
        }}
      >
        <Segmented
          options={[
            { label: 'H1', value: 1 },
            { label: 'H2', value: 2 },
            { label: 'H3', value: 3 },
            { label: 'H4', value: 4 },
            { label: 'H5', value: 5 },
          ]}
        />
      </FormSetter>
    </div>
  )
}

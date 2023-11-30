import { FormSetter } from '@turbo/setter'
import { Input } from 'antd'

export const TextSetting = () => {
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
    </div>
  )
}

import { FormSetter } from '@turbo/setter'
import { Input } from 'antd'

export const LinkSetting = () => {
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
          name: 'href',
          label: '链接',
          tooltip: '锚点链接',
        }}
      >
        <Input />
      </FormSetter>
    </div>
  )
}

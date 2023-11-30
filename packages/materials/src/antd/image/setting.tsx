import { FormSetter } from '@turbo/setter'
import { Input, InputNumber, Switch } from 'antd'

export const ImageSetting = () => {
  return (
    <div>
      <FormSetter
        fields={{
          name: 'width',
          label: '宽度',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'height',
          label: '高度',
        }}
      >
        <InputNumber />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'src',
          label: '图片路径',
        }}
      >
        <Input />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'preview',
          label: '预览状态',
          valuePropName: 'checked',
          tooltip: '是否开启预览',
        }}
      >
        <Switch checkedChildren="禁用" unCheckedChildren="启用" />
      </FormSetter>
    </div>
  )
}

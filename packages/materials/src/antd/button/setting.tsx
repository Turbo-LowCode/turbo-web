import { BindStateManageSetter, FormSetter, toOptions } from '@turbolc/setter'
import { Input, Segmented, Select, Switch } from 'antd'

export const ButtonSetting = () => {
  return (
    <div>
      <FormSetter
        fields={{
          // name: 'children',
          name: 'text',
          label: '文本内容',
        }}
      >
        <Input />
      </FormSetter>
      <BindStateManageSetter name='$$store' label='属性绑定' tooltip='自定义变量并可以绑定到value中' />
      <FormSetter
        fields={{
          name: 'href',
          label: '跳转链接',
          tooltip: '添加跳转链接，设置此属性，button表现跟a标签一致',
        }}
      >
        <Input placeholder='请输入跳转地址.' />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'type',
          label: '类型',
          tooltip: '按钮的类型',
        }}
      >
        <Select options={toOptions(['default', 'primary', 'dashed', 'text', 'link'])} />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'disabled',
          label: '禁用状态',
          valuePropName: 'checked',
        }}
      >
        <Switch checkedChildren='禁用' unCheckedChildren='启用' />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'loading',
          label: '加载状态',
          valuePropName: 'checked',
        }}
      >
        <Switch checkedChildren='禁用' unCheckedChildren='启用' />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'shape',
          label: '形状',
          tooltip: '按钮形状，circle - 圆形， round - 全圆角， square - 长方形',
        }}
      >
        <Segmented options={['circle', 'round', 'square']} />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'htmlType',
          label: '原生类型',
          tooltip: '按钮原生的 html type 类型',
        }}
      >
        <Segmented options={['button', 'submit', 'reset']} />
      </FormSetter>
      <FormSetter
        fields={{
          name: 'size',
          label: '尺寸',
          tooltip: '按钮的尺寸',
        }}
      >
        <Segmented options={['mini', 'small', 'default', 'large']} />
      </FormSetter>
    </div>
  )
}

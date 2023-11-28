import { ProForm, ProFormText } from '@ant-design/pro-components'

const PasswordSettings = () => {
  return (
    <>
      <ProForm.Group title="属性" collapsible align="start">
        <ProFormText label="label" name="label" />
        <ProFormText label="绑定属性" name="name" />
      </ProForm.Group>
    </>
  )
}

export default PasswordSettings
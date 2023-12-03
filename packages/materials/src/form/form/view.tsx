import { ProForm, ProFormProps, ProFormText } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { Form } from 'antd'
import { PropsWithChildren } from 'react'
import { Slot } from '../../common/Slot/Slot'

export const defaultProps: ProFormProps & PropsWithChildren = {}

export const FormView: ReactMaterialViewType<ProFormProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  const [form] = Form.useForm()
  return (
    <div ref={ref}>
      <ProForm
        form={form}
        {...props}
        onValuesChange={changeValues => console.log(changeValues)}
        onFinish={v => {
          console.log(v, 'onValuesChange')
        }}
      >
        <ProFormText name='name1' />
        <Slot>{children}</Slot>
      </ProForm>
    </div>
  )
}

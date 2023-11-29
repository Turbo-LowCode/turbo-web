import { Form } from 'antd'
import { FC, PropsWithChildren } from 'react'

export interface FormSetterProps extends PropsWithChildren {
  fields: React.ComponentProps<typeof Form.Item<any>>
}

export const FormSetter: FC<FormSetterProps> = ({ fields, children }) => {
  return <Form.Item {...fields}>{children}</Form.Item>
}

FormSetter.defaultProps = {
  fields: {},
}

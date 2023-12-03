import { ReactMaterialViewType } from '@turbolc/core'
import { Form } from 'antd'
import { PropsWithChildren } from 'react'
import { Slot } from '../../components/Slot/Slot'

export const defaultProps: PropsWithChildren = {}

export const FormItemView: ReactMaterialViewType<PropsWithChildren> = ({ children }, ref: any) => {
  return (
    <div ref={ref}>
      <Form.Item>
        <Slot>{children}</Slot>
      </Form.Item>
    </div>
  )
}

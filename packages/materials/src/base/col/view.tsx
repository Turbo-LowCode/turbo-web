import { ReactMaterialViewType } from '@turbolc/core'
import { Col, ColProps } from 'antd'
import { PropsWithChildren } from 'react'

export const defaultProps: ColProps & PropsWithChildren = {
  span: 4,
}

export const ColView: ReactMaterialViewType<ColProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Col ref={ref} {...props}>
      行
    </Col>
  )
}

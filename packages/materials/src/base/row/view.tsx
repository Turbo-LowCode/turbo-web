import { ReactMaterialViewType } from '@turbolc/core'
import { Row, RowProps } from 'antd'
import { PropsWithChildren } from 'react'
import { __Col__ } from '..'

export const defaultProps: RowProps & PropsWithChildren = {}

export const RowView: ReactMaterialViewType<RowProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Row ref={ref} {...props}>
      <__Col__ />
      {children}
    </Row>
  )
}

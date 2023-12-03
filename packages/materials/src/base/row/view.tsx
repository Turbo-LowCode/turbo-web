import { ReactMaterialViewType } from '@turbolc/core'
import { Row, RowProps } from 'antd'
import { PropsWithChildren } from 'react'

export const defaultProps: RowProps & PropsWithChildren = {}

export const RowView: ReactMaterialViewType<RowProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Row ref={ref} {...props}>
      {/* <Column /> */}
      {children}
    </Row>
  )
}

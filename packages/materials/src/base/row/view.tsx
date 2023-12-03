import { Element } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { Row, RowProps } from 'antd'
import { PropsWithChildren } from 'react'
import { __Col__ } from '..'

export const defaultProps: RowProps & PropsWithChildren = {
  justify: 'start',
  align: 'top',
  gutter: 0,
}

export const RowView: ReactMaterialViewType<RowProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Row ref={ref} {...props}>
      <Element id='col' is={__Col__} canvas />
      {children}
    </Row>
  )
}

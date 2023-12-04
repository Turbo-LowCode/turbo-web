import { ReactMaterialViewType } from '@turbolc/core'
import { Col, ColProps } from 'antd'
import { PropsWithChildren } from 'react'
import { Element } from '@craftjs/core'
import { __Slot__ } from '../../common'

export const defaultProps: ColProps & PropsWithChildren = {
  span: 4,
  pull: 0,
  push: 0,
  order: 0,
  offset: 0,
}

export const ColView: ReactMaterialViewType<ColProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Col ref={ref} {...props}>
      <Element id='card-title-children' is={__Slot__} canvas>
        {children}
      </Element>
    </Col>
  )
}

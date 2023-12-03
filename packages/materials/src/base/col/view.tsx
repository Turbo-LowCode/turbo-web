import { Element } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { Col, ColProps } from 'antd'
import { PropsWithChildren } from 'react'
import { __Slot__ } from '../../common/slot'

export const defaultProps: ColProps & PropsWithChildren = {
  span: 4,
}

export const ColView: ReactMaterialViewType<ColProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Col ref={ref} {...props}>
      <Element id='slot' is={__Slot__} canvas />
    </Col>
  )
}

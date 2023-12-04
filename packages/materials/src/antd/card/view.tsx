import { Element } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { Card, CardProps } from 'antd'
import { __Slot__ } from '../../common'

export const defaultProps: CardProps = {}

export const CardView: ReactMaterialViewType<CardProps> = ({ children, ...props }, ref: any) => {
  return (
    <Card
      ref={ref}
      title={<Element id='card-title-slot' is={__Slot__} canvas message='标题' />}
      extra={<Element id='card-title-extra' is={__Slot__} canvas message='额外空间' />}
      {...props}
    >
      <Element id='card-title-children' is={__Slot__} canvas message='请添加组件'>
        {children}
      </Element>
    </Card>
  )
}

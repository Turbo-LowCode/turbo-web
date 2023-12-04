import { Element } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { Card, CardProps } from 'antd'
import { __Slot__ } from '../../common/slot'

export const defaultProps: CardProps = {
  // title: (
  //   <Element id='card-title-slot' is='div' canvas>
  //     标题
  //   </Element>
  // ),
  // extra: (
  //   <Element id='card-title-extra' is='div' canvas>
  //     额外空间
  //   </Element>
  // ),
  // children: (
  //   // <Element canvas id='card-title-children' is='div'>
  //   //   请添加组件
  //   // </Element>
  //   <Slot>请添加组件</Slot>
  // ),
}

export const CardView: ReactMaterialViewType<CardProps> = ({ children, ...props }, ref: any) => {
  return (
    <Card
      ref={ref}
      title={
        // <Element id='card-title-slot' is='div' canvas>
        //   标题
        // </Element>
        <Element id='card-title-slot' is={__Slot__} canvas>
          标题
        </Element>
      }
      extra={
        <Element id='card-title-extra' is={__Slot__} canvas>
          额外空间
        </Element>
      }
      {...props}
    >
      {children ? (
        children
      ) : (
        <Element id='card-title-children' is={__Slot__} canvas>
          请添加组件
        </Element>
      )}
    </Card>
  )
}

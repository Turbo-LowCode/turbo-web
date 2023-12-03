import { Element } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { Card, CardProps } from 'antd'

export const defaultProps: CardProps = {
  title: (
    <Element canvas id='card-title-slot' is='div'>
      标题
    </Element>
  ),
  extra: (
    <Element canvas id='card-title-extra' is='div'>
      额外空间
    </Element>
  ),
  children: (
    <Element canvas id='card-title-children' is='div'>
      请添加组件
    </Element>
  ),
}

export const CardView: ReactMaterialViewType<CardProps> = ({ children, ...props }, ref: any) => {
  return (
    <Card ref={ref} {...props}>
      {children}
    </Card>
  )
}

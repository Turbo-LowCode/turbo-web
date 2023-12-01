import { ReactMaterialViewType } from '@turbolc/core'
import { Card, CardProps } from 'antd'

export const CardView: ReactMaterialViewType<CardProps> = ({ children, ...props }, ref: any) => {
  return (
    <Card ref={ref} {...props}>
      {children}
    </Card>
  )
}

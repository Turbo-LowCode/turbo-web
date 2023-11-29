import { ReactMaterialViewType } from '@turbo/core'
import { Button, ButtonProps } from 'antd'

export const ButtonView: ReactMaterialViewType<ButtonProps> = ({ children = '默认填充', ...props }, ref: any) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  )
}

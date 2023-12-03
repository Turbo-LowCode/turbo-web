import { ReactMaterialViewType } from '@turbolc/core'
import { Button, ButtonProps } from 'antd'

export const defaultProps: ButtonProps & { text: string } = {
  text: '按钮',
  // BUG: 导致页面跳转
  // href: '',
  type: 'primary',
  disabled: false,
  loading: false,
  shape: 'default',
  htmlType: 'button',
  size: 'middle',
}

export const ButtonView: ReactMaterialViewType<ButtonProps & { text: string }> = ({ ...props }, ref: any) => {
  return (
    <Button ref={ref} {...props}>
      {props.text}
    </Button>
  )
}

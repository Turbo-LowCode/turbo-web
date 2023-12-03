import { ReactMaterialViewType } from '@turbolc/core'
import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'
import { PropsWithChildren } from 'react'

export const defaultProps: TextProps & PropsWithChildren = {
  children: '文本',
}

export const TextView: ReactMaterialViewType<TextProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Typography.Text {...props}>{children}</Typography.Text>
    </div>
  )
}

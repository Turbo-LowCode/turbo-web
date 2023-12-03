import { ReactMaterialViewType } from '@turbolc/core'
import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import { PropsWithChildren } from 'react'

export const defaultProps: TitleProps & PropsWithChildren = {
  children: '标题',
  level: 1,
}

export const TitleView: ReactMaterialViewType<TitleProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Typography.Title {...props}>{children}</Typography.Title>
    </div>
  )
}

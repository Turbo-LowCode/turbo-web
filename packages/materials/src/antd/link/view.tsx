import { ReactMaterialViewType } from '@turbolc/core'
import { Typography, TypographyProps } from 'antd'
import { LinkProps } from 'antd/es/typography/Link'
import { PropsWithChildren } from 'react'

export const defaultProps: LinkProps & PropsWithChildren = {
  children: '链接',
}

export const LinkView: ReactMaterialViewType<LinkProps & PropsWithChildren> = ({ children, ...props }, ref: any) => {
  return (
    <Typography.Link ref={ref} {...props}>
      {children}
    </Typography.Link>
  )
}

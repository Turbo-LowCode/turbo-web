import { ReactMaterialViewType } from '@turbo/core'
import { Typography, TypographyProps } from 'antd'
import { PropsWithChildren } from 'react'

export const LinkView: ReactMaterialViewType<TypographyProps & PropsWithChildren> = (
  { children = '默认填充', ...props },
  ref: any,
) => {
  return (
    <Typography.Link ref={ref} {...props}>
      {children}
    </Typography.Link>
  )
}

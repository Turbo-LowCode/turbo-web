import { ReactMaterialViewType } from '@turbo/core'
import { Typography, TypographyProps } from 'antd'
import { PropsWithChildren } from 'react'

export const TitleView: ReactMaterialViewType<TypographyProps & PropsWithChildren> = (
  { children = '默认填充', ...props },
  ref: any,
) => {
  return (
    <div ref={ref} className="inline-block">
      <Typography.Title {...props}>{children}</Typography.Title>
    </div>
  )
}

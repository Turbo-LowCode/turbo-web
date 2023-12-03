import { ReactMaterialViewType } from '@turbolc/core'
import { Typography } from 'antd'
import { LinkProps } from 'antd/es/typography/Link'

export const defaultProps: LinkProps = {
  children: '链接',
}

export const LinkView: ReactMaterialViewType<LinkProps> = (props, ref: any) => {
  return <Typography.Link ref={ref} {...props} />
}

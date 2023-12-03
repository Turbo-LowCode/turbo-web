import { ReactMaterialViewType } from '@turbolc/core'
import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'

export const defaultProps: TitleProps = {
  children: '标题',
  level: 1,
}

export const TitleView: ReactMaterialViewType<TitleProps> = (props, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Typography.Title {...props} />
    </div>
  )
}

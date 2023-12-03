import { ReactMaterialViewType } from '@turbolc/core'
import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'

export const defaultProps: TextProps = {
  children: '文本',
}

export const TextView: ReactMaterialViewType<TextProps> = (props, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Typography.Text {...props} />
    </div>
  )
}

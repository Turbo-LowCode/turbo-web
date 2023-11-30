import { ReactMaterialViewType } from '@turbo/core'
import { Image, ImageProps } from 'antd'

export const ImageView: ReactMaterialViewType<ImageProps> = (props, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Image {...props} />
    </div>
  )
}

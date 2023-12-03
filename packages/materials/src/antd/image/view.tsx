import { ReactMaterialViewType } from '@turbolc/core'
import { Image, ImageProps } from 'antd'

export const defaultProps: ImageProps = {
  src: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  height: 200,
  width: 200,
}

export const ImageView: ReactMaterialViewType<ImageProps> = (props, ref: any) => {
  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Image {...props} />
    </div>
  )
}

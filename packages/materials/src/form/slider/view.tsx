import { ProFormSlider } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormSlider> = {}

export const SliderView: ReactMaterialViewType<ComponentProps<typeof ProFormSlider>> = (
  { children, ...props },
  ref: any,
) => {
  return (
    <div ref={ref}>
      <ProFormSlider {...props} />
    </div>
  )
}

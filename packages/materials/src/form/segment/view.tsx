import { ProFormSegmented } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProFormSegmented> = {}

export const SegmentView: ReactMaterialViewType<ComponentProps<typeof ProFormSegmented>> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProFormSegmented {...props} />
    </div>
  )
}

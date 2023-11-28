import { ProFormTextArea } from '@ant-design/pro-components'
import { forwardRef } from 'react'

const NumberView = forwardRef<HTMLDivElement, React.ComponentProps<typeof ProFormTextArea>>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormTextArea {...props} />
    </div>
  )
})

export default NumberView

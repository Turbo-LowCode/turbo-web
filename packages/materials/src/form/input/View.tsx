import { ProFormText } from '@ant-design/pro-components'
import { forwardRef } from 'react'

const InputView = forwardRef<HTMLDivElement, React.ComponentProps<typeof ProFormText>>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormText {...props} />
    </div>
  )
})

export default InputView

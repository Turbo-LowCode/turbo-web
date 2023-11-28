import { ProFormText } from '@ant-design/pro-components'
import { forwardRef } from 'react'

const PasswordView = forwardRef<HTMLDivElement, React.ComponentProps<typeof ProFormText.Password>>((props, ref) => {
  return (
    <div ref={ref}>
      <ProFormText.Password {...props} />
    </div>
  )
})

export default PasswordView

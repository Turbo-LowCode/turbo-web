import { useNode } from '@craftjs/core'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  background: string
  padding: number
}

const Container = ({ background, padding = 0, children }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div ref={ref => connect(drag(ref))} className='my-5' style={{ background, padding: `${padding}px` }}>
      {children}
    </div>
  )
}

export default Container

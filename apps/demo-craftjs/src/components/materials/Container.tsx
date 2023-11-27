import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  background: string
  padding: number
}

const Container = ({ background, padding = 0, children }: Props) => {
  return (
    <div className="my-5" style={{ background, padding: `${padding}px` }}>
      {children}
    </div>
  )
}

export default Container

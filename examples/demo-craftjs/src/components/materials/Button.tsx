import { useNode } from '@craftjs/core'
import { Button as AntdButton } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  size?: SizeType
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined
  color?: string
}

const Button = ({ size, type, color, children }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <AntdButton ref={ref => connect(drag(ref))} size={size} type={type} color={color}>
      {children}
    </AntdButton>
  )
}

export default Button

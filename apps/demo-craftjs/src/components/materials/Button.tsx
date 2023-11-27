import { Button as AntdButton } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'

interface Props {
  size: SizeType
  type: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined
  color: string
  text: string
}

const Button = ({ size, type, color, text }: Props) => {
  return (
    <AntdButton size={size} type={type} color={color}>
      {text}
    </AntdButton>
  )
}

export default Button

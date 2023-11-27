import { useNode } from '@craftjs/core'

interface Props {
  text: string
  fontSize: number
}

const Text = ({ text, fontSize }: Props) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div ref={ref => connect(drag(ref))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  )
}

Text.craft = {
  rules: {
    canDrag: node => node.data.props.text !== 'Drag',
  },
}

export default Text

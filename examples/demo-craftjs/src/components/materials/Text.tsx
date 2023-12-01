import { useNode } from '@craftjs/core'
import { Form, Input, Slider } from 'antd'
import FormItem from 'antd/es/form/FormItem'

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

const TextSettings = () => {
  const {
    actions: { setProp },
    text,
    fontSize,
  } = useNode(node => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }))

  return (
    <Form>
      <FormItem label='文本'>
        <Input value={text} onChange={e => setProp(props => (props.text = e.target.value))} />
      </FormItem>
      <FormItem label='大小'>
        <Slider min={10} max={100} value={fontSize} onChange={val => setProp(props => (props.fontSize = val))} />
      </FormItem>
    </Form>
  )
}

Text.craft = {
  props: {
    text: 'Hi Turbo',
    fontSize: 20,
  },
  rules: {
    canDrag: node => node.data.props.text !== 'Drag',
  },
  related: {
    settings: TextSettings,
  },
}

export default Text

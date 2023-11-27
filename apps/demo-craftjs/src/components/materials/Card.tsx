import { Element, useNode } from '@craftjs/core'
import { PropsWithChildren } from 'react'
import Button from './Button'
import Container from './Container'
import Text from './Text'

export const CardTop = ({ children }: PropsWithChildren) => {
  const {
    connectors: { connect },
  } = useNode()
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: incomingNodes => incomingNodes.every(incomingNode => incomingNode.data.type === Text),
  },
}

export const CardBottom = ({ children }: PropsWithChildren) => {
  const {
    connectors: { connect },
  } = useNode()
  return <div ref={connect}>{children}</div>
}

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: incomingNodes => incomingNodes.every(incomingNode => incomingNode.data.type === Button),
  },
}

interface Props {
  background?: string
  padding?: number
}

const Card = ({ background = '#fff', padding = 20 }: Props) => {
  return (
    <Container background={background} padding={padding}>
      {/* <Element /> used inside User Component must specify an id prop */}
      <Element is={CardTop} id="texts" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element is={CardBottom} id="buttons" canvas>
        <Button size="small" type="primary" color="primary">
          Learn more
        </Button>
      </Element>
      {/* <Element id="texts" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" canvas>
        <Button size="small" type="primary" color="primary">
          Learn more
        </Button>
      </Element> */}
    </Container>
  )
}

export default Card

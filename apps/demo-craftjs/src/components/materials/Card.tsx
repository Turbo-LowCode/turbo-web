// components/user/Card.js
import Button from './Button'
import Container from './Container'
import Text from './Text'

interface Props {
  background: string
  padding: number
}

export const Card = ({ background, padding = 20 }: Props) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only">
        <Button size="small" text="Learn more" type="primary" color="primary" />
      </div>
    </Container>
  )
}

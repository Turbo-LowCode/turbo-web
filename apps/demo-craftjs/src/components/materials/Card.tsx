import Button from './Button'
import Container from './Container'
import Text from './Text'

interface Props {
  background?: string
  padding?: number
}

const Card = ({ background = '#fff', padding = 20 }: Props) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only">
        <Button size="small" type="primary" color="primary">
          Learn more
        </Button>
      </div>
    </Container>
  )
}

export default Card

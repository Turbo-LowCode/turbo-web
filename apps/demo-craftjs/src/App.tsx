import { Editor, Element, Frame } from '@craftjs/core'
import { Typography } from 'antd'
import Button from './components/materials/Button'
import Card from './components/materials/Card'
import Container from './components/materials/Container'
import Text from './components/materials/Text'
import Toolbox from './components/materials/Toolbox'

function App() {
  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography.Title level={5} className="text-center">
        A super simple page editor
      </Typography.Title>
      <Editor resolver={{ Card, Button, Text, Container }}>
        <div className="pt-10 gap-3">
          <Frame>
            <Element canvas is={Container} padding={5} background="#eee">
              <Card />
              <Button size="small" type="dashed">
                Click
              </Button>
              <Text fontSize={20} text="Hi world!" />
              <Element canvas is={Container} padding={6} background="#999">
                <Text fontSize={14} text="It's me again!" />
              </Element>
            </Element>
          </Frame>
          <div className="my-5">
            <Toolbox />
          </div>
        </div>
      </Editor>
    </div>
  )
}

export default App

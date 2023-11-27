import { useEditor } from '@craftjs/core'
import { Button as AntdButton, Typography } from 'antd'
import Button from './Button'
import Card from './Card'
import Container from './Container'
import Text from './Text'

const Toolbox = () => {
  const {
    connectors: { create },
    query,
  } = useEditor()

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center gap-1">
        <Typography className="pb-2">Drag to add</Typography>
        <AntdButton
          ref={ref =>
            create(
              ref,
              <Button type="default" size="middle">
                Button
              </Button>,
            )
          }
          type="primary"
        >
          Button
        </AntdButton>
        <AntdButton ref={ref => create(ref, <Text fontSize={16} text="Text" />)} type="primary">
          Text
        </AntdButton>
        <AntdButton ref={ref => create(ref, <Container padding={5} background="transparent" />)} type="primary">
          Container
        </AntdButton>
        <AntdButton ref={ref => create(ref, <Card padding={5} background="transparent" />)} type="primary">
          Card
        </AntdButton>
      </div>
    </div>
  )
}

export default Toolbox

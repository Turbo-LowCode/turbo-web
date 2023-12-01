import { Editor, Element, Frame } from '@craftjs/core'
import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import SettingPanel from './components/SettingPanel'
import Toolbox from './components/Toolbox'
import TopBar from './components/TopBar'
import Button from './components/materials/Button'
import Card, { CardBottom, CardTop } from './components/materials/Card'
import Container from './components/materials/Container'
import Text from './components/materials/Text'

function App() {
  const [json, setJSON] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('data') ?? ''
    console.log('🚀 ~ file: App.tsx:17 ~ useEffect ~ data:', JSON.parse(JSON.parse(data)))
    if (data) setJSON(data)
  }, [])

  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography.Title level={5} className='text-center'>
        A super simple page editor
      </Typography.Title>
      {/* Remember that every User Component must be added to our resolver */}
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
        <TopBar />
        <div className='flex pt-10 gap-3'>
          <div className='flex-1'>
            <Frame data={json}>
              <Element canvas is={Container} padding={5} background='#eee'>
                <Card />
                <Button size='small' type='dashed'>
                  Click
                </Button>
                <Text fontSize={20} text='Hi world!' />
                <Element canvas is={Container} padding={6} background='#999'>
                  <Text fontSize={14} text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </div>
          <div className='my-5'>
            <Toolbox />
            <SettingPanel />
          </div>
        </div>
      </Editor>
    </div>
  )
}

export default App

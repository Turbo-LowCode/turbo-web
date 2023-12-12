import { Col, Row, Space, Typography } from 'antd'
import { AppDashBoardTable } from './Apps'
import { NotifyCard } from './NotifyCard'

const Home = () => {
  return (
    <div>
      <Row>
        <Col flex='auto'>
          <Space direction='vertical' className='w-full' size='large'>
            <Space size={0} direction='vertical'>
              <Typography.Title level={3}>早上好，欢迎来到 Turbo</Typography.Title>
              <Typography.Text type='secondary'>
                Turbo 拥有丰富的业务组件、模板，帮助你快速完成产品研发。
              </Typography.Text>
            </Space>
            <NotifyCard />
            <AppDashBoardTable />
          </Space>
        </Col>
        <Col flex='300px' />
      </Row>
    </div>
  )
}

export default Home

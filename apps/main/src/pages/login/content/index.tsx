import { GithubFilled } from '@ant-design/icons'
import { Button, Divider, Space, Typography } from 'antd'
import { LoginForm } from './LoginForm'

export const Content = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <div className='min-w-[400px]'>
        <Typography.Title level={3}>欢迎到来</Typography.Title>
        <Space>
          <Typography.Text type='secondary'>还没有账号?</Typography.Text>
          <Typography.Link>立即注册</Typography.Link>
        </Space>
        <LoginForm />
        <Divider plain>或者</Divider>
        <Button block size='large' icon={<GithubFilled />}>
          使用Github登录
        </Button>
      </div>
    </div>
  )
}

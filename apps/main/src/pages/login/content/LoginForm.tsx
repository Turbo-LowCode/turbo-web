import { Button, Checkbox, Form, Input, Select, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

interface LoginFormTypes {
  username: string
  password: string
  method: 'email' | 'phone'
}

export const LoginForm = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<LoginFormTypes>()
  const methodValue = Form.useWatch('method', form)
  const methodName = methodValue === 'phone' ? '手机号' : '邮箱'

  const handleLoginFormSubmit = () => {
    navigate({ pathname: '/' }, { replace: true })
  }

  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{
        method: 'email',
      }}
      style={{
        marginTop: 40,
      }}
      onFinish={handleLoginFormSubmit}
    >
      <Form.Item
        required
        label={methodName}
        name='username'
        rules={[
          {
            required: true,
            message: `请输入您的${methodName}`,
          },
        ]}
      >
        <Input
          size='large'
          addonBefore={
            <Form.Item name='method' noStyle>
              <Select style={{ minWidth: 80, maxWidth: 'max-content' }}>
                <Select.Option value='email'>邮箱</Select.Option>
                <Select.Option value='phone'>手机号</Select.Option>
              </Select>
            </Form.Item>
          }
          placeholder={`请输入您的${methodName}`}
        />
      </Form.Item>
      <Form.Item
        required
        label='密码'
        name='password'
        rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
      >
        <Input.Password placeholder='请输入您的密码' size='large' />
      </Form.Item>
      <div className='flex justify-between pt-2 pb-4'>
        <Checkbox>记住我</Checkbox>
        <Typography.Link>忘记密码?</Typography.Link>
      </div>
      <Button block type='primary' htmlType='submit' size='large'>
        立即登录
      </Button>
    </Form>
  )
}

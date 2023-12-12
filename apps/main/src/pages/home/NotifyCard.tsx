import { RightOutlined } from '@ant-design/icons'
import { Button, Card, Space, Tag, Typography } from 'antd'

export const NotifyCard = () => {
  return (
    <Card size='small' hoverable>
      <Space className='w-full' size={14} direction='vertical'>
        {[1, 3, 4].map(item => (
          <div key={item} className='grid gap-4 grid-cols-[auto_1fr_auto]'>
            <Tag color='error'>异常</Tag>
            <Typography.Text>发现 3 条异常，请立即处理</Typography.Text>
            <Button type='text' size='small' icon={<RightOutlined />} />
          </div>
        ))}
      </Space>
    </Card>
  )
}

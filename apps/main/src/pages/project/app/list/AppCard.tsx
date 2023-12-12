import { Avatar, Button, Card, ConfigProvider, Dropdown, Popconfirm } from 'antd'
import { DeleteOutlined, BranchesOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import CardImg from '@/assets/card.jpg'

const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

export const AppCard = () => {
  const navigate = useNavigate()

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            actionsLiMargin: '4px 0px',
          },
        },
      }}
    >
      {/* 做右击下拉框 */}
      <Dropdown menu={{ items }} trigger={['contextMenu']}>
        <Card
          size='small'
          className='cursor-pointer transition-all duration-700 hover:border-[1px] hover:border-[#1677ff]'
          actions={[
            <Button
              key='edit'
              type='link'
              icon={<EditOutlined />}
              onClick={() => {
                navigate('/project/manage')
              }}
            >
              编辑
            </Button>,
            <Button key='branch' type='link' icon={<BranchesOutlined />}>
              分支
            </Button>,
            <Popconfirm
              key='delete'
              title='是否删除'
              description='Are you sure to delete this task?'
              okText='Yes'
              cancelText='No'
            >
              <Button type='link' danger icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar shape='square' size='large' src={CardImg} />}
            title='测试工程'
            description='这是一个提供给营销系统使用的测试工程，用于测试不同营销场景下的效果'
          />
        </Card>
      </Dropdown>
    </ConfigProvider>
  )
}

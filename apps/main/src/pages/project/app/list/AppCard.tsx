import CardImg from '@/assets/card.jpg'
import { BranchesOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, ConfigProvider, Dropdown, Popconfirm } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

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

interface AppCardProps {
  appId: string
}

export const AppCard: FC<AppCardProps> = ({ appId }) => {
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
          className='transition-all duration-700 hover:border-[1px] hover:border-[#1677ff]'
          // cover={<img src={CardImg} alt='cover' />}
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
            className='cursor-pointer select-none'
            avatar={<Avatar shape='square' size='large' src={CardImg} />}
            title='测试工程'
            description='这是一个提供给营销系统使用的测试工程，用于测试不同营销场景下的效果'
            // @ts-ignore
            onClick={() => {
              navigate(`/app/editor/${appId}`)
              localStorage.setItem('appId', appId)
            }}
          />
        </Card>
      </Dropdown>
    </ConfigProvider>
  )
}

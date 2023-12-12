import AvatarImg from '@/assets/avatar.jpg'
import { CloseOutlined } from '@ant-design/icons'
import { useBoolean } from 'ahooks'
import { Avatar, Button, ConfigProvider, Divider, Drawer, Space, Typography } from 'antd'

export const ProfileDrawer = () => {
  const [open, { setFalse, setTrue }] = useBoolean(false)

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgMask: 'rgba(0, 0, 0, 0.15)',
          },
        },
      }}
    >
      <Avatar
        onClick={setTrue}
        style={{
          cursor: 'pointer',
        }}
        shape='square'
        src={AvatarImg}
      />
      <Drawer
        open={open}
        onClose={setFalse}
        closable={false}
        contentWrapperStyle={{ boxShadow: 'none' }}
        className='rounded-tl-[18px] rounded-bl-[18px]'
      >
        <div className='flex justify-between items-start'>
          <Space>
            <Avatar shape='square' size={48} src={AvatarImg} />
            <Space size={0} direction='vertical'>
              <Typography.Text strong>JinSo</Typography.Text>
              <Typography.Text type='secondary'>💙今天你会有好事发生💙</Typography.Text>
            </Space>
          </Space>
          <Button icon={<CloseOutlined />} onClick={setFalse} />
        </div>
        <Divider />
      </Drawer>
    </ConfigProvider>
  )
}

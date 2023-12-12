import { ProfileDrawer } from '@/components/common/ProfileDrawer'
import { TooltipButton } from '@/components/common/TooltipButton'
import { ExperimentOutlined, InboxOutlined, SearchOutlined } from '@ant-design/icons'
import { ProLayoutProps } from '@ant-design/pro-components'
import { TurboRemixIcon } from '@turbolc/icons'
import { Divider, Input, Space } from 'antd'

export const customRenderHeaderContent: ProLayoutProps['headerContentRender'] = () => {
  return (
    <div className='flex items-center justify-end'>
      <Space split={<Divider className='m-0' type='vertical' />}>
        {/* 搜索框&弹窗 */}
        <Input
          suffix={<TurboRemixIcon className='cursor-pointer' type='icon-terminal-fill' />}
          prefix={<SearchOutlined />}
          placeholder='搜索内容'
          className='w-[300px]'
        />
        {/* 操作栏 */}
        <Space>
          <TooltipButton title='实验室' icon={<ExperimentOutlined />} />
          <TooltipButton title='问题' icon={<TurboRemixIcon type='icon-record-circle-line' />} />
          <TooltipButton title='信息' icon={<InboxOutlined />} />
        </Space>
        {/* 用户信息 */}
        <ProfileDrawer />
      </Space>
    </div>
  )
}

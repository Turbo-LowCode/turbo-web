import { ModalForm } from '@ant-design/pro-components'
import { TurboRemixIcon } from '@turbolc/icons'
import type { TabsProps } from 'antd'
import { Button, Tabs } from 'antd'
import { CodeEditor } from '../CodeEditor/CodeEditor'
import { AppConfig } from './AppConfig'

const TabContent = (el: React.ReactNode) => <div className='h-[400px] overflow-auto'>{el}</div>

const items: TabsProps['items'] = [
  {
    key: 'BaseSet',
    label: '基础设置',
    children: TabContent(<AppConfig />),
  },
  {
    key: 'GlobalCSS',
    label: '全局CSS',
    children: TabContent(<CodeEditor language='css' />),
  },
]

export const ConfigSettings = () => {
  return (
    <ModalForm
      title='应用设置'
      submitter={false}
      trigger={<Button icon={<TurboRemixIcon type='icon-settings-3-line' />} />}
    >
      <Tabs defaultActiveKey='1' items={items} />
    </ModalForm>
  )
}

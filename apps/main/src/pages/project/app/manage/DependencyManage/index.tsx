import { ProCard } from '@ant-design/pro-components'
import { Tabs, TabsProps } from 'antd'
import { DependencyBody } from './DependencyBody'

const items: TabsProps['items'] = [
  {
    key: 'js',
    label: '脚本',
    children: <DependencyBody />,
  },
  {
    key: '2',
    label: '样式',
    children: <DependencyBody />,
  },
  {
    key: 'font',
    label: '字体',
    children: <DependencyBody />,
  },
]

export const DependencyManage = () => {
  return (
    <ProCard
      bordered
      title='资源管理'
      tooltip='应用依赖的配置信息'
      bodyStyle={{
        paddingBlockStart: 0,
      }}
    >
      <Tabs defaultActiveKey='js' items={items} />
    </ProCard>
  )
}

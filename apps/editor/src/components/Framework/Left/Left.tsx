import { Tabs, TabsProps, theme } from 'antd'
import { DataSource } from './DataSource'
import { Material } from './Material/Material'
import { OutlineTree } from './OutlineTree'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '组件',
    children: <Material />,
  },
  {
    key: '2',
    label: '大纲树',
    children: <OutlineTree />,
  },
  {
    key: '3',
    label: '数据源',
    children: <DataSource />,
  },
]

export const Left = () => {
  const { token } = theme.useToken()

  return (
    <div className="w-[280px]" style={{ paddingInline: token.paddingXS }}>
      <Tabs className="h-full" defaultActiveKey="1" items={items} />
    </div>
  )
}

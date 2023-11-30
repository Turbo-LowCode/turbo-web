import { Tabs, TabsProps } from 'antd'
import { createStyles } from 'antd-style'
import { DataSource } from './DataSource'
import { Material } from './Material/Material'
import { OutlineTree } from './OutlineTree'

/**
 * 对于需要token，或者hover等等的样式，或者说tailwind难以实现的，使用createStyles，不然全部使用tailwind
 * 对于 useStyles 的书写地方，暂时先放组件内部，放外面太突兀了
 */
const useStyles = createStyles(({ token }) => ({
  Container: {
    width: 280,
    paddingInline: token.paddingXS,
  },
}))

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
  const { styles } = useStyles()

  return (
    <div className={styles.Container}>
      <Tabs className="h-full" defaultActiveKey="1" items={items} />
    </div>
  )
}

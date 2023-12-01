import { ApartmentOutlined, ApiOutlined, CloudSyncOutlined, CodepenOutlined } from '@ant-design/icons'
import { createStyles } from 'antd-style'
import { ReactElement, useState } from 'react'
import { DataSource } from './DataSource'
import { History } from './History/History'
import { Material } from './Material/Material'
import { OutlineTree } from './OutlineTree'
import { Sidebar } from './Sider'

/**
 * 对于需要token，或者hover等等的样式，或者说tailwind难以实现的，使用createStyles，不然全部使用tailwind
 * 对于 useStyles 的书写地方，暂时先放组件内部，放外面太突兀了
 */
const useStyles = createStyles(({ token }) => ({
  Container: {
    display: 'grid',
    width: 320,
    height: 'calc(100vh - 50px)',
    gridTemplateColumns: '50px 1fr',
  },
  Item: {
    borderLeft: `1px solid ${token.colorBorderSecondary}`,
    height: '100%',
    overflow: 'auto',
    padding: '8px 16px',
  },
}))

const sidebarMap: Record<string, ReactElement> = {
  material: <Material />,
  outlineTree: <OutlineTree />,
  dataSource: <DataSource />,
  history: <History />,
}

const menus = [
  {
    value: 'material',
    prototype: {
      tooltip: '组件',
      icon: <CodepenOutlined />,
    },
  },

  {
    value: 'outlineTree',
    prototype: {
      tooltip: '大纲树',
      icon: <ApartmentOutlined />,
    },
  },

  {
    value: 'dataSource',
    prototype: {
      tooltip: '数据源',
      icon: <ApiOutlined />,
    },
  },

  {
    value: 'history',
    prototype: {
      tooltip: '历史记录',
      icon: <CloudSyncOutlined />,
    },
  },
]

export const Left = () => {
  const { styles } = useStyles()
  const [selectMenu, setSelectMenu] = useState('material')

  return (
    <div className={styles.Container}>
      <Sidebar value={selectMenu} menus={menus} onChange={v => setSelectMenu(v)} />
      <div className={styles.Item}>{sidebarMap[selectMenu]}</div>
    </div>
  )
}

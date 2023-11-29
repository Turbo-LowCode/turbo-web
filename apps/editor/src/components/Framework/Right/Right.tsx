import { Tabs, TabsProps, theme } from 'antd'
import { createStyles } from 'antd-style'
import { Events } from './Events'
import { Settings } from './Settings'

const useStyles = createStyles(({ token, css }) => ({
  Tab: css`
    height: '100%';
    .ant-tabs-content-top {
      height: '100%';
    }
    .ant-tabs-tabpane {
      padding: ${token.paddingXS};
      overflow: 'auto';
      height: 'calc(100% - 80px)';
      box-sizing: 'border-box';
    }
  `,
}))

const items: TabsProps['items'] = [
  {
    key: 'prototype',
    label: '属性',
    children: <Settings />,
  },
  {
    key: 'event',
    label: '事件',
    children: <Events />,
  },
]

export const Right = () => {
  const { styles } = useStyles()
  const { token } = theme.useToken()

  return (
    <div className="h-[100%_-_50px]">
      <Tabs
        className={styles.Tab}
        size="small"
        items={items}
        tabBarStyle={{ paddingInline: token.paddingXS }}
        defaultActiveKey="prototype"
      />
    </div>
  )
}

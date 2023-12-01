import { Alert, Divider, Typography } from 'antd'
import { createStyles } from 'antd-style'
import { ConfigSettings } from '../common/settings/ConfigSetting'
import { AppMenu } from './AppMenu'
import { Preview } from './ToolBar/Preview'
import { Publish } from './ToolBar/Publish'
import { ToolBar } from './ToolBar/ToolBar'

const useStyles = createStyles(({ token }) => ({
  Header: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    height: 50,
    border: `1px solid ${token.colorBorderSecondary}`,
    padding: `${token.paddingXS}px ${token.paddingSM}px`,
  },
}))

export const Header = () => {
  const { styles } = useStyles()

  return (
    <header>
      <Alert
        banner
        showIcon={false}
        type='info'
        message={
          <div className={'text-center'}>
            <Typography.Link>
              您当前所处在beta版本, 部分功能可能不生效, 出现问题请反馈. 点击公告可以跳转反馈地址 🎉
            </Typography.Link>
          </div>
        }
        closable
      />
      <div className={styles.Header}>
        <div className='flex items-center justify-start gap-2'>
          <AppMenu />
          <Divider className='m-2 border-[#e5e6eb]' type='vertical' />
          <div>
            <Typography.Text
              strong
              editable={{
                autoSize: true,
              }}
            >
              标准标题
            </Typography.Text>
          </div>
        </div>
        <ToolBar />
        <div className='flex items-center justify-end gap-3'>
          <ConfigSettings />
          <Preview />
          <Publish />
        </div>
      </div>
    </header>
  )
}

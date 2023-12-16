import { logger } from '@/utils'
import { CaretRightOutlined, SaveOutlined, ThunderboltFilled } from '@ant-design/icons'
import { useEditor } from '@craftjs/core'
import { addHistoryRecord } from '@turbolc/core'
import { Alert, Button, Divider, Typography, message } from 'antd'
import { createStyles } from 'antd-style'
import { useNavigate } from 'react-router-dom'
import { ConfigSettings } from '../common/settings/ConfigSetting'
import { AppMenu } from './AppMenu'
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
  const { query } = useEditor()
  const navigate = useNavigate()

  const handleSave = () => {
    try {
      const schema = query.serialize()
      const appId = localStorage.getItem('appId')
      localStorage.setItem(`${appId}_schema`, schema)
      addHistoryRecord({
        id: Date.now(),
        user: 'test',
        pageSchema: schema,
        createTime: new Date().toLocaleString(),
      })
      logger.info(`${appId}_schema`, schema)
      message.success('保存成功')
    } catch (error) {
      logger.error(error)
      message.error('哎呀，系统发生错误了，请查看控制台')
    }
  }

  const handlePreview = () => {
    try {
      const schema = query.serialize()
      const appId = localStorage.getItem('appId')
      localStorage.setItem(`${appId}_schema`, schema)
      logger.info(`${appId}_schema`, schema)
      // window.open(`/app/editor/${appId}/preview`)
      navigate('/preview')
    } catch (error) {
      logger.error(error)
      message.error('哎呀，系统发生错误了，请查看控制台')
    }
  }

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
          <Button type='dashed' icon={<SaveOutlined />} onClick={handleSave}>
            保存
          </Button>
          <Button type='dashed' icon={<CaretRightOutlined />} onClick={handlePreview}>
            预览
          </Button>
          <Button type='primary' icon={<ThunderboltFilled />}>
            发布
          </Button>
        </div>
      </div>
    </header>
  )
}

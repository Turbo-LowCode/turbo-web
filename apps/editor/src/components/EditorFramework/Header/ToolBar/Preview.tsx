import { logger } from '@/utils'
import { useEditor } from '@craftjs/core'
import { Button, message } from 'antd'
import { v4 as uuid } from 'uuid'

export const Preview = () => {
  const { query } = useEditor()

  const handlePreview = () => {
    try {
      const schema = query.serialize()
      const pageId = uuid()
      sessionStorage.setItem(pageId, schema)
      logger.info(pageId, schema)
      window.open(`/preview/${pageId}`)
    } catch (error) {
      logger.error(error)
      message.error('哎呀，系统发生错误了，请查看控制台')
    }
  }

  return (
    <Button type='dashed' onClick={handlePreview}>
      预览
    </Button>
  )
}

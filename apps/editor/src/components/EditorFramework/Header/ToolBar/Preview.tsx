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
      console.log(pageId, schema)
      window.open(`/preview/${pageId}`)
    } catch (error) {
      console.error(error)
      message.error('哎呀，系统发生错误了，请查看控制台')
    }
  }

  return (
    <Button type='dashed' onClick={handlePreview}>
      预览
    </Button>
  )
}

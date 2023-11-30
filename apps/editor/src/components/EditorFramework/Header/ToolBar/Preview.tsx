import { useEditor } from '@craftjs/core'
import { Button, message } from 'antd'
import { v4 as uuid } from 'uuid'

export const Preview = () => {
  const { query } = useEditor()

  const handlePreview = () => {
    try {
      const schema = query.serialize()
      const projectId = uuid()
      sessionStorage.setItem(projectId, schema)
      console.log(projectId, schema)
      window.open(`/preview/${projectId}`)
    } catch (error) {
      console.error(error)
      message.error('哎呀，系统发生错误了，请查看控制台')
    }
  }

  return (
    <Button type="dashed" onClick={handlePreview}>
      预览
    </Button>
  )
}

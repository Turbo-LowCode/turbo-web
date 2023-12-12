import { EditorFramework } from '@/components/EditorFramework/EditorFramework'
import { LoadingOutlined } from '@ant-design/icons'
import { EditorRefProps } from '@turbolc/core'
import { Spin, message } from 'antd'
import { useEffect, useRef, useState } from 'react'

const Editor = () => {
  const editorFrameworkRef = useRef<EditorRefProps>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const appId = localStorage.getItem('appId')
    if (appId) {
      const schema = localStorage.getItem(`${appId}_schema`)
      if (schema) {
        editorFrameworkRef.current?.loadEditorSchema(schema)
      }
      setLoading(false)
      message.info('加载成功')
    }
  }, [])

  if (loading)
    return <Spin className='absolute right-4 top-4' indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />

  return <EditorFramework ref={editorFrameworkRef} />
}

export default Editor

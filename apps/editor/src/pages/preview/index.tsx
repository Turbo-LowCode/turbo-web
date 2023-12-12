import { EditorFramework } from '@/components/EditorFramework/EditorFramework'
import { EditorRefProps } from '@turbolc/core'
import { Result } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const Preview = () => {
  const editorFrameworkRef = useRef<EditorRefProps>(null)
  const { pageId } = useParams()
  const [isExist, setIsExist] = useState(true)

  useEffect(() => {
    if (pageId) {
      const schema = sessionStorage.getItem(pageId)
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current.loadEditorSchema(schema)
      } else {
        setIsExist(false)
      }
    }
  }, [editorFrameworkRef])

  return isExist ? (
    <EditorFramework ref={editorFrameworkRef} isPreview />
  ) : (
    <Result status='404' title='未能找到预览页面' />
  )
}

export default Preview

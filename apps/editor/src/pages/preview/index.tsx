import { EditorFramework } from '@/components/EditorFramework/EditorFramework'
import { EditorRefProps } from '@turbolc/core'
import { Result } from 'antd'
import { useEffect, useRef, useState } from 'react'

const Preview = () => {
  const editorFrameworkRef = useRef<EditorRefProps>(null)
  const [isExist, setIsExist] = useState(true)

  useEffect(() => {
    const appId = localStorage.getItem('appId')
    if (appId) {
      const schema = localStorage.getItem(`${appId}_schema`)
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current.loadEditorSchema(schema)
      } else {
        setIsExist(false)
      }
    }
  }, [])

  return isExist ? (
    <EditorFramework ref={editorFrameworkRef} isPreview />
  ) : (
    <Result status='404' title='未能找到预览页面' />
  )
}

export default Preview

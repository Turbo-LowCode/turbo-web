import { EditorRefProps } from '@turbo/core'
import { Result } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EditorFramework } from '../EditorFramework/EditorFramework'

export const Preview = () => {
  const editorFrameworkRef = useRef<EditorRefProps>(null)
  const { projectId } = useParams()
  const [isExist, setIsExist] = useState(true)

  useEffect(() => {
    console.log('🚀 ~ file: Preview.tsx:14 ~ useEffect ~ projectId:', projectId)
    if (projectId) {
      const schema = sessionStorage.getItem(projectId)
      console.log('🚀 ~ file: Preview.tsx:16 ~ useEffect ~ schema:', schema, editorFrameworkRef)
      if (editorFrameworkRef?.current && schema) {
        editorFrameworkRef.current.loadEditorSchema(schema)
      } else {
        setIsExist(false)
      }
    }
  }, [editorFrameworkRef])

  return isExist ? (
    <EditorFramework ref={editorFrameworkRef} enabled={false} isPreview />
  ) : (
    <Result status="404" title="未能找到预览页面" />
  )
}
import { EditorFramework } from '@/components/EditorFramework/EditorFramework'
import { EditorRefProps } from '@turbolc/core'
import { useEffect, useRef } from 'react'

const Editor = () => {
  const editorFrameworkRef = useRef<EditorRefProps>(null)

  useEffect(() => {
    const appId = localStorage.getItem('appId')
    if (appId) {
      const schema = localStorage.getItem(`${appId}_schema`)
      if (schema) {
        editorFrameworkRef.current?.loadEditorSchema(schema)
      }
    }
  }, [])

  return <EditorFramework ref={editorFrameworkRef} />
}

export default Editor

import { EditorRefProps } from '@/types'
import { useEditor } from '@craftjs/core'
import { forwardRef, useEffect, useImperativeHandle } from 'react'

export const EditorRef = forwardRef<EditorRefProps>((_, ref) => {
  const { actions, query } = useEditor()

  // 定时保存编辑器Schema
  useEffect(() => {
    const autoSaveEditorSchema = () => {
      const schema = query.serialize()
      localStorage.setItem('editor_schema', schema)
      console.log('auto save editor schema')
    }

    const timer = setInterval(autoSaveEditorSchema, 30 * 60 * 1000)

    return () => {
      clearInterval(timer)
    }
  }, [query])

  // 暴露给ref加载编辑器Schema的方法
  useImperativeHandle(ref, () => ({
    loadEditorSchema(json, options) {
      actions.deserialize(json)
    },
  }))

  return null
})

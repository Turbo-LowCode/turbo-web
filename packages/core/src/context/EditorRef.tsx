import { EditorRefProps } from '@/types'
import { useEditor } from '@craftjs/core'
import { forwardRef, useEffect, useImperativeHandle } from 'react'
import { addHistoryRecord } from '../db'

export const EditorRef = forwardRef<EditorRefProps>((_, ref) => {
  const { actions, query } = useEditor()

  // 定时保存编辑器Schema
  useEffect(() => {
    const autoSaveEditorSchema = () => {
      const schema = query.serialize()
      addHistoryRecord({
        id: Date.now(),
        user: 'test',
        pageSchema: schema,
        createTime: new Date().toLocaleString(),
      })
      console.log('auto save editor schema')
    }

    const timer = setInterval(autoSaveEditorSchema, 5 * 60 * 1000)

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

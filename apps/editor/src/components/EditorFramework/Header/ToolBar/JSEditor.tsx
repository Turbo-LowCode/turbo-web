import { logger } from '@/utils'
import { ModalForm, ProCard } from '@ant-design/pro-components'
import type { OnMount } from '@monaco-editor/react'
import { compileModuleResolve, transformCode } from '@turbolc/core'
import { message } from 'antd'
import { FC, useRef } from 'react'
import { CodeEditor } from '../../common/CodeEditor/CodeEditor'
import { useSchemaStore } from '../../stores/schema'

export interface JSEditorProps {
  trigger: React.ReactElement
}

export const JSEditor: FC<JSEditorProps> = ({ trigger }) => {
  const { jsModuleCode, setJsModuleCode } = useSchemaStore()
  const editorRef = useRef<Parameters<OnMount>[0]>()

  // 编辑器Mount钩子，需要注册一些事例
  const onEditorMount: OnMount = (_, monaco) => {
    editorRef.current = _

    // 设置语言为react tsx
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: 'React.createElement',
      reactNamespace: 'React',
      allowJs: true,
    })

    // 设置当前的ts配置
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    })

    // 设置当前js配置
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
    })
  }

  const onBuilderJSCode = async () => {
    const code = editorRef.current?.getValue()
    setJsModuleCode(code ?? '')
    // BUG: 不生效
    message.success('保存成功')

    const bundleCode = await transformCode(code ?? '')
    logger.info(bundleCode)
    logger.info(compileModuleResolve(bundleCode ?? ''))
  }

  return (
    <ModalForm title='JS模块' trigger={trigger} onFinish={onBuilderJSCode}>
      <ProCard ghost>
        <CodeEditor
          height={500}
          language='typescript'
          defaultLanguage='typescript'
          defaultValue={jsModuleCode}
          onMount={onEditorMount}
        />
      </ProCard>
    </ModalForm>
  )
}

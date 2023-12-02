import { CustomFormItemFieldProps } from '@/types'
import { EditableProTable, ModalForm, ProCard, ProColumns } from '@ant-design/pro-components'
import { Editor, EditorProps, type OnMount } from '@monaco-editor/react'
import { Button, Space } from 'antd'
import { FC, useEffect, useRef, useState } from 'react'

export interface BindStateType {
  id: string
  name: string
  defaultVal?: unknown
  desc?: string
}

const columns: ProColumns<BindStateType>[] = [
  {
    title: '名称',
    dataIndex: 'name',
    formItemProps: () => {
      return {
        rules: [{ required: true, message: '必填' }],
      }
    },
  },
  {
    title: '默认值',
    dataIndex: 'defaultVal',
    formItemProps: () => {
      return {
        rules: [{ required: true, message: '必填' }],
      }
    },
  },
  {
    title: '字段描述',
    dataIndex: 'desc',
  },
  {
    title: '操作',
    valueType: 'option',
  },
]

export const BindStateModal: FC<CustomFormItemFieldProps> = ({ value, onChange }) => {
  const editorRef = useRef<Parameters<OnMount>[0]>()
  const [dataSource, setDataSource] = useState<readonly BindStateType[]>([])

  // 编辑器初始化完成绑定ref
  const handleEditorDidMount: EditorProps['onMount'] = editor => {
    editorRef.current = editor
    if (dataSource) {
      editor.setValue(JSON.stringify(dataSource, null, 2))
    }
  }

  const saveEditorState = async () => {
    onChange?.(dataSource)
    return true
  }

  // 同步表单和编辑器内容
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(JSON.stringify(dataSource, null, 2))
    }
  }, [dataSource])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <需要根据value来重置表单>
  useEffect(() => {
    setDataSource([])
  }, [value])

  return (
    <ModalForm title='状态管理' width={800} trigger={<Button block>状态管理</Button>} onFinish={saveEditorState}>
      <Space direction='vertical' className='w-full'>
        <ProCard bordered collapsible size='small' title='JSON编辑' headerBordered defaultCollapsed={false}>
          <Editor height={300} defaultLanguage='json' onMount={handleEditorDidMount} />
        </ProCard>
        <EditableProTable<BindStateType>
          bordered
          tableStyle={{
            padding: 0,
            margin: 0,
          }}
          rowKey='id'
          columns={columns}
          recordCreatorProps={{
            record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
          }}
          dataSource={dataSource}
          onChange={setDataSource}
          editable={{
            type: 'multiple',
          }}
        />
      </Space>
    </ModalForm>
  )
}

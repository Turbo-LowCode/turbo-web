import { ProTable } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { SortOrder } from 'antd/es/table/interface'
import { ComponentProps } from 'react'

type RequestType<T = unknown> = (
  params: {
    pageSize?: number
    current?: number
  },
  sort: Record<string, SortOrder>,
  filter: Record<string, (string | number)[] | null>,
) => Promise<{
  success: boolean
  data: T[]
  total: number
}>

interface TableProps extends ComponentProps<typeof ProTable> {
  searchFields?: any
}

export const defaultProps: TableProps = {
  params: {},
  request: async (params: any) => {
    const res = await fetch('https://proapi.azurewebsites.net/github/issues')
    console.log('🚀 ~ file: view.tsx:30 ~ request: ~ res:', res)
    const data = await res.json()
    return data
  },
  searchFields: [
    {
      label: '标题',
      field: 'title',
      componentProps: {
        options: [],
        placeholder: '请输入标题',
      },
      componentType: 'Input',
    },
    {
      label: '标题',
      field: 'title',
      componentProps: {
        options: [],
        placeholder: '请输入标题',
      },
      componentType: 'Input',
    },
    {
      label: '标题',
      field: 'title',
      componentProps: {
        options: [],
        placeholder: '请输入标题',
      },
      componentType: 'Input',
    },
    {
      label: '标题',
      field: 'title',
      componentProps: {
        options: [],
        placeholder: '请输入标题',
      },
      componentType: 'Input',
    },
  ],
  columns: [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
    },
  ],
}

export const TableView: ReactMaterialViewType<TableProps> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProTable tableStyle={{ height: 500, overflow: 'scroll' }} {...props} />
    </div>
  )
}

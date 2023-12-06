import { ProTable } from '@ant-design/pro-components'
import { ReactMaterialViewType } from '@turbolc/core'
import { Tag } from 'antd'
import { ComponentProps } from 'react'

export const defaultProps: ComponentProps<typeof ProTable> = {
  defaultData: [],
  params: {},
  request: async (params: any) => {
    const res = await fetch('https://proapi.azurewebsites.net/github/issues')
    const data = await res.json()
    return data
  },
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
      title: '标签',
      dataIndex: 'label',
      render(dom, entity, index, action, schema) {
        return <Tag color={entity.labels[0].color}>{entity.labels[0].name}</Tag>
      },
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
    },
  ],
}

export const ProTableView: ReactMaterialViewType<ComponentProps<typeof ProTable>> = (props, ref: any) => {
  return (
    <div ref={ref}>
      <ProTable tableStyle={{ height: 500, overflowY: 'scroll' }} {...props} />
    </div>
  )
}

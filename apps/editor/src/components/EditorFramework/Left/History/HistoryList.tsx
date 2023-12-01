import { useEditor } from '@craftjs/core'
import { StoreItem, deleteHistoryRecord } from '@turbolc/core'
import { Card, Col, Row, Space, Typography, message } from 'antd'
import { FC } from 'react'
import { v4 as uuid } from 'uuid'

interface HistoryListProps {
  list: StoreItem[]
  reload: () => void
}

export const HistoryList: FC<HistoryListProps> = ({ list, reload }) => {
  const { actions } = useEditor()

  const handleImport = async (record: StoreItem) => {
    // TODO: 会导致太多的无用存储
    // 先保存当前正在编辑的页面
    // addHistoryRecord({
    //   id: Date.now(),
    //   user: 'test',
    //   pageSchema: query.serialize(),
    //   createTime: new Date().toLocaleString(),
    // })
    // 导入历史Schema
    actions.deserialize(record.pageSchema)
  }

  const handlePreview = async (record: StoreItem) => {
    // 生成preview逻辑
    const pageId = uuid()
    sessionStorage.setItem(pageId, record.pageSchema)
    window.open(`/preview/${pageId}?history=local&historyId=${record.id}`)
  }

  const handleDelete = async (recordId: number) => {
    await deleteHistoryRecord(recordId)
    message.success('删除成功')
    reload()
  }

  return (
    <div className='p-3'>
      <Row gutter={[12, 12]}>
        {list.map(item => {
          return (
            <Col span={24} key={item.id}>
              <Card size='small'>
                <Space direction='vertical'>
                  <Typography.Text>{item.createTime}</Typography.Text>
                  <Space>
                    <Typography.Text className='text-xs cursor-pointer' onClick={() => handleImport(item)}>
                      导入
                    </Typography.Text>
                    <Typography.Link className='text-xs cursor-pointer' onClick={() => handlePreview(item)}>
                      预览
                    </Typography.Link>
                    <Typography.Text
                      type='danger'
                      className='text-xs cursor-pointer'
                      onClick={() => handleDelete(item.id)}
                    >
                      删除
                    </Typography.Text>
                  </Space>
                </Space>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

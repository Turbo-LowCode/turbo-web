import { Card, Col, Row, Space, Typography, message } from 'antd'
import { FC } from 'react'
import { v4 as uuid } from 'uuid'
import { StoreItem, deleteHistoryRecord } from './db'

interface HistoryListProps {
  data: StoreItem[]
  reload: () => void
}

export const HistoryList: FC<HistoryListProps> = ({ data, reload }) => {
  // 处理预览逻辑
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
    <div className="p-3">
      <Row gutter={[12, 12]}>
        {data.map(item => {
          return (
            <Col span={24} key={item.id}>
              <Card size="small">
                <Space direction="vertical">
                  <Typography.Text>{item.createTime}</Typography.Text>
                  <Space>
                    <Typography.Link onClick={() => handlePreview(item)}>预览</Typography.Link>
                    <Typography.Text type="danger" onClick={() => handleDelete(item.id)}>
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

import { StatisticCard } from '@ant-design/pro-components'
import { Card } from 'antd'

const { Statistic } = StatisticCard

const items = [
  { key: '1', title: '全部', value: 10, total: true },
  { key: '2', status: 'default', title: '未发布', value: 5 },
  { key: '3', status: 'processing', title: '发布中', value: 3 },
  { key: '4', status: 'error', title: '发布异常', value: 1 },
  { key: '5', status: 'success', title: '发布成功', value: 1 },
]

export const AppDashBoardTable = () => {
  return items.map(item => (
    <Card size='small' key={item.key}>
      {item.title}
    </Card>
  ))
}

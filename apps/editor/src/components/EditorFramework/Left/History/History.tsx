import { Segmented } from 'antd'
import { useEffect, useState } from 'react'
import { HistoryList } from './HistoryList'
import { StoreItem, getHistoryList } from './db'

export const History = () => {
  const [localList, setLocalList] = useState<StoreItem[]>([])
  const [activeKey, setActiveKey] = useState<string | number>('local')

  const getLocalHistory = async () => {
    const data = await getHistoryList()
    setLocalList(data)
  }

  useEffect(() => {
    if (activeKey === 'local') {
      getLocalHistory()
    } else {
      // getRemoteHistory
    }
  }, [activeKey])

  return (
    <div>
      <Segmented options={['本地存储', '远程存储']} onChange={setActiveKey} block>
        {activeKey === '本地存储' && <HistoryList data={localList} reload={getLocalHistory} />}
        {activeKey === '远程存储' && <HistoryList data={localList} reload={getLocalHistory} />}
      </Segmented>
    </div>
  )
}

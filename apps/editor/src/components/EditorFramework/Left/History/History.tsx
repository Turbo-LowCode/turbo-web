import { StoreItem, getHistoryList } from '@turbo/core'
import { Segmented } from 'antd'
import { useEffect, useState } from 'react'
import { HistoryList } from './HistoryList'

export const History = () => {
  const [localList, setLocalList] = useState<StoreItem[]>([])
  const [activeKey, setActiveKey] = useState<string | number>('本地存储')

  const getLocalHistory = async () => {
    const list = await getHistoryList()
    // 最新的在前
    list.reverse()
    setLocalList(list)
  }

  useEffect(() => {
    if (activeKey === '本地存储') {
      getLocalHistory()
    } else {
      // getRemoteHistory
    }
  }, [activeKey])

  return (
    <div>
      <Segmented options={['本地存储', '远程存储']} onChange={setActiveKey} block />
      {activeKey === '本地存储' && <HistoryList list={localList} reload={getLocalHistory} />}
      {activeKey === '远程存储' && <HistoryList list={localList} reload={getLocalHistory} />}
    </div>
  )
}

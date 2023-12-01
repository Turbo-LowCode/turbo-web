import { useEditor } from '@craftjs/core'
import { Typography } from 'antd'
import { createElement } from 'react'

const SettingPanel = () => {
  const { selected } = useEditor(state => {
    // console.log('🚀 ~ file: SettingPanel.tsx:7 ~ SettingPanel ~ state:', state)
    const [currentNodeId] = state.events.selected
    let selected

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
      }
    }

    return {
      selected,
    }
  })

  return (
    <div className='mt-2 p-2 shadow'>
      <div className='flex flex-col'>
        <div className='pb-2'>
          <Typography.Title level={5}>SettingPanel</Typography.Title>
          <Typography.Text>id: {selected?.id}</Typography.Text>
          <Typography.Text>name: {selected?.name}</Typography.Text>
        </div>
        <div>{selected?.settings && createElement(selected?.settings)}</div>
      </div>
    </div>
  )
}

export default SettingPanel

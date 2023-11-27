import { useEditor } from '@craftjs/core'
import { Button, Switch, Typography } from 'antd'

const TopBar = () => {
  const {
    enabled,
    actions: { setOptions },
    query,
  } = useEditor(state => ({
    enabled: state.options.enabled,
  }))

  return (
    <div className="p-1 mt-3 mb-1 bg-[#cbe8e7]">
      <div className="flex justify-between items-center">
        <div>
          <Typography.Text>Enable</Typography.Text>
          <Switch checked={enabled} onChange={val => setOptions(options => (options.enabled = val))} />
        </div>
        <Button size="middle" type="dashed" color="primary" onClick={() => console.log(query.serialize())}>
          Serialize JSON
        </Button>
      </div>
    </div>
  )
}

export default TopBar

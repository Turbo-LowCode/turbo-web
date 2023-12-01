import { __antdMaterials__, __baseMaterials__ } from '@turbolc/materials'
import { Divider, Space, Typography } from 'antd'
import { MaterialList } from './MaterialList'

export const Material = () => {
  return (
    <div>
      <Space className='w-full' size={12} direction='vertical'>
        <Typography.Text type='secondary'>基础组件</Typography.Text>
        <MaterialList materials={__baseMaterials__} />
      </Space>
      <Divider />
      <Space className='w-full' size={12} direction='vertical'>
        <Typography.Text type='secondary'>AntD 组件</Typography.Text>
        <MaterialList materials={__antdMaterials__} />
      </Space>
    </div>
  )
}

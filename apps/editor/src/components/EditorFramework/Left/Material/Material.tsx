import { __antdMaterials__, __baseMaterials__, __formMaterials__ } from '@turbolc/materials'
import { Divider, Space, Typography } from 'antd'
import { MaterialList } from './MaterialList'

const list = [
  {
    title: '基础组件',
    materials: __baseMaterials__,
  },
  {
    title: 'AntD 组件',
    materials: __antdMaterials__,
  },
  {
    title: '表单 组件',
    materials: __formMaterials__,
  },
]

export const Material = () => {
  return (
    <div>
      {list.map(item => (
        <>
          <Space className='w-full' size={12} direction='vertical'>
            <Typography.Text type='secondary'>{item.title}</Typography.Text>
            <MaterialList materials={item.materials} />
          </Space>
          <Divider />
        </>
      ))}
    </div>
  )
}

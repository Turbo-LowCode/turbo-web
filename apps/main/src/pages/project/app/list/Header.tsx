import { Segmented, Space } from 'antd'
import { CreateAppModal } from './CreateAppModal'

export const Header = () => {
  return (
    <div className='flex justify-between'>
      <Segmented options={['全部', '与我有关']} />
      <Space>
        <CreateAppModal />
      </Space>
    </div>
  )
}

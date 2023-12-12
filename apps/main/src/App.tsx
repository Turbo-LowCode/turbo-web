import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export const App = () => {
  return (
    <Suspense
      fallback={
        <Spin className='absolute right-4 top-4' indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )
}

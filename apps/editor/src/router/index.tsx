import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Editor = lazy(() => import('@/pages/editor'))
const Preview = lazy(() => import('@/pages/preview'))

const router = createBrowserRouter([
  {
    path: '/',
    Component: Editor,
  },
  {
    path: '/preview/:pageId',
    Component: Preview,
  },
])

export default router

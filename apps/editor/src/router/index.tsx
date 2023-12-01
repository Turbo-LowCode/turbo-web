import { Editor } from '@/pages'
import { Preview } from '@/pages/preview'
import { createBrowserRouter } from 'react-router-dom'

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

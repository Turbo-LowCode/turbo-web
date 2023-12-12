import { OutletLayout } from '@/components/layouts'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@/pages/login'))
const Home = lazy(() => import('@/pages/home'))
const MicroAppEditor = lazy(() => import('@/pages/micro/editor'))
const ProjectApp = lazy(() => import('@/pages/project/app/list'))
const ProjectAppManage = lazy(() => import('@/pages/project/app/manage'))

export const router = createBrowserRouter([
  {
    Component: OutletLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/project',
        children: [
          {
            path: 'app',
            Component: ProjectApp,
          },
          {
            path: 'manage',
            Component: ProjectAppManage,
          },
        ],
      },
    ],
  },
  {
    path: '/app',
    children: [
      {
        path: 'editor/:appId',
        Component: MicroAppEditor,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
])

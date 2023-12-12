import { ProLayout } from '@ant-design/pro-components'
import { createStyles } from 'antd-style'
import { startTransition } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { customRenderHeaderContent } from './Header'
import { proLayoutDefaultProps } from './defaultConfig'

const useStyles = createStyles(({ css, token }) => ({
  layout: css`
    background: "#FFF";
    .ant-layout-sider-children {
      border-inline-end: "1px solid #e5e6eb !important";
    }
    .ant-pro-sider-collapsed-button {
      border-radius: 4;
      &:hover {
        border: 1px solid ${token.colorPrimaryHover};
        color: ${token.colorPrimaryHover};
      }
    }
  `,
}))

export const OutletLayout = () => {
  const { styles } = useStyles()
  const location = useLocation()
  const navigate = useNavigate()

  const handleMenuRouteChange = (path?: string) => {
    startTransition(() => {
      navigate(path || '/')
    })
  }

  return (
    <ProLayout
      className={styles.layout}
      title='Turbo'
      layout='mix'
      logo={null}
      token={{}}
      location={{
        pathname: location.pathname,
      }}
      headerContentRender={customRenderHeaderContent}
      // biome-ignore lint/a11y/useValidAnchor: <样式与按钮不匹配>
      menuItemRender={(item, dom) => <a onClick={() => handleMenuRouteChange(item.path)}>{dom}</a>}
      contentStyle={{ height: 'calc(100vh - 56px)' }}
      {...proLayoutDefaultProps}
    >
      <Outlet />
    </ProLayout>
  )
}

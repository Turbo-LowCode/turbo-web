import { UserComponent, UserComponentConfig, useNode } from '@craftjs/core'
import { cloneDeep } from 'lodash'
import { PropsWithChildren, forwardRef, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export type ReactMaterialComponent = UserComponent

export type ReactMaterialViewType<P = any, T = (dom: Element) => void> = React.ForwardRefRenderFunction<T, P>

/** HOC类型 */
export type FunctionComponent<T = any> = React.FC<
  {
    mountRef: (dom: HTMLElement) => void
    children?: React.ReactNode
  } & T
>

const FallbackRender = (props: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{props.error.message}</pre>
    </div>
  )
}

/**
 * 将UI组件包裹成可拖拽的Node节点
 * @param { React.FunctionComponent } WrappedComponent 设计组件
 */
const withConnectNode = (
  WrappedComponent: React.ForwardRefExoticComponent<React.RefAttributes<any> & PropsWithChildren>,
): ReactMaterialComponent => {
  return function ({ children, __events = [], ...props }: Record<string, any>) {
    const {
      connectors: { connect, drag },
      custom,
    } = useNode(state => ({
      custom: state.data.custom,
    }))
    const memoizedProps = useMemo(() => {
      const data = cloneDeep(props)
      return data
    }, [props])

    return (
      <ErrorBoundary fallbackRender={FallbackRender}>
        <WrappedComponent
          ref={dom => {
            if (custom.useResize) {
              return connect(dom)
            } else {
              return connect(drag(dom))
            }
          }}
          {...memoizedProps}
        >
          {children}
        </WrappedComponent>
      </ErrorBoundary>
    )
  }
}

/**
 * 创建React版本的物料组件
 * @param { ReactMaterialComponent } component  物料组件
 * @param { UserComponentConfig } config 物料配置
 */
export const createReactMaterial = <T=any>(
  component: any,
  config: Partial<UserComponentConfig<T>>,
  defaultProps?: Record<string, any>,
) => {
  // hoc的compose函数执行
  const forwardComponent = forwardRef<(dom: HTMLElement) => void, {}>(component)
  forwardComponent.defaultProps = defaultProps
  const MaterialNode: ReactMaterialComponent = withConnectNode(forwardComponent)
  MaterialNode.craft = config

  return MaterialNode
}

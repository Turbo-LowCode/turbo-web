import { UserComponent, UserComponentConfig, useNode } from '@craftjs/core'
import { useThrottleEffect } from 'ahooks'
import { cloneDeepWith } from 'lodash'
import { PropsWithChildren, forwardRef, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSelector } from 'react-redux'
import { browserRuntimeVM, isExpression, parseStrToLte } from '..'
import { onUpdated, store } from '../context/store'

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
    <div role='alert'>
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
  return ({ children, __events = [], ...props }: Record<string, any>) => {
    const materialStore: any = useSelector(state => state)
    const {
      id,
      custom,
      connectors: { connect, drag },
    } = useNode(state => ({
      custom: state.data.custom,
    }))

    const memoizedProps = useMemo(() => {
      const cloneProps = cloneDeepWith(props, val => {
        if (val && isExpression(val)) {
          console.log('执行代码:', val)
          return browserRuntimeVM?.execute(parseStrToLte(val), { props, store: materialStore?.[id] })?.data
        }
      })
      return cloneProps
    }, [props, materialStore, id])

    // 监听节点是否绑定数据，绑定则上传到StoreProvider中
    useThrottleEffect(() => {
      if (props.$$store && Array.isArray(props.$$store)) {
        store.dispatch(
          onUpdated({
            [id]: props.$$store.reduce((ans, item) => {
              ans[item.name] = item.defaultVal
              return ans
            }, {}),
          }),
        )
      }
    }, [props.$$store])

    return (
      <ErrorBoundary fallbackRender={FallbackRender}>
        <WrappedComponent
          ref={dom => {
            if (custom.useResize) return connect(dom)
            return connect(drag(dom))
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
export const createReactMaterial = <T = any>(
  component: any,
  config: Partial<UserComponentConfig<T>>,
  defaultProps?: Record<string, any>,
) => {
  // hoc的compose函数执行
  const forwardComponent = forwardRef<(dom: HTMLElement) => void, {}>(component)
  forwardComponent.defaultProps = defaultProps

  config.props = {
    ...defaultProps,
    ...config.props,
  }
  const MaterialNode: ReactMaterialComponent = withConnectNode(forwardComponent)
  MaterialNode.craft = config

  return MaterialNode
}

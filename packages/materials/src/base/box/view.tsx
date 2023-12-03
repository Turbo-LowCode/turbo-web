import { useEditor, useNode } from '@craftjs/core'
import { ReactMaterialViewType } from '@turbolc/core'
import { useThrottleFn } from 'ahooks'
import { Resizable, ResizableProps } from 're-resizable'
import { PropsWithChildren } from 'react'

export const defaultProps: ResizableProps & PropsWithChildren = {
  size: {
    width: 'auto',
    height: '120px',
  },
}

export const BoxView: ReactMaterialViewType<ResizableProps & PropsWithChildren> = (
  { children, ...props },
  ref: any,
) => {
  const { id } = useNode()
  const {
    actions: { setProp },
    isActive,
    isHovered,
  } = useEditor((_, query) => {
    return {
      isActive: query.getEvent('selected').contains(id),
      isHovered: query.getEvent('hovered').contains(id),
    }
  })

  const { run: handleResizableChange } = useThrottleFn((_, __, elRef) => {
    const { width, height } = elRef.style

    setProp(id, (prop: any) => {
      prop.size = {
        width,
        height,
      }
    })
  })

  return (
    <Resizable
      enable={
        isActive || isHovered
          ? {
              bottom: true,
              right: true,
            }
          : false
      }
      bounds='parent'
      {...props}
      onResizeStop={handleResizableChange}
      handleStyles={{
        bottom: {
          borderRadius: 200,
          background: 'rgb(26, 115, 232)',
          zIndex: 2,
          height: 4,
          width: 30,
          bottom: -2,
          left: '50%',
          transform: 'translateX(-50%)',
        },
        right: {
          borderRadius: 200,
          background: 'rgb(26, 115, 232)',
          zIndex: 2,
          height: 30,
          width: 4,
          right: -2,
          top: '50%',
          transform: 'translateY(-50%)',
        },
      }}
      ref={_instance => {
        if (_instance?.resizable) {
          ref(_instance?.resizable)
        }
      }}
    >
      {children}
    </Resizable>
  ) as any
}

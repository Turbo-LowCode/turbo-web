import { useEditor, useNode } from '@craftjs/core'
import { useThrottleFn } from 'ahooks'
import { Resizable } from 're-resizable'
import React, { PropsWithChildren } from 'react'

export const withResizableNode = (WrappedComponent: React.FC<PropsWithChildren>) => {
  return ({ children, ...props }: Record<string, any>) => {
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
      >
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </Resizable>
    ) as any
  }
}

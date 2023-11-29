import { SlackCircleFilled } from '@ant-design/icons'
import { Canvas, useEditor } from '@craftjs/core'
import { theme } from 'antd'
import { map } from 'lodash'
import { FC, createElement } from 'react'

export interface MaterialListProps {
  materials: Record<string, any>
}

export const MaterialList: FC<MaterialListProps> = ({ materials }) => {
  const { token } = theme.useToken()
  const { connectors } = useEditor()

  return (
    <div className="gird grid-cols-2 w-full" style={{ gap: token.paddingSM }}>
      {map(materials, (value, key) => {
        const displayName = value.craft?.displayName
        const { useCanvas = false } = value.craft?.custom ?? {}

        return (
          <div
            key={key}
            ref={(ref: HTMLDivElement) => {
              if (ref) {
                // 拖拽时创建物料元素
                connectors.create(ref, useCanvas ? <Canvas canvas is={value} /> : createElement(value))
              }
            }}
            className={`flex justify-center items-center cursor-pointer gap-2 text-sm py-2 rounded-lg border-[1px_solid_#e4e4e7] hover:text-[${token.colorPrimary}] border-[${token.colorPrimary}]`}
            style={{
              paddingInline: `${token.paddingSM}px`,
            }}
          >
            <SlackCircleFilled />
            {displayName}
          </div>
        )
      })}
    </div>
  )
}

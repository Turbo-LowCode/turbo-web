import { SlackCircleFilled } from '@ant-design/icons'
import { Canvas, useEditor } from '@craftjs/core'
import { theme } from 'antd'
import { createStyles } from 'antd-style'
import { map } from 'lodash'
import { FC, createElement } from 'react'

export interface MaterialListProps {
  materials: Record<string, any>
}

const useStyles = createStyles(({ token, css }) => ({
  materialList: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: token.paddingSM,
  },
  materialListItem: css`
    border: '1px solid #e4e4e7';
    padding-inline: ${token.paddingSM};
    padding-block: 8;
    border-radius: 8;
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    transition: 'border-color .85s';
    cursor: 'pointer';
    gap: 8;
    font-size: 14;
    color: ${token.colorTextSecondary};
    &:hover {
      color: ${token.colorPrimary};
      border-color: ${token.colorPrimary};
    }
  `,
}))

export const MaterialList: FC<MaterialListProps> = ({ materials }) => {
  const { token } = theme.useToken()
  const { connectors } = useEditor()
  const { styles } = useStyles()

  return (
    <div className={styles.materialList} style={{ gap: token.paddingSM }}>
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
            className={styles.materialListItem}
          >
            <SlackCircleFilled className="font-bold text-base mr-2" />
            {displayName}
          </div>
        )
      })}
    </div>
  )
}

import type { ButtonProps } from 'antd'
import { Button, Space, Tooltip } from 'antd'
import { createStyles } from 'antd-style'
import { FC, ReactNode } from 'react'

export interface SidebarItemProps extends ButtonProps {
  tooltip?: ReactNode
  active?: boolean
}

export interface SidebarProps {
  value: string
  menus: {
    value: SidebarProps['value']
    prototype: SidebarItemProps
  }[]
  onChange?: (key: SidebarProps['value']) => void
}

const useStyles = createStyles(({ token }) => ({
  Sidebar: {
    display: 'flex',
    justifyContent: 'center',
    paddingBlock: token.paddingSM,
  },
}))

const SidebarItem: FC<SidebarItemProps> = ({ active, tooltip, ...props }) => {
  return (
    <Tooltip placement="right" title={tooltip}>
      <Button {...props} ghost type={active ? 'primary' : 'text'} />
    </Tooltip>
  )
}

export const Sidebar: FC<SidebarProps> = ({ value, menus, onChange }) => {
  const { styles } = useStyles()

  return (
    <div className={styles.Sidebar}>
      <Space size="middle" direction="vertical">
        {menus.map(record => (
          <SidebarItem
            key={record.value}
            active={record.value === value}
            onClick={() => onChange?.(record.value)}
            {...record.prototype}
          />
        ))}
      </Space>
    </div>
  )
}

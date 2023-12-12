import { Button, Tooltip, TooltipProps } from 'antd'
import { FC } from 'react'

export interface TooltipButtonProps {
  icon: React.ReactNode
}

export const TooltipButton: FC<TooltipButtonProps & TooltipProps> = ({ icon, ...tooltipProps }) => {
  return (
    <Tooltip showArrow={false} color='blue' {...tooltipProps}>
      <Button icon={icon} />
    </Tooltip>
  )
}

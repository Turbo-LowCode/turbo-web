import { Element } from '@craftjs/core'
import { FC, PropsWithChildren } from 'react'

export const Fill: FC<PropsWithChildren> = ({ children = '插槽' }) => {
  return (
    <Element canvas id='fill' is='div'>
      {children}
    </Element>
  )
}

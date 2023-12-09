import { createLogger } from '@turbolc/core'

export const logger = createLogger('editor')

export const toOptions = (values: string[]) => {
  return values.map(value => ({
    value,
    label: value,
  }))
}

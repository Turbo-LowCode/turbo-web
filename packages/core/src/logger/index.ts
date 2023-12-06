const logColorMap = {
  log: '#1677FF',
  error: '#FF4D4F',
  warn: '#FAAD14',
} as const

const print = (method: keyof typeof logColorMap, title: string, args: any[]) => {
  const logPrefix = [
    `%c@turbolc/${title}`,
    `background:${logColorMap?.[method]};border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em`,
  ]

  return console[method](...logPrefix, ...args)
}

export const createLogger = (title = 'test') => {
  return {
    info: (...args: Parameters<(typeof console)['log']>) => print('log', title, args),
    error: (...args: Parameters<(typeof console)['error']>) => print('error', title, args),
    warn: (...args: Parameters<(typeof console)['warn']>) => print('warn', title, args),
  }
}

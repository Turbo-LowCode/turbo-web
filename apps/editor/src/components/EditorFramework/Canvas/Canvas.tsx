import { createStyles } from 'antd-style'
import { DocumentFrame } from './DocumentFrame'
import { RenderViewSandbox } from './RenderViewSandbox'

const useStyles = createStyles(({ token }) => ({
  Main: {
    width: '100%',
    height: '100%',
    background: '#f9fafb',
    borderLeft: `1px solid ${token.colorBorderSecondary}`,
    borderRight: `1px solid ${token.colorBorderSecondary}`,
  },
  Canvas: {
    width: '100%',
    height: '100%',
    padding: 30,
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  },
}))

export const Canvas = () => {
  const { styles } = useStyles()

  return (
    <div className={styles.Main}>
      <div className={styles.Canvas}>
        <RenderViewSandbox>
          <DocumentFrame />
        </RenderViewSandbox>
      </div>
    </div>
  )
}

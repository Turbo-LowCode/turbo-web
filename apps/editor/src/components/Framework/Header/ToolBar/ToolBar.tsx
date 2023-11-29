import { QuestionCircleOutlined } from '@ant-design/icons'
import { useEditor } from '@craftjs/core'
import { TurboRemixIcon } from '@turbo/icons'
import { Button, Popconfirm, Tooltip, message } from 'antd'
import { createStyles } from 'antd-style'
import { JSEditor } from './JSEditor'

const useStyles = createStyles(({ token }) => ({
  ToolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    background: token.colorBgBase,
  },
}))

export const ToolBar = () => {
  const { styles } = useStyles()
  const { actions, selectedNodeId, isRootNode } = useEditor(({ events }) => {
    const [currentNodeId] = events.selected
    return {
      selectedNodeId: currentNodeId,
      isRootNode: currentNodeId === 'ROOT',
    }
  })

  // 处理删除选中节点逻辑
  const handleDeleteSelectedNode = () => {
    try {
      actions.delete(selectedNodeId)
      message.success('删除成功')
    } catch (error) {
      message.error('删除失败')
    }
  }

  return (
    <div className={styles.ToolBar}>
      <Tooltip placement="bottom" color="blue" title="撤销">
        <Button icon={<TurboRemixIcon type="icon-arrow-go-back-fill" />} onClick={actions.history.undo} />
      </Tooltip>
      <Tooltip placement="bottom" color="blue" title="恢复">
        <Button icon={<TurboRemixIcon type="icon-arrow-go-forward-fill" />} onClick={actions.history.redo} />
      </Tooltip>
      <Tooltip placement="bottom" color="blue" title="强制刷新">
        <Popconfirm
          title="强制刷新"
          description={
            <div style={{ width: 250 }}>
              强制刷新将会导致您页面的修改丢失，且无法恢复，如果继续进行下一步，请点击确认按钮。
            </div>
          }
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          onConfirm={() => window.location.reload()}
          okButtonProps={{
            danger: true,
            type: 'dashed',
          }}
        >
          <Button icon={<TurboRemixIcon type="icon-refresh-line" />} />
        </Popconfirm>
      </Tooltip>
      <JSEditor
        trigger={
          <Tooltip placement="bottom" color="blue" title="代码">
            <Button icon={<TurboRemixIcon type="icon-braces-line" />} onClick={actions.history.redo} />
          </Tooltip>
        }
      />
      <Tooltip
        placement="bottom"
        color={isRootNode ? 'red' : 'blue'}
        title={isRootNode ? '当前选中为根节点，不允许删除' : '删除'}
      >
        <Button
          danger
          icon={<TurboRemixIcon type="icon-delete-bin-4-line" />}
          onClick={handleDeleteSelectedNode}
          disabled={isRootNode}
        />
      </Tooltip>
    </div>
  )
}

import { logger } from '@/utils'
import { useEditor } from '@craftjs/core'
import { Card, Form, Typography } from 'antd'
import { createStyles } from 'antd-style'
import { merge } from 'lodash'
import { useEffect } from 'react'

const useStyles = createStyles(({ css }) => ({
  Setting: css`
		height: 100%;
		padding-inline: 8px;
		& .ant-pro-form-group-title {
			font-weight: 600;
			margin-block-end: 0;
			cursor: "pointer";
		}
	`,
}))

export const Settings = () => {
  const { styles } = useStyles()
  const [form] = Form.useForm()
  const {
    nodeId,
    props,
    SettingRender,
    actions: { setProp },
  } = useEditor(state => {
    const [currentNodeId] = state.events.selected

    if (currentNodeId) {
      const { data, related } = state.nodes[currentNodeId]

      return {
        nodeId: currentNodeId,
        props: data.props,
        SettingRender: related.settingRender,
      }
    }
  })

  // 监听Setting区变化
  const handleFormChange = (values: any) => {
    if (nodeId) {
      setProp(nodeId, props => {
        return merge(props, values)
      })
    }
    return true
  }

  useEffect(() => {
    if (nodeId) {
      logger.info('currentNodeId', nodeId, props)

      // 切换组件清除setter配置，并设置新组件内容属性配置
      form.resetFields()
      form.setFieldsValue(props)
    }
  }, [nodeId])

  return (
    <div className={styles.Setting}>
      <Form
        layout='vertical'
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onValuesChange={handleFormChange}
        onFinish={handleFormChange}
      >
        {SettingRender ? (
          <SettingRender />
        ) : (
          <Card size='small'>
            <Typography.Text type='secondary'>暂无选中组件，点击画布中的组件可以进行选择。</Typography.Text>
          </Card>
        )}
      </Form>
    </div>
  )
}

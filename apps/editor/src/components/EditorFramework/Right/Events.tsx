import { toOptions } from '@/utils'
import { ProCard, ProForm, ProFormItem, ProFormList } from '@ant-design/pro-components'
import { useEditor } from '@craftjs/core'
import { getTurboScopeJsModule } from '@turbolc/core'
import { AutoComplete } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useEffect, useState } from 'react'

export const Events = () => {
  const {
    nodeId,
    events,
    actions: { setProp },
    eventOptions,
  } = useEditor(state => {
    const [currentNodeId] = state.events.selected

    if (currentNodeId) {
      const { data } = state.nodes[currentNodeId]

      return {
        nodeId: currentNodeId,
        events: data.props?.__events,
        eventOptions: data?.custom?.eventOptions || [],
      }
    }
  })
  const [form] = useForm()
  const [methodOptions, setMethodOptions] = useState<any[]>([])

  const handleMethodSearch = (searchVal: string) => {
    const jsModule = getTurboScopeJsModule() || {}
    const moduleKeys = Object.keys(jsModule)
    const optionKeys = moduleKeys.filter((key: string) => key.includes(searchVal))
    setMethodOptions(toOptions(optionKeys))
  }

  const handleBindEventChange = (_, values: Record<string, any>) => {
    setProp(nodeId, props => {
      props.__events = values.events
    })
  }

  // 选中不同物料时更新表单数据
  useEffect(() => {
    if (nodeId) {
      form.resetFields()
      form.setFieldsValue({
        events,
      })
    }
  }, [nodeId])

  return (
    <ProForm
      form={form}
      className='h-full'
      layout='horizontal'
      onValuesChange={handleBindEventChange}
      submitter={false}
    >
      <ProFormList
        name='events'
        tooltip='在这里可以为当前组件绑定相关的注册事件和自定义函数'
        creatorButtonProps={{
          creatorButtonText: '添加事件',
        }}
        copyIconProps={{
          tooltipText: '复制此项到末尾',
        }}
        deleteIconProps={{
          tooltipText: '删除此项',
        }}
        itemRender={({ listDom, action }, meta) => (
          <ProCard
            collapsible
            defaultCollapsed={true}
            bordered
            size='small'
            title={`事件${meta.index + 1}`}
            style={{ marginBlockEnd: 8 }}
            extra={action}
            bodyStyle={{ paddingBlockEnd: 0 }}
          >
            {listDom}
          </ProCard>
        )}
      >
        <ProFormItem name='method' label='方法名称'>
          <AutoComplete onSearch={handleMethodSearch} options={methodOptions} />
        </ProFormItem>
        <ProFormItem name='event' label='绑定事件'>
          <AutoComplete options={eventOptions} />
        </ProFormItem>
      </ProFormList>
    </ProForm>
  )
}

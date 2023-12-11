import { CheckOutlined, ClearOutlined, SearchOutlined } from '@ant-design/icons'
import { SerializedNodes } from '@craftjs/core'
import { useDebounceEffect } from 'ahooks'
import { Button, Flex, Input, Space, Tree } from 'antd'
import { DataNode } from 'antd/es/tree'
import { useState } from 'react'
import { useSchemaStore } from '../stores/schema'

const convertToTree = (data: SerializedNodes): DataNode[] => {
  const rootNode = data['ROOT']
  const tree: DataNode[] = []

  const traverse = (nodeId: string): DataNode => {
    const node = data[nodeId]
    const { nodes, displayName } = node

    return {
      title: displayName,
      key: nodeId,
      children: nodes.length > 0 ? nodes.map(traverse) : undefined,
    }
  }

  if (rootNode) {
    tree.push(traverse('ROOT'))
  }

  return tree
}

export const OutlineTree = () => {
  const { serializeNodes } = useSchemaStore()
  const [treeData, setTreeData] = useState<DataNode[]>([])

  useDebounceEffect(() => {
    if (serializeNodes) {
      const tree = convertToTree(serializeNodes)
      setTreeData(tree)
    }
  }, [serializeNodes])

  return (
    <Flex className='py-3 px-1' vertical gap={12}>
      <Flex className='px-3' justify='space-around' gap={12}>
        <Input placeholder='请输入组件名称' suffix={<SearchOutlined />} />
        <Space>
          <Button ghost size='small' type='primary' icon={<ClearOutlined />} />
        </Space>
      </Flex>
      <Tree showLine={{ showLeafIcon: <CheckOutlined /> }} defaultExpandAll treeData={treeData} blockNode />
    </Flex>
  )
}

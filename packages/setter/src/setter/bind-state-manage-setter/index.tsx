import { ProFormItem, ProFormItemProps } from '@ant-design/pro-components'
import { BindStateModal } from './BindStateModal'

export const BindStateManageSetter: React.FC<ProFormItemProps<any>> = props => {
  return (
    <ProFormItem {...props}>
      <BindStateModal {...props.fieldProps} />
    </ProFormItem>
  )
}

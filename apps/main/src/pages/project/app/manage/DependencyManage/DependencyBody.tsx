import { ProFormText } from '@ant-design/pro-components'

export const DependencyBody = () => {
  return (
    <div>
      <ProFormText readonly label='模版名称' name={['dependencies', 'js', 'tpl']} />
    </div>
  )
}

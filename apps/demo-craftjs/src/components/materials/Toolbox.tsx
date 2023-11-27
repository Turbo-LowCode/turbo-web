import { Button as AntdButton, Typography } from 'antd'

const Toolbox = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col justify-center items-center gap-1">
        <Typography className="pb-2">Drag to add</Typography>
        <AntdButton type="primary">Button</AntdButton>
        <AntdButton type="primary">Text</AntdButton>
        <AntdButton type="primary">Container</AntdButton>
        <AntdButton type="primary">Card</AntdButton>
      </div>
    </div>
  )
}

export default Toolbox

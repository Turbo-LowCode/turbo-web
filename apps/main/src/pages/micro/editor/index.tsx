import WujieReact from 'wujie-react'

const MicroAppEditor = () => {
  return (
    <div className='w-screen h-screen'>
      <WujieReact width='100%' height='100%' name='editor' url='http://localhost:8080/' sync={true} fetch={fetch} />
    </div>
  )
}

export default MicroAppEditor

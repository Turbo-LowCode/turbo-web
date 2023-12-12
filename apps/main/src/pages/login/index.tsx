import { Content } from './Content'
import { Header } from './Header'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-[520px_1fr]'>
      <Header />
      <Content />
    </div>
  )
}

export default LoginPage

export const Header = () => {
  return (
    <header
      className='flex justify-center items-center relative text-white ps-10 pe-10'
      style={{ background: 'linear-gradient(164deg, #654aec 0%, rgb(77, 74, 236) 100%)' }}
    >
      <h1
        className='text-3xl absolute top-10 left-10'
        style={{
          fontFamily:
            'Outfit,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        }}
      >
        Turbo
      </h1>
      <h1 className='text-3xl text-center'>现在开始，从零开始打造通用型低代码产品</h1>
    </header>
  )
}

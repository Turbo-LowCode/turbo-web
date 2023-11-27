interface Props {
  text: string
  fontSize: number
}

const Text = ({ text, fontSize }: Props) => {
  return (
    <div>
      <p style={{ fontSize }}>{text}</p>
    </div>
  )
}

export default Text

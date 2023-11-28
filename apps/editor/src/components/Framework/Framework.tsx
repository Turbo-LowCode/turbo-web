import { Canvas } from './Canvas/Canvas'
import { EditorRootWrapper } from './EditorRootWrapper'
import { Header } from './Header/Header'
import { Left } from './Left/Left'
import { Right } from './Right/Right'

export const Framework = () => {
  return (
    <EditorRootWrapper>
      <div className="grid overflow-hidden h-full grid-rows-[auto_1fr]">
        <Header />
        <div id="editorContent" className="gird h-full grid-cols-[auto_1fr_300px]">
          <Left />
          <Canvas />
          <Right />
        </div>
      </div>
    </EditorRootWrapper>
  )
}

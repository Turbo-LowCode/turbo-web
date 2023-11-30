import { EditorProps, EditorRefProps } from '@/types'
import { Editor } from '@craftjs/core'
import { createContext, forwardRef } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { EditorRef } from './EditorRef'
import { store } from './store'

export const FrameworkContext = createContext<EditorProps | null>({
  enabled: true,
})

export const FrameworkContextProvider = forwardRef<EditorRefProps, EditorProps>(({ children, ...props }, ref) => {
  return (
    <StoreProvider store={store}>
      <FrameworkContext.Provider value={{ enabled: props.enabled }}>
        <Editor {...props}>
          <EditorRef />
          {children}
        </Editor>
      </FrameworkContext.Provider>
    </StoreProvider>
  )
})

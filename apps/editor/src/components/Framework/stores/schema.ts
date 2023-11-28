import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface State {
  jsModuleCode: string
}

export interface Action {
  setJsModuleCode: (code: State['jsModuleCode']) => void
}

export const useSchemaStore = create<State & Action>()(
  immer(set => ({
    jsModuleCode: '',

    setJsModuleCode: code =>
      set({
        jsModuleCode: code,
      }),
  })),
)

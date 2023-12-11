import { SerializedNodes } from '@craftjs/core'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface State {
  schema: string
  jsModuleCode: string
  serializeNodes?: SerializedNodes
}

export interface Action {
  setJsModuleCode: (jsModuleCode: State['jsModuleCode']) => void
  setSchema: (schema: State['schema']) => void
  setSerializeNodes: (serializeNodes: State['serializeNodes']) => void
  // onChange: (key: keyof State, value: State[keyof State]) => void
}

export const useSchemaStore = create<State & Action>()(
  immer(set => ({
    schema: '',
    jsModuleCode: '',
    serializeNodes: {},

    setJsModuleCode: jsModuleCode => set({ jsModuleCode }),
    setSchema: schema => set({ schema }),
    setSerializeNodes: serializeNodes => set({ serializeNodes }),
  })),
)

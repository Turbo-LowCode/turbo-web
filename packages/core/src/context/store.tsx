import { configureStore, createSlice } from '@reduxjs/toolkit'
import { merge } from 'lodash'

const materialSlice = createSlice({
  name: '@@turbolc-store',
  initialState: {
    test: 1,
  } as Record<string, any>,
  reducers: {
    onUpdated: (state, { payload = {} }) => {
      const mergeState = merge(state, payload)
      return mergeState
    },
  },
})

export const { onUpdated } = materialSlice.actions

export const store = configureStore({
  reducer: materialSlice.reducer,
})

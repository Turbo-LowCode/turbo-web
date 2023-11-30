import { configureStore, createSlice } from '@reduxjs/toolkit'
import { merge } from 'lodash'

const counterSlice = createSlice({
  name: '@turbo-store-counter',
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

// export const { onUpdated } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer,
})

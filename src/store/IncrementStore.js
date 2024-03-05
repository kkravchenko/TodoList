import { createSlice } from '@reduxjs/toolkit'

export const IncrementStore = createSlice({
  name: 'increment',
  initialState: {
    increment: 1
  },
  reducers: {
    set: (state, increment) => {
      // eslint-disable-next-line no-param-reassign
      state.increment = increment.payload
    }
  }
})

export const { set } = IncrementStore.actions
export default IncrementStore.reducer

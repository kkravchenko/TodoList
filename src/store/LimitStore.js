import { createSlice } from '@reduxjs/toolkit'

export const LimitStore = createSlice({
  name: 'limit',
  initialState: {
    limit: 100
  },
  reducers: {
    set: (state, limit) => {
      // eslint-disable-next-line no-param-reassign
      state.limit = limit.payload
    }
  }
})

export const { set } = LimitStore.actions
export default LimitStore.reducer

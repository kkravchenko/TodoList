import { createSlice } from '@reduxjs/toolkit'

export const FilterStore = createSlice({
  name: 'filter',
  initialState: {
    filter: -1
  },
  reducers: {
    set: (state, filter) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = filter.payload
    }
  }
})

export const { set } = FilterStore.actions
export default FilterStore.reducer

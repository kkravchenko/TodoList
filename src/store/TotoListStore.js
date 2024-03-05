import { createSlice } from '@reduxjs/toolkit'

export const TodoListStore = createSlice({
  name: 'todo',
  initialState: {
    todo: []
  },
  reducers: {
    add: (state, todo) => {
      state.todo.push({ payload: todo.payload })
    },
    set: (state, todo) => {
      // eslint-disable-next-line no-param-reassign
      state.todo = state.todo.map(
        // eslint-disable-next-line no-confusing-arrow
        t =>
          // eslint-disable-next-line implicit-arrow-linebreak,multiline-ternary
          t.payload.id === todo.payload.id // eslint-disable-next-line multiline-ternary
            ? { payload: { ...t.payload, complete: todo.payload.complete } }
            : t
      )
    },
    del: (state, todo) => {
      // eslint-disable-next-line no-param-reassign
      state.todo = state.todo.filter(f => f.payload.id !== todo.payload)
    }
  }
})

export const { add, set, del } = TodoListStore.actions
export default TodoListStore.reducer

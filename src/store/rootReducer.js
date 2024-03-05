import { combineReducers } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import TodoListReducer from './TotoListStore'
import LimitReducer from './LimitStore'
import FilterReducer from './FilterStore'
import IncrementStore from './IncrementStore'

// export default configureStore({
//   reducer: {
//     todo: TodoListReducer,
//     limit: LimitReducer,
//     filter: FilterReducer
//   }
// })

const rootReducer = combineReducers({
  todo: TodoListReducer,
  limit: LimitReducer,
  filter: FilterReducer,
  increment: IncrementStore
})

export default rootReducer

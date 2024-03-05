import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../../store/TotoListStore'
import { Totals, TodoDeleteAsk } from '..'

export const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [ask, setAsk] = useState()

  const todoList = useSelector(state => state.todo.todo)
  const filterValue = Number(useSelector(state => state.filter.filter))

  const dispatch = useDispatch()

  useEffect(() => {
    todoList.length > 0 &&
      setTodos(
        // eslint-disable-next-line multiline-ternary
        filterValue === -1 // eslint-disable-next-line multiline-ternary
          ? todoList
          : todoList.filter(todo => todo.payload.complete === filterValue)
      )
  }, [todoList, filterValue])

  const handleOnClickNameButton = (id, complete) => {
    dispatch(set({ id, complete }))
  }

  const handleOnClickDeleteButton = id => {
    setAsk(id)
  }

  return (
    <div className="todolist">
      {ask !== undefined && (
        <TodoDeleteAsk handleAskClose={() => setAsk(undefined)} id={ask} />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            <>
              {todos.map(todo => (
                <tr key={todo.payload.id}>
                  <td>{todo.payload.id.toString()}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        // eslint-disable-next-line implicit-arrow-linebreak
                        handleOnClickNameButton(
                          todo.payload.id,
                          todo.payload.complete ? 0 : 1
                        )
                      }
                    >
                      {todo.payload.name}
                    </button>
                  </td>
                  <td>{todo.payload.complete ? 'Yes' : 'No'}</td>
                  <td>
                    <button
                      type="button"
                      title="Delete todo"
                      onClick={() => handleOnClickDeleteButton(todo.payload.id)}
                    >
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="4">No records found in the Todo list</td>
            </tr>
          )}
        </tbody>
      </table>
      <Totals todos={todos} />
    </div>
  )
}

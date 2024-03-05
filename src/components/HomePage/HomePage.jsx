import { useState } from 'react'
import { Button, Limit, AddtoForm, TodoList, Filter } from '..'

export const HomePage = () => {
  const [addTodo, setAddTodo] = useState(false)

  const handleAddButtonOnLick = () => {
    setAddTodo(true)
  }

  const handleCloseAddTodoFrom = () => {
    setAddTodo(false)
  }

  return (
    <>
      {addTodo && <AddtoForm handleCloseAddTodoFrom={handleCloseAddTodoFrom} />}
      <div className="homepage">
        <div className="homepage__button">
          <Button text="Add Todo" handleButtonOnLick={handleAddButtonOnLick} />
          <Filter />
          <Limit />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </>
  )
}

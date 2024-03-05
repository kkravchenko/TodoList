export const Totals = ({ todos }) => (
  <div className="totals">
    <div className="totals__item">
      <div>Completed todos:</div>
      <div>
        {todos.filter(todo => todo.payload.complete === 1).length.toString()}
      </div>
    </div>
    <div className="totals__item">
      <div>Not Completed todos:</div>
      <div>
        {todos.filter(todo => todo.payload.complete === 0).length.toString()}
      </div>
    </div>
  </div>
)

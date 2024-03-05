import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../store/TotoListStore'
import { set } from '../../store/IncrementStore'
import { Counter } from '..'

export const AddtoForm = ({ handleCloseAddTodoFrom }) => {
  const dispatch = useDispatch()
  const limit = useSelector(state => state.limit.limit)

  const increment = useSelector(state => state.increment.increment)
  console.log(increment)
  const AddTodoSchema = Yup.object().shape({
    todo: Yup.string()
      .min(3, 'Min length of value must be 3')
      .max(limit, `Max length of value must be ${limit}`)
      .required('Value is required')
  })

  // eslint-disable-next-line id-blacklist
  const handleSubmit = (values, actions) => {
    // eslint-disable-next-line id-blacklist
    dispatch(add({ id: increment, name: values.todo, complete: 0 }))
    dispatch(set(increment + 1))

    actions.resetForm({
      // eslint-disable-next-line id-blacklist
      values: {
        todo: ''
      }
    })

    handleCloseAddTodoFrom()
  }

  return (
    <div className="addtodo">
      <div className="addtodo__form">
        <h1>Add todo</h1>
        <Formik
          initialValues={{
            todo: ''
          }}
          validationSchema={AddTodoSchema}
          onSubmit={handleSubmit}
        >
          {/* eslint-disable-next-line id-blacklist */}
          {({ values, errors, handleChange }) => (
            <Form method="POST">
              <label>
                Todo:
                <textarea
                  type="text"
                  name="todo"
                  // eslint-disable-next-line id-blacklist
                  value={values.todo}
                  onChange={handleChange}
                />
                <span className="addtodo__info">
                  <span className="addtodo__error">{errors.todo}&#160;</span>
                  {/* eslint-disable-next-line id-blacklist */}
                  <Counter limit={limit} len={values.todo.length} />
                </span>
              </label>
              <div className="addtodo__button">
                <button type="button" onClick={() => handleCloseAddTodoFrom()}>
                  Cancel
                </button>
                <button type="submit" className="addtodo__submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

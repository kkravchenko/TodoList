import { useDispatch } from 'react-redux'
import { set } from '../../store/FilterStore'

export const Filter = () => {
  const dispatch = useDispatch()

  const handleSelectOnChange = filterValue => {
    dispatch(set(filterValue))
  }

  return (
    <div className="filter">
      <label>
        Filter:
        <select onChange={event => handleSelectOnChange(event.target.value)}>
          <option value="-1">All</option>
          <option value="1">Completed</option>
          <option value="0">Not completed</option>
        </select>
      </label>
    </div>
  )
}

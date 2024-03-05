import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../store/LimitStore'

export const Limit = () => {
  const limit = useSelector(state => state.limit.limit)
  const dispatch = useDispatch()

  const handleLimitOnChange = limitValue => {
    if (limitValue) {
      dispatch(set(limitValue))
    }
  }

  return (
    <div className="homepage__limit">
      <div>Todo description length:</div>
      <input
        type="number"
        value={limit}
        onChange={event => handleLimitOnChange(event.target.value)}
      />
    </div>
  )
}

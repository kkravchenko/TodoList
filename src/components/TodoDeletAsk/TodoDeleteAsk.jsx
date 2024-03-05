import { useDispatch } from 'react-redux'
import { del } from '../../store/TotoListStore'

export const TodoDeleteAsk = ({ handleAskClose, id }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(del(id))
    handleAskClose()
  }

  return (
    <div className="ask">
      <div className="ask__form">
        <h1>Delete todo?</h1>
        <div className="ask__buttons">
          <button type="button" onClick={() => handleAskClose()}>
            Cancel
          </button>
          <button type="button" className="ask__ok" onClick={handleDelete}>
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

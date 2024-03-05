export const Button = ({ text, handleButtonOnLick }) => (
  <button type="button" onClick={handleButtonOnLick}>
    {text}
  </button>
)

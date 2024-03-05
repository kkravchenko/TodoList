import { useEffect, useState } from 'react'

export const Counter = ({ limit, len }) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(limit < len)
  }, [limit, len])

  return (
    <span className={`counter ${error ? 'overlimit' : ''}`}>
      {len.toString()} / {!!limit && limit.toString()}
    </span>
  )
}

import { useRef } from 'react'

export default function UseRef2() {

  const inputRef = useRef(null)

  function handleFocus(e) {
    e.preventDefault()
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </div>
  )
}

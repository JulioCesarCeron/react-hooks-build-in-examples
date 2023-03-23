import { useRef } from "react"

function UseRefFocus() {
  console.count("useRefFocus")
  const inputRef = useRef(null)

  return (
    <div>
      <button onClick={() => inputRef.current.focus()}>focus on input</button>
      <hr />
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default UseRefFocus

import { useRef } from "react"

function UseRefFocus() {
  console.count("renderizou useRef Focus")
  const inputRef = useRef(null)

  return (
    <div>
      <p>2 - useRef Focus</p>
      <hr />
      <button onClick={() => inputRef.current.focus()}>focus on input</button>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <hr />
    </div>
  )
}

export default UseRefFocus

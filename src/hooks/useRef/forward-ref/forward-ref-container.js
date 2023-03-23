import { useRef } from "react"
import ForwardRefMiddle from "./forward-ref-middle"

function FowardContainer({ value, onChange }) {
  const ref = useRef(null)

  return (
    <div className="forward-parent">
      <span>parent component</span>
      <button onClick={() => ref.current.focus()}>add focus</button>
      <ForwardRefMiddle ref={ref} />
    </div>
  )
}

export default FowardContainer

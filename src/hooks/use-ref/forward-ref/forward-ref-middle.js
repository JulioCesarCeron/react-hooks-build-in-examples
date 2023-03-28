import { forwardRef } from "react"
import ForwardRefComponent from "./forward-ref-component"

const ForwardRefMiddle = forwardRef((_, ref) => {
  console.count("renderizou middle component")
  return (
    <div className="forward-middle">
      <span>middle component</span>
      <ForwardRefComponent ref={ref} />
    </div>
  )
})

export default ForwardRefMiddle

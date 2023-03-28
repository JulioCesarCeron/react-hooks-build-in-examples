import { forwardRef } from "react"
import ForwardRefComponent from "./forward-ref-component"

const ForwardRefMiddle = forwardRef((_, ref) => {
  return (
    <div className="forward-middle">
      <span>middle component</span>
      <ForwardRefComponent ref={ref} />
    </div>
  )
})

export default ForwardRefMiddle

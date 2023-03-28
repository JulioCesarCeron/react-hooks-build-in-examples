import { forwardRef } from "react"

const ForwardRefComponent = forwardRef(({ value, onChange }, ref) => {
  return (
    <div className="forward-child">
      <span>child component</span>
      <input
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder="type here"
      />
    </div>
  )
})

export default ForwardRefComponent

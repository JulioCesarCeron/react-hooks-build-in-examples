import { useCallback } from "react"
import { post } from "./Post.js"
import ShippingForm from "./shipping-form.js"

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

import { useCallback } from "react"
import { post } from "./Post.js"
import ShippingForm from "./shipping-form.js"

export default function ProductPage({ productId, referrerId, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrerId,
        orderDetails,
      })
    },
    [productId, referrerId]
  )

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

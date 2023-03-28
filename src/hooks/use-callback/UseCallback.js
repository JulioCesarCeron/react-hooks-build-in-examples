import { useState } from "react"
import ProductPage from "./ProductPage"

const UseCallback = () => {
  console.count("renderizou useCallback")
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <h2>useCallback</h2>
      <hr />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>

      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
      <hr />
    </>
  )
}

export default UseCallback

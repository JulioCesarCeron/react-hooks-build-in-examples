/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getRandomId } from "../../util/randomString"

function UseEffect() {
  const [id, setId] = useState("")

  useEffect(() => {
    console.count("ID foi alterado")
  }, [id])

  return (
    <div className="App">
      <h1>useEffect</h1>
      <hr />
      <article>
        <button onClick={() => setId(getRandomId(5))}>set state</button>
        <br />
        <br />
        <pre>state: {id}</pre>
      </article>

      <hr />

      <article>
        <span>state change counter</span>
        {/* <pre>{modifyCounter}</pre> */}
      </article>

      <hr />
    </div>
  )
}

export default UseEffect

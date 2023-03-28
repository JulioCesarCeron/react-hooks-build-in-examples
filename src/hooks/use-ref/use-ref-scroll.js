import { useRef } from "react"

function UseRefScroll() {
  const listRef = useRef(null)
  console.count("renderizou UseRef Scroll")

  function scrollToIndex(index) {
    console.count("Run Scroll with ref")
    const listNode = listRef.current
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index]
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  return (
    <>
      <p>1 - useRef Scroll</p>
      <hr />
      <nav className="list-buttons">
        <button onClick={() => scrollToIndex(0)}>Zeca</button>
        <button onClick={() => scrollToIndex(1)}>Dodô</button>
        <button onClick={() => scrollToIndex(2)}>Vicente</button>
      </nav>
      <div>
        <ul ref={listRef} className="img-list">
          <li>
            <img src="https://placedog.net/200/200?r" alt="Zeca" />
          </li>
          <li>
            <img src="https://placedog.net/300/200?r" alt="Dodô" />
          </li>
          <li>
            <img src="https://placedog.net/250/200?r" alt="Vicente" />
          </li>
        </ul>
      </div>
      <hr />
    </>
  )
}

export default UseRefScroll

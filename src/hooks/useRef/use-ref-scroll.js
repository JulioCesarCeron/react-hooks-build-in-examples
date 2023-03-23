import { useRef } from "react"

function UseRefScroll() {
  const listRef = useRef(null)

  function scrollToIndex(index) {
    console.count("renderizou UseRefScroll")
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
      <nav>
        <button onClick={() => scrollToIndex(0)}>Zeca</button>
        <button onClick={() => scrollToIndex(1)}>Dodô</button>
        <button onClick={() => scrollToIndex(2)}>vicente</button>
      </nav>
      <div>
        <ul ref={listRef} className="img-list">
          <li>
            <img src="https://placedog.net/200/200?r" alt="Tom" />
          </li>
          <li>
            <img src="https://placedog.net/300/200?r" alt="Maru" />
          </li>
          <li>
            <img src="https://placedog.net/250/200?r" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  )
}

export default UseRefScroll

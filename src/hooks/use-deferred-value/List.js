const List = ({ text }) => (
  <ul>
    {Array(5000)
      .fill(null)
      .map((value, index) => (
        <li key={index}>{text}</li>
      ))}
  </ul>
)

export default List

import { useStatus } from "./use-online-status"

function StatusBar() {
  const isOnline = useStatus()
  return (
    <div>
      <hr />
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      <hr />
    </div>
  )
}

export default StatusBar

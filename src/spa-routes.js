import UseDeferred from "./hooks/use-deferred-value/use-deferred-value"
import UseMemoComponent from "./hooks/use-memo/UseMemoComponent"
import UseRef from "./hooks/use-ref/use-ref"
import UseRefFocus from "./hooks/use-ref/use-ref-focus"
import UseRefScroll from "./hooks/use-ref/use-ref-scroll"
import FowardContainer from "./hooks/use-ref/forward-ref/forward-ref-container"
import UseCallback from "./hooks/use-callback/UseCallback"
import UseRefApp from "./hooks/use-ref/use-ref-app"

const routes = {
  "use-ref-app": <UseRefApp />,
  "use-ref": <UseRef />,
  "use-ref-scroll": <UseRefScroll />,
  "use-ref-focus": <UseRefFocus />,
  "use-ref-forward": <FowardContainer />,
  "use-deferred-value": <UseDeferred />,
  "use-memo": <UseMemoComponent />,
  "use-callback": <UseCallback />,
}

export default routes

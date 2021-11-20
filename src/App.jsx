import { useEffect } from "react"
import { Provider } from "jotai"
import { Hero, Menu, Meet, Atec, Qarte, Fireforce, Spaceodyssey } from "./Parts"

function App() {
  useEffect(() => {
    console.log(
      `"L'introspection est un vice qui se pratique seul, ou bien jamais". Wes Anderson - The French Dispatch`
    )
  })
  return (
    <div className="App">
      <Provider>
        <Hero />
        <div
          style={{
            scrollSnapType: "y mandatory",
            height: "100vh",
            overflow: "scroll",
            position: "sticky",
            zIndex: 10,
            bottom: 0,
          }}
        >
          <Menu />
          <Meet />
          <Atec />
          <Qarte />
          <Fireforce />
          <Spaceodyssey />
        </div>
      </Provider>
    </div>
  )
}

export default App

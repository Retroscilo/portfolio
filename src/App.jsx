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
        <Menu />
        <Meet />
        <Atec />
        <Qarte />
        <Fireforce />
        <Spaceodyssey />
      </Provider>
    </div>
  )
}

export default App

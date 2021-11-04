import { Hero, Menu, Meet } from "./Parts"

function App() {
  console.log(
    `"L'introspection est un vice qui se pratique seul, ou bien jamais". Wes Anderson - The French Dispatch`
  )
  return (
    <div className="App">
      <Hero />
      <Menu />
      <Meet />
    </div>
  )
}

export default App

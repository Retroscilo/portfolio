import { useReducer } from "react"
import "./Menu.css"
import { MenuSelection } from "./MenuSelection"
import Details from "../Details"
import Block from "../../Components/Block"
import { Contact } from "../Contact"

function reducer(state, action) {
  switch (action.type) {
    case "discover":
      return { ...state, [action.key]: true }
    case "hide":
      return { ...state, [action.key]: false }
    case "hideAll":
      return Object.entries(state).reduce(
        (prev, current) => ({
          ...prev,
          [current[0]]: false,
        }),
        {}
      )
    default:
      throw new Error("menu reducer: action type is invalid")
  }
}

// OPTIONAL
const initialState = Object.keys(Details).reduce(
  (state, key) => ({ ...state, [key]: false }),
  { selection: true, contact: false }
)

const Menu = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Block
      background="var(--selection-color)"
      style={{
        position: "sticky",
        zIndex: 10,
        bottom: 0,
        height: "130vh",
        paddingTop: "30vh",
      }}
    >
      <MenuSelection display={state.selection} setDisplayState={dispatch} />
      <Details.Commerce display={state.Commerce} setDisplayState={dispatch} />
      <Details.Vitrine display={state.Vitrine} setDisplayState={dispatch} />
      <Details.Application
        display={state.Application}
        setDisplayState={dispatch}
      />
      <Contact display={state.contact} setDisplayState={dispatch} />
    </Block>
  )
}

export { Menu }

import { useReducer, useRef } from "react"
import "./Menu.css"
import { MenuSelection } from "./MenuSelection"
import Details from "../Details"
import Block from "../../Components/Block"
import { Contact } from "../Contact"
import { ReactComponent as Arrow } from "../../assets/images/arrow-black.svg"

/* eslint-disable */
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

  function scroll() {
    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: "smooth",
    })
  }

  const scrollAndDispatch = callback => {
    scroll()
    dispatch(callback)
  }

  return (
    <Block
      background="var(--selection-color)"
      style={{
        scrollSnapAlign: "start"
      }}
    >
      <MenuSelection display={state.selection} setDisplayState={scrollAndDispatch} />
      <Details.Commerce display={state.Commerce} setDisplayState={scrollAndDispatch} />
      <Details.Vitrine display={state.Vitrine} setDisplayState={scrollAndDispatch} />
      <Details.Application
        display={state.Application}
        setDisplayState={scrollAndDispatch}
      />
      <Contact display={state.contact} setDisplayState={scrollAndDispatch} />
      <div
        onClick={() => {
            document.querySelector("#scrollSnap").scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
        }}
        className={`meet__scrolldown ${
          state.selection ? "--is-opaque" : "--is-faded"
        }`}
      >
        Meet <Arrow />
      </div>
    </Block>
  )
}

export { Menu }

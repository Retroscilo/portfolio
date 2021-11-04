import { useEffect, useRef, useState } from "react"
import "./Details.css"
import { DetailsContextProvider } from "./UseDetailsContext"
import { Name, Content } from "./components"
import { ReactComponent as ArrowBlack } from "../../assets/images/arrow-black.svg"
import { useTheme } from "../../utils/useTheme"

const Details = ({ children, display, setDisplayState, background }) => {
  const detailsContainer = useRef(null)
  const isFirstMount = useRef(true)
  const { setBackgroundColor } = useTheme()
  const backToSelection = () => {
    setDisplayState({ type: "hide", key: "Commerce" })
    setDisplayState({ type: "hide", key: "Vitrine" })
    setDisplayState({ type: "hide", key: "Application" })
    setTimeout(() => {
      setDisplayState({ type: "discover", key: "selection" })
    })
  }

  useEffect(() => {
    if (display) setBackgroundColor(background)
  })

  useEffect(() => {
    if (!isFirstMount) detailsContainer.current.classList.add("details--hidden")
    else isFirstMount.current = false
    if (display) detailsContainer.current.classList.remove("details--hidden")
    else
      setTimeout(
        () => detailsContainer.current.classList.add("details--hidden"),
        1800
      )
  }, [background, display, setBackgroundColor])

  return (
    <DetailsContextProvider value={{ display }}>
      <div ref={detailsContainer} className="details">
        {children}
        <Return visible={display} action={backToSelection} />
      </div>
    </DetailsContextProvider>
  )
}

const ContentContainer = ({ children, left }) => (
  <div
    className="details__textContainer"
    style={{ gridColumnStart: left ? 1 : 2 }}
  >
    {children}
  </div>
)

const Return = ({ visible, action }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      role="button"
      aria-label="retour a la selection"
      tabIndex="0"
      className={`details__return ${visible ? "--is-opaque" : "--is-faded"}`}
      onKeyPress={action}
      onClick={action}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
    >
      Retour
      <div className={`details__arrow ${isHovered && "--is-visible"}`}>
        <ArrowBlack />
      </div>
    </div>
  )
}

Details.Name = Name
Details.ContentContainer = ContentContainer
Details.Content = Content

export { Details }

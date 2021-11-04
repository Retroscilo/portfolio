/** @jsxImportSource theme-ui */
import { useRef, useEffect } from "react"
import { MenuItem } from "../MenuItem"
import "../Menu.css"
import vitrine from "../../../assets/images/vitrine.jpg"
import commerce from "../../../assets/images/commerce.jpeg"
import app from "../../../assets/images/app.jpeg"

const MenuSelection = ({ display, setDisplayState }) => {
  const menuSelectionRef = useRef(null)
  const Commerce = useRef(null)
  const Application = useRef(null)
  const Vitrine = useRef(null)

  function selectDetails(key) {
    setDisplayState({ type: "hide", key: "selection" })
    setTimeout(() => setDisplayState({ type: "discover", key }, 1800))
  }

  useEffect(() => {
    if (display)
      [Vitrine, Commerce, Application].forEach((ref, i) => {
        const node = ref.current
        node.style.visibility = "hidden"
        setTimeout(() => {
          node.style.visibility = "visible"
          node.classList.add("--is-in")
        }, i * 100 + 200)
      })
  }, [display])

  return (
    <div ref={menuSelectionRef} className="menu">
      <h1
        className={`menu__title ${display ? "--is-opaque" : "--is-faded"}`}
        sx={{ mb: 4 }}
      >
        Voici le menu du jour :
      </h1>
      <span
        className={`MenuItem ${!display && "--is-out"}`}
        sx={{ mb: 4 }}
        ref={Vitrine}
        onClick={() => selectDetails("Vitrine")}
        onKeyPress={() => selectDetails("Vitrine")}
        tabIndex="0"
        role="button"
        aria-label="ouvre les détails d'une prestation"
      >
        <MenuItem
          background="var(--vitrine-color)"
          shapeOptions={{ imgSrc: vitrine, skew: { x: 5, y: 5 } }}
        >
          SITE VITRINE
        </MenuItem>
      </span>
      <span
        ref={Commerce}
        className={`MenuItem ${!display && "--is-out"}`}
        onClick={() => selectDetails("Commerce")}
        onKeyPress={() => selectDetails("Commerce")}
        sx={{ mb: 4 }}
        tabIndex="0"
        role="button"
        aria-label="ouvre les détails d'une prestation"
      >
        <MenuItem
          background="var(--commerce-color)"
          shapeOptions={{ imgSrc: commerce, skew: { x: -10, y: 15 } }}
          left
        >
          E-COMMERCE
        </MenuItem>
      </span>
      <span
        ref={Application}
        className={`MenuItem ${!display && "--is-out"}`}
        onClick={() => selectDetails("Application")}
        onKeyPress={() => selectDetails("Application")}
        tabIndex="0"
        role="button"
        aria-label="ouvre les détails d'une prestation"
      >
        <MenuItem
          background="var(--application-color)"
          shapeOptions={{ imgSrc: app, skew: { x: -10, y: 15 } }}
        >
          APPLICATION
        </MenuItem>
      </span>
    </div>
  )
}

export { MenuSelection }

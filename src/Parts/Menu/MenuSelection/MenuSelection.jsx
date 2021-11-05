/** @jsxImportSource theme-ui */
import { useRef, useEffect, forwardRef } from "react"
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
    setDisplayState({ type: "discover", key })
  }

  useEffect(() => {
    if (display) {
      document.body.style.backgroundColor = "var(--selection-color)"
      const array = [Vitrine, Commerce, Application]
      array.forEach((ref, i) => {
        const node = ref.current
        node.style.visibility = "hidden"
        setTimeout(() => {
          node.style.visibility = "visible"
          node.classList.add("--is-in")
        }, i * 100 + 200)
      })
    }
  }, [display])

  const MenuItemContainer = forwardRef(({ children, detail }, ref) => (
    <span
      ref={ref}
      style={{ marginBottom: "30px" }}
      className={`MenuItem ${!display && "--is-out"}`}
      onClick={() => selectDetails(detail)}
      onKeyPress={() => selectDetails(detail)}
      tabIndex="0"
      role="button"
      aria-label="ouvre les détails d'une prestation (application)"
    >
      {children}
    </span>
  ))

  return (
    <div ref={menuSelectionRef} className="menu">
      <h1
        className={`menu__title ${display ? "--is-opaque" : "--is-faded"}`}
        sx={{ mb: [5, 4] }}
      >
        Voici le menu du jour :
      </h1>
      <MenuItemContainer ref={Vitrine} detail="Vitrine">
        <MenuItem
          background="var(--vitrine-color)"
          shapeOptions={{ imgSrc: vitrine, skew: { x: 5, y: 5 } }}
        >
          SITE VITRINE
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer ref={Commerce} detail="Commerce">
        <MenuItem
          background="var(--commerce-color)"
          shapeOptions={{ imgSrc: commerce, skew: { x: -10, y: 15 } }}
          left
        >
          E-COMMERCE
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer ref={Application} detail="Application">
        <MenuItem
          background="var(--application-color)"
          shapeOptions={{ imgSrc: app, skew: { x: 10, y: -15 } }}
        >
          APPLICATION
        </MenuItem>
      </MenuItemContainer>
    </div>
  )
}

export { MenuSelection }

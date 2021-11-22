/** @jsxImportSource theme-ui */
import "./MenuItem.css"
import { useState, useRef } from "react"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { ReactComponent as ArrowBlack } from "../../../assets/images/arrow-black.svg"
/* eslint-disable */

const MenuItem = ({ children, left, shapeOptions, background, onScreen }) => {
  const [isHover, setIsHover] = useState(false)
  const [side] = useState(left ? "--left" : "--right")

  const toggleHover = () => {
    setIsHover(!isHover)
    document.body.style.backgroundColor = !isHover ? background : "var(--selection-color)"
  }

  return (
    <div className="menu-item">
      <div
        onMouseEnter={toggleHover}
        onMouseOut={toggleHover}
        onBlur={toggleHover}
        sx={{ fontWeight: "bold" }}
      >
        {!left && children}
        <div
          className={`menu-item__arrow menu-item__arrow${side} 
            ${isHover && "--is-visible"}
          `}
        >
          <ArrowBlack />
        </div>
        {left && children}
      </div>
      <div
        className={`menu-item__shape 
          menu-item__shape${side}
        `}
      >
        <ShiftingShape isVisible={window.innerWidth < 700 ? onScreen : isHover} shapeOptions={shapeOptions} />
      </div>
    </div>
  )
}

export { MenuItem }

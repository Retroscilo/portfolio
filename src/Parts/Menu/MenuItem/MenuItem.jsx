/** @jsxImportSource theme-ui */
import "./MenuItem.css"
import { useEffect, useState } from "react"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { ReactComponent as ArrowBlack } from "../../../assets/images/arrow-black.svg"
import { useTheme } from "../../../utils/useTheme"
/* eslint-disable */

const MenuItem = ({ children, left, shapeOptions, background }) => {
  const [isHover, setIsHover] = useState(false)
  const [side] = useState(left ? "--left" : "--right")
  const { setBackgroundColor } = useTheme()
  const toggleHover = () => {
    setIsHover(!isHover)
    setBackgroundColor(!isHover ? background : "var(--selection-color)")
  }
  useEffect(() => {
    if (window.innerWidth < 600) setIsHover(true)
  })
  
  return (
    <div className="menu-item">
      <div
        onMouseEnter={toggleHover}
        onMouseOut={toggleHover}
        onBlur={toggleHover}
        sx={{ fontSize: [6], fontWeight: "bold" }}
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
        <ShiftingShape isVisible={isHover} shapeOptions={shapeOptions} />
      </div>
    </div>
  )
}

export { MenuItem }

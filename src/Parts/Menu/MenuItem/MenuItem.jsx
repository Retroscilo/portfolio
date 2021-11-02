/** @jsxImportSource theme-ui */
import "./MenuItem.css"
import { useState } from "react"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg"
import { useTheme } from "../../../utils/useTheme"
/* eslint-disable */

const MenuItem = ({ children, left, shapeOptions, background }) => {
  const [isHover, setIsHover] = useState(false)
  const [side] = useState(left ? "--left" : "--right")
  const { setBackgroundColor } = useTheme()
  const toggleHover = () => {
    setIsHover(!isHover)
    // setBackgroundColor(!isHover ? background : "#90C098")
  }
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
          <ArrowDown />
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

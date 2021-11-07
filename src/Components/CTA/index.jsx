import { useState } from "react"
import "./CTA.css"
import { ReactComponent as Arrow } from "../../assets/images/arrow-black.svg"

const CTA = ({ children, position, action, visible, size }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`CTA ${visible ? "--is-opaque" : "--is-faded"} ${size}`}
      role="button"
      aria-label="retour a la selection"
      tabIndex="0"
      onKeyPress={action}
      onClick={action}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
    >
      {position !== "left" && children}
      {position && (
        <div
          className={`CTA__arrow CTA__arrow--${position} ${
            isHovered && "--is-visible"
          }`}
        >
          <Arrow />
        </div>
      )}
      {position === "left" && children}
    </div>
  )
}

export { CTA }

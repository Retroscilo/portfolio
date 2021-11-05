import { useDetailsContext } from "../UseDetailsContext"
import { ShiftingShape } from "../../shiftingShape"

const Name = ({ children, shapeOptions }) => {
  const { display } = useDetailsContext()
  return (
    <div className={`details__name ${display ? "--is-in" : "--is-out"}`}>
      {children}
      <span className="details__name-shape">
        <ShiftingShape isVisible={display} shapeOptions={shapeOptions} />
      </span>
    </div>
  )
}

export { Name }

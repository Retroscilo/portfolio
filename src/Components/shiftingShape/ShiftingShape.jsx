import "./ShiftingShape.css"
import { useEffect, useReducer } from "react"

const reducer = (state, { first, second, third, fourth }) => ({
  ...state,
  first,
  second,
  third,
  fourth,
})

const initialState = {
  first: { x: 0, y: 0 },
  second: { x: 0, y: 0 },
  third: { x: 0, y: 0 },
  fourth: { x: 0, y: 0 },
  start: Date.now(),
}

const animateShape = (start, dispatch) => {
  const interval = Date.now() - start
  const rotation = 3 * Math.sin(0.0008 * interval)
  const moveX = 4 * Math.sin(0.0008 * interval)
  const moveY = 3 * Math.cos(0.001 * interval)

  dispatch({
    first: { x: moveX + rotation, y: moveY - rotation },
    second: { x: -moveX + rotation, y: moveY - rotation },
    third: { x: -moveX - rotation, y: -moveY + rotation },
    fourth: { x: moveX - rotation, y: -moveY + rotation },
  })

  requestAnimationFrame(() => animateShape(start, dispatch))
}

const ShiftingShape = ({ isVisible, shapeOptions }) => {
  const { imgSrc, skew } = shapeOptions
  const { x: skewX, y: skewY } = skew
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const shapeAnimation = requestAnimationFrame(() =>
      animateShape(state.start, dispatch)
    )
    return () => cancelAnimationFrame(shapeAnimation)
  }, [isVisible, state.start])
  return (
    <img
      className={`shiftingShape ${isVisible && "--is-visible"}`}
      src={imgSrc}
      alt="illustration img"
      style={
        isVisible
          ? {
              clipPath: `polygon(
            ${20 + skewX + state.first.x}% ${20 + skewY + state.first.y}%,
            ${80 + skewX + state.second.x}% ${20 - skewY + state.second.y}%,
            ${80 - skewX + state.third.x}% ${80 - skewY + state.third.y}%,
            ${20 - skewX + state.fourth.x}% ${80 + skewY + state.fourth.y}%
          )`,
            }
          : {}
      }
    />
  )
}

export { ShiftingShape }

import React, { useCallback } from "react"

export const useAnimationFrame = (callback) => {
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()

  const animate = useCallback((time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestAnimationFrame(animate)
  })

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [animate]) // Make sure the effect runs only once
}

/* const Counter = () => {
  const [count, setCount] = React.useState(0)

  useAnimationFrame((deltaTime) => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100)
  })

  return <div>{Math.round(count)}</div>
} */

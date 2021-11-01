import { useState } from "react"
import { useTheme } from "./useTheme"
/* eslint-disable react-hooks/rules-of-hooks */

function createBackgroundObserver(newColor) {
  const { setBackgroundColor } = useTheme()
  const [prevRatio, setPrevRatio] = useState(undefined)
  function callback(entries) {
    const intersecting = entries[0].isIntersecting
    const ratio = entries[0].intersectionRatio
    if (ratio === prevRatio) return
    setPrevRatio(ratio)
    if (ratio >= 0.5 && intersecting) setBackgroundColor(newColor)
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5],
  }

  return new IntersectionObserver(callback, options)
}

export { createBackgroundObserver }

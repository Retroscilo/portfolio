import { useState, useEffect, useMemo } from "react"
/* eslint-disable react-hooks/rules-of-hooks */

function createBackgroundObserver(newColor) {
  const [prevRatio, setPrevRatio] = useState(undefined)
  function callback(entries) {
    const intersecting = entries[0].isIntersecting
    const ratio = entries[0].intersectionRatio
    if (ratio === prevRatio) return
    setPrevRatio(ratio)
    if (ratio >= 0.5 && intersecting) {
      document.body.style.backgroundColor = newColor
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5],
  }

  return new IntersectionObserver(callback, options)
}

function isOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: [0.55, 0.6] }
      ),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [observer, ref])

  return isIntersecting
}

function useObserver(cb, options, ref) {
  const observer = useMemo(
    () => new IntersectionObserver(cb, options),
    [cb, options]
  )
  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [observer, ref])
}

export { createBackgroundObserver, useObserver, isOnScreen }

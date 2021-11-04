import { useEffect, useRef, useState, useMemo } from "react"
import { HeroLanding } from "./HeroLanding"
import { HeroIntro } from "./HeroIntro"
/* eslint-disable */
const Hero = () => {
  const intro = useRef(null)
  const landing = useRef(null)
  const [windowHeight, setWindowHeight] = useState(undefined)
  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const onResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const [landingOpacity, setLandingOpacity] = useState(1)
  const [introOpacity, setIntroOpacity] = useState(0)

  const options = useMemo(() => ({
    root: null,
    rootMargin: "0px",
    threshold: [...Array(100).keys()].map((x) => x / 100),
  }), [])

  const callback = useMemo(() => (entries) => {
    const rect = entries[0].intersectionRect
    const isVisible = rect.height !== 0
    const ratio = rect.top / (window.innerHeight || 900)
    setLandingOpacity(isVisible && ratio < 0.75 ? ratio / 0.75 : 1)
    setIntroOpacity(isVisible && ratio < 0.75 ? 1 - ratio / 0.75 : 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    observer.observe(intro.current)
    return () => observer.disconnect()
  }, [windowHeight, introOpacity, landingOpacity])
  return (
    <div
      style={{
        width: "100vw",
        height: "200vh",
        position: "relative",
        background: "black",
        zIndex: 20,
        color: "white"
      }}
    >
      <HeroLanding ref={landing} opacity={landingOpacity} />
      <HeroIntro ref={intro} opacity={introOpacity} />
    </div>
  )
}

export { Hero }

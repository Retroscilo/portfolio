import { useEffect, useRef, useState, useMemo } from "react"
import { HeroLanding } from "./HeroLanding"
import { HeroIntro } from "./HeroIntro"
import { useObserver } from "../../utils/useObserver"
/* eslint-disable */
const Hero = () => {
  const intro = useRef(null)
  const landing = useRef(null)
  const hero = useRef(null)

  const [landingOpacity, setLandingOpacity] = useState(1)
  const [introOpacity, setIntroOpacity] = useState(0)

  const opacityObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [...Array(100).keys()].map((x) => x / 100),
  }

  const scrollSnapObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.45]
  }

  const opacityObserverCallback = (entries) => {
    const rect = entries[0].intersectionRect
    const isVisible = rect.height !== 0
    const ratio = rect.top / (window.innerHeight || 900)
    setLandingOpacity(isVisible && ratio < 0.75 ? ratio / 0.75 : 1)
    setIntroOpacity(isVisible && ratio < 0.75 ? 1 - ratio / 0.75 : 0)
  }

  const scrollSnapObserverCallback = ([ entry ]) => {
     if (!entry.isIntersecting && entry.intersectionRatio > 0.3) {
       console.log(entry)
       hero.current.style.transform = "translateY(-200vh)"
      }
  }

  useObserver(opacityObserverCallback, opacityObserverOptions, intro)
  useObserver(scrollSnapObserverCallback, scrollSnapObserverOptions, hero)

  return (
    <div
      ref={hero}
      style={{
        width: "100vw",
        height: "200vh",
        position: "relative",
        background: "black",
        zIndex: 20,
        color: "white",
        transition: "transform .7s cubic-bezier(.62,.01,.68,.35)"
      }}
    >
      <HeroLanding ref={landing} opacity={landingOpacity} />
      <HeroIntro ref={intro} opacity={introOpacity} />
    </div>
  )
}

export { Hero }

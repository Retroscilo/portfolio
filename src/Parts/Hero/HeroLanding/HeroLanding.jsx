/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState, forwardRef } from "react"
import "./HeroLanding.css"
import { TextRoll } from "../../../Components/TextRoll/TextRoll"
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg"

const HeroLanding = forwardRef(({ opacity }, ref) => {
  const scrollDown = useRef(null)
  const [words] = useState([
    "créatif",
    "passionné",
    "efficace",
    "investit",
    "inventif",
  ])

  useEffect(() => {
    setTimeout(() => {
      scrollDown.current.classList.add("scrollDown--visible")
    }, words.length * 600 + 1850) // text animation + caret blinking + cover duration - 350ms
  }, [words.length])

  return (
    <div
      ref={ref}
      sx={{ width: "100vw", height: "100vh", position: "relative", opacity }}
    >
      <Headline words={words} />
      <div ref={scrollDown} className="scrollDown">
        Intéressé ?<ArrowDown className="arrowDown" />
      </div>
    </div>
  )
})

const Headline = ({ words }) => {
  const landingTextCover = useRef(null)
  const newHTML = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      landingTextCover.current.classList.add("hero__landing-cover--active")
    }, words.length * 600) // repercute changes to landingText timeout
    setTimeout(() => {
      newHTML.current.innerHTML = "tout ça à la fois. &nbsp;"
    }, words.length * 600 + 1550) // text animation + caret blinking + cover/2 duration
    setTimeout(() => {
      landingTextCover.current.classList.add("hero__landing-cover--inactive")
    }, words.length * 600 + 2150) // text animation + caret blinking + cover duration - 350ms
  })
  return (
    <div sx={{ display: "flex", alignItems: "center", height: "100%" }}>
      <div className="hero__landing" sx={{ padding: 5 }}>
        <span sx={{ fontWeight: "bold" }}>RENCONTREZ&nbsp;</span>
        <div sx={{ position: "relative" }}>
          <div
            ref={newHTML}
            sx={{
              position: "relative",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            un développeur&nbsp;
            <TextRoll words={words} />
          </div>
          <div ref={landingTextCover} className="hero__landing-cover" />
        </div>
      </div>
    </div>
  )
}

export { HeroLanding }

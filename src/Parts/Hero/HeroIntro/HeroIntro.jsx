/** @jsxImportSource theme-ui */
import "./HeroIntro.css"
import { forwardRef } from "react"
import introImg from "../../../assets/images/intro.jpg"

const HeroIntro = forwardRef(({ opacity }, ref) => (
  <div style={{ opacity }} className="hero__intro">
    <img
      className="hero__intro-background"
      src={introImg}
      alt="intro background"
    />
    <div ref={ref} className="hero__intro-punchline">
      J&apos;aime le web. Je vous le rendrais bien, <br /> c&apos;est promis.
    </div>
  </div>
))

export { HeroIntro }

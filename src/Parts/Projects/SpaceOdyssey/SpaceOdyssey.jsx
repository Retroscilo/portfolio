import "../projects.css"
import { useState, useRef, useEffect } from "react"
import Block from "../../../Components/Block"
import SpaceImg from "./Space.png"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { CTA } from "../../../Components/CTA"
import C from "../../../assets/badges/C++.png"

const shapeOptions = { imgSrc: SpaceImg, skew: { x: 5, y: 5 } }
const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2],
}

const Spaceodyssey = () => {
  const [visible, setValue] = useState(false) // integer state

  const thirdBlock = useRef(null)

  useEffect(() => {
    const Observer = new IntersectionObserver((entries) => {
      const intersecting = entries[0].isIntersecting
      if (intersecting) setValue(true)
      else setValue("always")
    }, options)
    Observer.observe(thirdBlock.current)
    return () => Observer.disconnect()
  }, [])
  return (
    <Block background="#1E1E1E">
      <div
        ref={thirdBlock}
        className="project__container"
        style={{ color: "white" }}
      >
        <div className="project__shape">
          <ShiftingShape isVisible={visible} shapeOptions={shapeOptions} />
        </div>
        <div className="project__badge-container">
          <img src={C} alt="" />
        </div>
        <div className="project__text">
          <div className="project__title">SPACE ODYSSEY</div>
          <CTA visible position="link">
            <a
              className="project__link"
              href="http://spaceodyssey.s3-website.eu-central-1.amazonaws.com"
              target="_blank"
              rel="noreferrer"
            >
              JOUER
            </a>
          </CTA>
          <p>
            Jeux video créé à l’occasion d’un cours sur le moteur de jeu Unity.
            Nous avons appris les concepts de base d’un endless runner et du
            C++, puis nous avons dû créer le notre en 3 jours. <br /> <br />
            J&apos;ai créé les contrôles du vaisseau, l’apparition des
            asteroïdes, les animations de controle et de collision, la musique,
            les ressources graphiques, l’optimisation de la mémoire (disparition
            des débris et des astéroïdes une fois hors de vue). <br /> <br />
            Nous avons obtenu les félicitations du jury.
          </p>
        </div>
      </div>
    </Block>
  )
}

export { Spaceodyssey }

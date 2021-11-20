import "../projects.css"
import { useState, useRef, useEffect } from "react"
import Block from "../../../Components/Block"
import SpaceImg from "./Space.png"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { CTA } from "../../../Components/CTA"
import C from "../../../assets/badges/C++.png"
import { useObserver } from "../../../utils/useObserver"

const shapeOptions = { imgSrc: SpaceImg, skew: { x: 5, y: 5 } }
const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2],
}

const Spaceodyssey = () => {
  const thirdBlock = useRef(null)
  const onScreen = useObserver(thirdBlock)
  return (
    <Block background="#1E1E1E">
      <div
        ref={thirdBlock}
        className="project__container"
        style={{ color: "white" }}
      >
        <div className="project__shape">
          <ShiftingShape isVisible={onScreen} shapeOptions={shapeOptions} />
        </div>
        <div className="project__badge-container">
          <img src={C} alt="" />
        </div>
        <div className="project__text">
          <div className="project__title">SPACE ODYSSEY</div>
          <CTA visible position="link">
            <a
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

import "../projects.css"
import { useState, useRef, useEffect } from "react"
import Block from "../../../Components/Block"
import AtecImg from "./Atec.jpeg"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { CTA } from "../../../Components/CTA"
import Next from "../../../assets/badges/next.png"
import ReactBadge from "../../../assets/badges/react.png"
import { useObserver } from "../../../utils/useObserver"

const shapeOptions = { imgSrc: AtecImg, skew: { x: 5, y: 5 } }
const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2],
}

const Atec = () => {
  const thirdBlock = useRef(null)
  const onScreen = useObserver(thirdBlock)

  return (
    <Block background="white">
      <div ref={thirdBlock} className="project__container">
        <div className="project__shape">
          <ShiftingShape isVisible={onScreen} shapeOptions={shapeOptions} />
        </div>
        <div className="project__badge-container">
          <img src={Next} alt="" />
          <img src={ReactBadge} alt="" />
        </div>
        <div className="project__text">
          <div className="project__title">A.T.E.C.</div>
          <CTA visible position="link">
            <a href="https://atec.agency" target="_blank" rel="noreferrer">
              Voir le site
            </a>
          </CTA>
          <p>
            Projet réalisé pour une agence d’architecture. <br /> J’ai designé
            le site avec Figma à partir d’un contenu textuel déjà fourni. <br />{" "}
            Le client avait besoin, en plus de son site, d’un espace de partage
            de fichier protégé par mot de passe. J’ai donc utilisé Strapi
            (headless CMS) pour créer un backoffice d’où mon client pouvait
            gérer son contenu, ses images et ses fichiers.
          </p>
        </div>
      </div>
    </Block>
  )
}

export { Atec }

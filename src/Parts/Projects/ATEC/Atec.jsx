import "../projects.css"
import Block from "../../../Components/Block"
import AtecImg from "./Atec.jpeg"
import { ShiftingShape } from "../../../Components/shiftingShape"
import { CTA } from "../../../Components/CTA"
import Next from "../../../assets/badges/next.png"
import ReactBadge from "../../../assets/badges/react.png"

const shapeOptions = { imgSrc: AtecImg, skew: { x: 5, y: 5 } }

const Atec = () => {
  console.log("atec")
  return (
    <Block background="white">
      <div className="project__container">
        <div className="project__shape">
          <ShiftingShape isVisible shapeOptions={shapeOptions} />
        </div>
        <div className="project__badge-container">
          <img src={Next} alt="" />
          <img src={ReactBadge} alt="" />
        </div>
        <div className="project__text">
          <div className="project__title">A.T.E.C.</div>
          <CTA visible position="link">
            <a
              className="project__link"
              href="https://atec.agency"
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </CTA>
          <p>
            Projet réalisé pour une agence d’architecture, j’ai designé avec
            Figma le site à partir d’un contenu textuel déjà fourni. <br /> Le
            client avait besoin, en plus de son site, d’un espace de partage de
            fichier protégé par mot de passe. <br /> J’ai donc utilisé Strapi
            (headless CMS) pour créer un backoffice d’où mon client pouvait
            gérer son contenu, ses images et ses fichiers.
          </p>
        </div>
      </div>
    </Block>
  )
}

export { Atec }

import "../projects.css"
import Block from "../../../Components/Block"
import QarteImg from "./Qarte.png"
import { ShiftingShape } from "../../../Components/shiftingShape"
import Next from "../../../assets/badges/next.png"
import ReactBadge from "../../../assets/badges/react.png"
import Mongo from "../../../assets/badges/mongo.png"

const shapeOptions = { imgSrc: QarteImg, skew: { x: -5, y: 5 } }

const Qarte = () => {
  console.log("atec")
  return (
    <Block background="#EDB6B6">
      <div className="project__container">
        <div className="project__shape">
          <ShiftingShape isVisible shapeOptions={shapeOptions} />
        </div>
        <div className="project__text">
          <div className="project__title">Qarte</div>
          <div className="project__badge-container">
            <img src={Next} alt="" />
            <img src={ReactBadge} alt="" />
            <img src={Mongo} alt="" />
          </div>
          <p style={{ marginTop: "0" }}>
            Premiers pas sous nextJS, toujours en développement. <br /> <br />{" "}
            Avec Qarte, je souhaite que les restaurateurs puissent avoir accès
            gratuitement à des menus QR esthétique et personnalisable. <br />{" "}
            <br />
            L’application est finie à 65%:
            <ul>
              <li>
                Le backend est fonctionnel (création de catégorie, de produits,
                etc...)
              </li>
              <li>
                l’authentication est en place: création de profil, récupération
                du mot de passe... (cookies - next-iron-session)
              </li>
              <li>
                génération de QR code à partir d’un id de menu est
                opérationnelle.
              </li>
              <li>un thème est déjà créé.</li>
            </ul>
            <br />
            Il reste à produire la landing page, le HUB utilisateur (accès aux
            différents menu) et bien évidemment la tonne de tests.
          </p>
        </div>
      </div>
    </Block>
  )
}

export { Qarte }

import "../projects.css"
import Block from "../../../Components/Block"
import FireforceImg from "./fireforce.jpg"
import { ShiftingShape } from "../../../Components/shiftingShape"
import ReactBadge from "../../../assets/badges/react.png"
import Python from "../../../assets/badges/python.png"

const shapeOptions = { imgSrc: FireforceImg, skew: { x: 5, y: 5 } }

const Fireforce = () => {
  console.log("atec")
  return (
    <Block background="#EDEAA2">
      <div className="project__container">
        <div className="project__shape">
          <ShiftingShape isVisible shapeOptions={shapeOptions} />
        </div>
        <div className="project__badge-container">
          <img src={Python} alt="" />
          <img src={ReactBadge} alt="" />
        </div>
        <div className="project__text">
          <div className="project__title">Fireforce</div>
          <p style={{ marginTop: "0" }}>
            Projet scolaire portant sur les possibilitées d’un batiment
            intelligent doté de divers “sensors”, nous devions imaginer un
            produit faisant usage des possibilitées offertes par une telle
            infrastructure. <br /> <br />
            Nous sommes parti sur le concept d’une application de détecteur
            incendie et d’extincteurs connectés. Nous utilisions les données
            transmises par les capteurs incendie pour aider les personnes à
            utiliser le bon type d’extincteur en fonction de l’origine du feu.{" "}
            <br /> <br />
            Les donnéees relatives aux extincteurs servaient à vérifier si les
            extincteurs étaient bien en place et avaient été inspectés. <br />{" "}
            <br />
            Je me suis occupé de la construction de la base de donnée sur
            mongoDB atlas et de construire l’API servant les données au front.
          </p>
        </div>
      </div>
    </Block>
  )
}

export { Fireforce }

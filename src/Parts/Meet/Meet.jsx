import { useEffect, useRef } from "react"
import Block from "../../Components/Block"
import { ShiftingShape } from "../../Components/shiftingShape"
import "./Meet.css"
import meet from "../../assets/images/meet.jpg"

const shapeOptions = {
  imgSrc: meet,
  skew: { x: 17, y: -10 },
}

const Meet = () => {
  const thirdBlock = useRef(null)

  useEffect(() => {
    console.log(thirdBlock)
  }, [])

  return (
    <Block background="#EDD3B6">
      <div className="meet" ref={thirdBlock}>
        <div className="meet__shape">
          <ShiftingShape isVisible="always" shapeOptions={shapeOptions} />
        </div>
        <p className="meet__text">
          Passionné d’informatique et de jeux vidéo depuis que l’on m’a interdit
          d’avoir une console, j’ai préparé un bachelor de développement web en
          alternance, obtenu avec succès en 2021. <br /> <br /> Depuis, je me
          suis lancé dans le freelancing et j’aide les entreprises à
          entreprendre ou poursuivre leur développement digital. <br />{" "}
          Passionné de nouvelles technologies et axé sur le développement
          créatif, j’aime les projets ambitieux qui me demandent de me dépasser.
        </p>
      </div>
    </Block>
  )
}

export { Meet }

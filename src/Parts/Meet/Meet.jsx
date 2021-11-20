import { useEffect, useRef, useState } from "react"
import Block from "../../Components/Block"
import { ShiftingShape } from "../../Components/shiftingShape"
import "./Meet.css"
import meet from "../../assets/images/black.jpg"
import { ReactComponent as Arrow } from "../../assets/images/arrow-black.svg"
import { isOnScreen } from "../../utils/useObserver"
/* eslint-disable */

const shapeOptions = {
  imgSrc: meet,
  skew: { x: 17, y: -10 },
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2],
}

const Meet = () => {
  const thirdBlock = useRef(null)
  const onScreen = isOnScreen(thirdBlock)

  return (
    <Block background="#EDD3B6" style={{ scrollSnapAlign: "start" }}>
      <div className="meet" ref={thirdBlock}>
        <div className="meet__shape">
          <p>Meet</p>
          <ShiftingShape isVisible={onScreen} shapeOptions={shapeOptions} />
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
        <div
          onClick={() => {
            document.querySelector("#scrollSnap").scrollTo({
              top: 2 * window.innerHeight,
              behavior: "smooth",
            })
          }}
          className={`meet__scrolldown --is-opaque`}
          style={{ bottom: "150px" }}
        >
          Réalisations <Arrow />
        </div>
      </div>
    </Block>
  )
}

export { Meet }

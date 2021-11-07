import { ShiftingShape } from "../../Components/shiftingShape"
import black from "../../assets/images/black.jpg"
import "./Contact.css"
import { CTA } from "../../Components/CTA"

const shapeOptions = { imgSrc: black, skew: { x: 5, y: 5 } }

const Contact = ({ display, setDisplayState }) => {
  const backToSelection = () => {
    setDisplayState({ type: "hide", key: "contact" })
    setDisplayState({ type: "discover", key: "selection" })
  }

  return (
    <div className={`contact ${!display && "contact--hidden"}`}>
      <div
        className={`contact__shape ${display ? "--is-opaque" : "--is-faded"}`}
      >
        <p>Contact</p>
        <ShiftingShape isVisible={display} shapeOptions={shapeOptions} />
      </div>
      <div
        className={`contact__form ${display ? "--is-opaque" : "--is-faded"}`}
      >
        <p className={display ? "--is-in" : "--is-out"}>
          Envoyez-moi un mail:{" "}
        </p>
        <CTA visible size="L">
          <a href="mailto:loic.torresg@gmail.com?subject=Demande de contact">
            loic.torresg@gmail.com
          </a>
        </CTA>
        <p className={display ? "--is-in" : "--is-out"}>Téléphonez-moi:</p>
        <CTA visible size="L">
          <a href="tel:0628921127">(+33) 6 28 92 11 27</a>
        </CTA>
        <p>Contactez-moi sur Linkedin</p>
        <CTA visible position="link" size="L">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lo%C3%AFctorres/"
            rel="noreferrer"
          >
            Linkedin/loïctorres
          </a>
        </CTA>
        {/* <p>Envoyez-moi directement un message:</p>
      <div>
        <textarea name="" id="" cols="30" rows="10" />
        <div className="form__cta" role="button">
          envoyer
        </div>
      </div> */}
        <div className="return">
          <CTA size="L" visible action={backToSelection} position="right">
            retour
          </CTA>
        </div>
      </div>
    </div>
  )
}

export { Contact }

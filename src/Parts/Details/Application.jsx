import { Details } from "../../Components/Details"
import application from "../../assets/images/app.jpeg"

const shapeOptions = {
  imgSrc: application,
  skew: { x: 0, y: 0 },
}

const Application = ({ display, setDisplayState }) => (
  <Details
    display={display}
    setDisplayState={setDisplayState}
    background="var(--application-color)"
  >
    <Details.ContentContainer left>
      <Details.Content title="Imaginez, vous êtes servi." timeout={200}>
        Vous avez besoin d’un espace pour partager vos fichiers, d’un agenda en
        ligne accessible par mot de passe ou d’un nouveau lecteur de vidéos ?
        Contactez-moi et discutons de ce que je peux faire pour vous.
      </Details.Content>
      <Details.Content
        title="Un ensemble d’outils a portée de main."
        timeout={300}
      >
        Le web est vaste, et offre énormément d’outils de création. De
        l’hébergement serveless à exoscale, un cloud Européen, je m’engage à
        vous trouver la solution la plus adaptée à vos besoins, et la plus
        économique.
      </Details.Content>
      <Details.Content title="Un besoin, mais pas d’idée?" timeout={400}>
        Contactez-moi, et imaginons ensemble une réponse à vos challenges
        quotidien.
      </Details.Content>
    </Details.ContentContainer>
    <Details.Name shapeOptions={shapeOptions}>Application</Details.Name>
  </Details>
)

export { Application }

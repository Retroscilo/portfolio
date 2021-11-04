import { Details } from "../../Components/Details"
import vitrine from "../../assets/images/vitrine.jpg"

const shapeOptions = {
  imgSrc: vitrine,
  skew: { x: 0, y: 0 },
}

const Vitrine = ({ display, setDisplayState }) => (
  <Details
    display={display}
    setDisplayState={setDisplayState}
    background="var(--vitrine-color)"
  >
    <Details.ContentContainer left>
      <Details.Content title="Personnalisez" timeout={200}>
        Votre site n’est pas statique: <br />
        avec Strapi, vous disposez d’une page qui vous est réservée, a partir de
        laquelle vous pouvez modifier, ajouter ou supprimer du contenu
        facilement.
      </Details.Content>
      <Details.Content
        title="Profitez des dernières technologies"
        timeout={300}
      >
        Vous profiterez d’un site utilisant les dernières technologies web:
        NextJS, Strapi et Stripe pour gérer les paiements. Vous bénéficirez des
        meilleures performances pour une navigation parfaite, et du meilleur
        référencement possible.
      </Details.Content>
      <Details.Content title="Pas de frais cachés" timeout={400}>
        Vous payez la construction du site et le nom de domaine, mais pas de
        frais mensuel pour continuer à l’utiliser.
      </Details.Content>
    </Details.ContentContainer>
    <Details.Name shapeOptions={shapeOptions}>VITRINE</Details.Name>
  </Details>
)

export { Vitrine }

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
        Votre site n’est pas statique : <br />
        avec Strapi, vous disposez d’une page qui vous est réservée, à partir de
        laquelle vous pouvez modifier, ajouter ou supprimer du contenu
        facilement.
      </Details.Content>
      <Details.Content title="Sortez du lot" timeout={300}>
        Nous discuterons ensemble d'un design qui vous plait. Je vous conseille
        en terme de contenu, d'image et de UI pour que votre site soit au top de
        sa forme.
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

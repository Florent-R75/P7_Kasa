// import Modules
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/accommodations.json";
import Tag from "./Tag";
import Collapse from "../components/Collapse";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Host from "./Host";

const FicheLogementDisplay = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = logement?.tags?.map((tag, i) => {
    return <Tag key={i} tag={tag} />;
  });

  /* Équipements */
  const equipements = logement?.equipments?.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {logement ? (
        <div className="Fiche-container">
          <Carrousel slides={logement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{logement?.title}</span>
                  <span className="endroit-logement">{logement?.location}</span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={logement?.host?.name}
                    picture={logement?.host?.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={logement?.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-content">
            <div className="description-content__description">
              <Collapse title="Description" content={logement?.description} />
            </div>
            <div className="description-content__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        // Je renvoie a la page d'erreur en l'absence de logement
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default FicheLogementDisplay;

//  Modules
import { useParams, Navigate } from "react-router-dom";
// Data
import housings from "../data/housings.json";
// Components
import Collapse from "./Collapse";
import Carrousel from "./Carrousel";
import Rating from "./Rating";
import Host from "./Host";

const HousingDisplay = () => {
  /* Récupère l'id dans la barre d'adresse et je recherche le logement dans le tableau */
  const { id } = useParams();

  const housing = housings.find((housing) => housing.id === id);

  /* Tags */
  const housingTags = housing?.tags?.map((tag, i) => {
    return (
      <ul className="tag-container" key={i}>
        <li className="tag-container__button">{tag}</li>
      </ul>
    );
  });

  /* Équipements */
  const equipements = housing?.equipments?.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {!housing ? (
        <Navigate replace to="/404" /> // Je verifie l'existence du logement
      ) : (
        <div className="housing-container">
          <Carrousel slides={housing?.pictures} />
          <section className="housing-card">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="housing-title">{housing?.title}</span>
                  <span className="housing-location">{housing?.location}</span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {housingTags}
                </div>
              </div>

              <div className="description-info__host">
                {/* Hosting */}
                <div className="description-info__host__name-prop">
                  <Host
                    name={housing?.host?.name}
                    picture={housing?.host?.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__host__rate">
                  <Rating score={housing?.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-content">
            <div className="description-content__description">
              <Collapse title="Description" content={housing?.description} />
            </div>
            <div className="description-content__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HousingDisplay;

import starEmpty from "../assets/rate/starEmpty.svg";
import starFull from "../assets/rate/starFull.svg";

function Rating({ rating }) {
  const rangeRating = [1, 2, 3, 4, 5]; // Je cree le tableau des notes possibles.

  return (
    <div className="rate-container">
      {/*  1) Je boucle sur le tableau a partir de la valeur la plus basse ... */}
      {rangeRating.map((rangeRating) => (
        <img
          key={rangeRating.toString()}
          className="star"
          src={rating >= rangeRating ? starFull : starEmpty} // 2) Suite a la conditionnelle et la comparaison, je cree d'abord les etoiles vides, puis les etoiles pleines.
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;

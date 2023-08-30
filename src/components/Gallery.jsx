import { Link } from "react-router-dom";
import accommodations from "../accommodations/accommodations.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <ul className="home_gallery">
      {accommodations.map((accommodation) => {
        return (
          <li key={accommodation.id}>
            <Link to={`/accommodation/${accommodation.id}`}>
              <Card image={accommodation.cover} title={accommodation.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;

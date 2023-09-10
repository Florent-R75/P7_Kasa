import { Link } from "react-router-dom";
import housings from "../data/housings.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <ul className="home_gallery">
      {housings.map((housing) => {
        return (
          <li key={housing.id}>
            <Link to={`/housing/${housing.id}`}>
              <Card image={housing.cover} title={housing.title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;

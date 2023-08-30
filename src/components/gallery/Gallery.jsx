import accommodations from "../../accommodations/accommodations.json";
import Card from "../card/Card";

const Gallery = () => {
  return (
    <div>
      {accommodations.map((accommodation) => {
        return (
          <article>
            <Card image={accommodation.cover} title={accommodation.title} />
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;

function Card({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;

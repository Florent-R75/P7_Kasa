function Banner({ banner, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="banner of homepage" />
      <div className="banner__dark"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;

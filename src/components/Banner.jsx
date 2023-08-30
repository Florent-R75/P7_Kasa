function Banner({ banner, texte }) {
  return (
    <div className="banner">
      <img src={banner} alt="banner of homepage" />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;

// import of component
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

// import of images
import bannerHome from "../assets/banner/banner-home.jpg";

function Homepage() {
  return (
    <main>
      <Banner banner={bannerHome} texte="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}

export default Homepage;

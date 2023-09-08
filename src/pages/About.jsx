// Components
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

// Images
import bannerAbout from "../assets/banner/banner-about.jpg";

// Datas
import Charter from "../data/charter.json";

function About() {
  return (
    <div className="about">
      <Banner banner={bannerAbout} title="" />
      <div className="collapse">
        <div className="collapse__dropdown">
          {Charter.map((charter) => {
            return (
              <div key={charter.id}>
                <Collapse title={charter.title} content={charter.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;

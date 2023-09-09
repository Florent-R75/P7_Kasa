// Components
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

// Images
import bannerAbout from "../assets/banner/banner-about.jpg";

// Datas
import rules from "../data/rules.json";

function About() {
  return (
    <main className="about">
      <Banner banner={bannerAbout} title="" />
      <div className="collapse">
        <div className="collapse__dropdown">
          {rules.map((rule) => {
            return (
              <div key={rule.id}>
                <Collapse title={rule.title} content={rule.content} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default About;

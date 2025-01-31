import React from "react";
import dr_samal from "./assets/dr.sailesh_kumar_samal-removebg-preview.png";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Skills from "./pages/Journey/Skills"
import PieChart from "./components/graphcitation/piechart";
import "./App.css";

const ParallaxScrollEffect = () => {
  const data1 = [
    { year: 2018, citations: 11 },
    { year: 2019, citations: 9 },
    { year: 2020, citations: 23 },
    { year: 2021, citations: 27 },
    { year: 2022, citations: 46 },
    { year: 2023, citations: 104 },
    { year: 2024, citations: 172 },
    { year: 2025, citations: 22 },
  ];
  return (
    <div className="landing">
      <Navbar />
      <div className="parallax1">
        <div className="filter">
          <div className="intro">
            <h1>Dr. Shailesh Kumar Samal</h1>
            <h3>Co-Founder & CEO, Inflanova AB</h3>
            <h3>Senior Researcher Karolinska Institutet</h3>
            <h3>Adjunct fac./Prof - IIT Ropar</h3>
          </div>
        </div>
      </div>


      <div className="section1">
        <div className="about">
          <div className="text">
            <h1>About</h1>
            <p>
              Dr. Shailesh Kumar Samal is a distinguished scientist, accomplished entrepreneur, and innovator in the field of medical research. With an illustrious career spanning groundbreaking research, entrepreneurial ventures, and collaborations with some of the most celebrated minds in science, Dr. Samal has dedicated his life to transforming healthcare solutions for chronic inflammatory conditions.
              Holding dual PhDs from <a href="https://ki.se/en">Karolinska Institutet</a>, Sweden, and <a href="https://www.maastrichtuniversity.nl/">Maastricht University</a>, Netherlands, Dr. Samal’s academic excellence is complemented by his entrepreneurial spirit.
              As the CEO of <a href="https://inflanova.com/">Inflanova AB</a>, he spearheads efforts to develop cutting-edge vaccines and diagnostic tools, setting new benchmarks in medical science.
              His work on anti-PC (anti-phosphorylcholine) has been internationally lauded.
              <p>Through this platform, explore Dr. Samal’s journey of innovation, scientific achievements, and his unwavering commitment to improving global health.</p>
            </p>
          </div>
          <div className="dr_samal">
            <div className="dr_samal_img">
              <img src={dr_samal}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="display">
          <div className="research-even">
            <div className="number">59</div>
            <div className="desc">Total Research Projects</div>
          </div>
          <div className="research-odd">
            <div className="top-research">
              <h3>Top Paper</h3>
              <p>Emerging trends in advanced translational applications of silver nanoparticles: a progressing dawn of nanotechnology</p>
            </div>
            <div className="research-index">
              <h1>h-index: 12</h1>
              <p></p>
              <h1>i10-index: 16</h1>
            </div>
            <div className="desc">Research Stats</div>
          </div>
          <div className="research-odd">
            <div className="number"><PieChart data={data1} /></div>
          </div>
          <div className="research-even">
            <div className="number">452</div>
            <div className="desc">Total Citations</div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="intro">
          <div className="text-align-center">
            <p>Dr. Shailesh Kumar Samal, born in Delhi, had a dynamic childhood as his family frequently moved, which led him to attend schools in Mumbai and Bangalore. He began his academic journey in the field of medical sciences, which took him on remarkable international experiences.
            </p>
          </div>
          <div className="text-align-center">
            <p>During his undergraduate studies, Dr. Samal moved to the USA on an NIH fellowship, where he had the opportunity to work under the guidance of the legendary Nobel Laureate <a href="https://en.wikipedia.org/wiki/Oliver_Smithies">Prof. Oliver Smithies</a>. This experience was pivotal in shaping his scientific career and igniting his passion for research.
            </p>
          </div>
          <div className="text-align-center">
            <p>Further advancing his education, Dr. Samal went to <a href="https://www.up.pt/portal/en/">University of Porto</a>, Portugal as an Erasmus Mundus Master's student, further broadening his horizons and deepening his expertise in medical research.
            </p>
          </div>
          <div className="text-align-center">
            <p>Dr. Samal’s dedication to knowledge led him to pursue not one but two PhDs: one in Medical Sciences from <a href="https://ki.se/en">Karolinska Institutet</a>, Sweden, and another in Biochemistry from <a href="https://www.maastrichtuniversity.nl/">Maastricht University</a>, Netherlands. His relentless pursuit of excellence earned him prestigious fellowships, including the NIH fellowship and the Marie Curie-IntraCare fellowship, both of which were instrumental in shaping his global scientific journey.
            </p>
          </div>
          <div className="text-align-center">
            <p>These experiences provided him with a comprehensive understanding of various scientific disciplines and fueled his passion for developing cutting-edge solutions, particularly in vaccine development and chronic inflammatory conditions
            </p>
          </div>
          <div className="text-align-center">
            <p>Dr. Shailesh Kumar Samal's scientific journey took another transformative turn when he co-founded <a href="https://inflanova.com/">Inflanova AB</a>, a company focused on the development of innovative vaccines and diagnostic solutions for chronic inflammatory conditions. His vast experience, honed through his work with Nobel Laureates and world-renowned institutions, equipped him with the expertise to lead groundbreaking research in this critical area.
            </p>
          </div>
          <div className="text-align-center">
            <p>Inflanova’s mission, under Dr. Samal’s leadership, has been to not only address the current challenges in vaccine development but also to provide novel therapies that target chronic inflammatory diseases. His deep-rooted knowledge of immunology and biochemistry, coupled with his global research experience, gave him the vision to lead the company into uncharted territories in medical innovation.
            </p>
          </div>
          <div className="text-align-center">
            <p>Dr. Samal's extensive background in research, combined with his entrepreneurial spirit, has made him a leading figure in the field of vaccine development. His role as CEO of Inflanova AB has been marked by a commitment to advancing science through cutting-edge technologies and fostering collaborations with other experts in the medical community. His work continues to have a lasting impact on the global healthcare landscape, particularly in addressing chronic inflammatory conditions that affect millions of people worldwide.
            </p>
          </div>
          <div className="text-align-center">
            <p>Through his leadership at Inflanova, Dr. Samal is not only advancing medical science but also paving the way for future generations of researchers to follow in his footsteps.
            </p>
          </div>
        </div>
        <div className="timeline"><Skills /></div>
      </div>
      <Footer />
    </div>
  );
};

export default ParallaxScrollEffect;

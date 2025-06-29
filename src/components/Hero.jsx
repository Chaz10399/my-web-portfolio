import { formalPic } from "../assets/images/imglibrary";
import "./Styles/Hero.css";
import { DownloadBtn } from "./other-components/DownloadBtn";
import "./Styles/Animation.css";
import SocialIcons from "./other-components/SocialIcons";
export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div>
        <img
          className="hero-img"
          src={formalPic}
          alt="My Picture in formal Attire"
        ></img>
      </div>
      <div className="profile-col">
        <h4>Hello, I’m </h4>
        <h1>
          <span>CHARLIE SOBRIO,</span>
        </h1>
        <h3 className="mb-8">
          I'm a <span>Software Developer,</span>
        </h3>
        <p>
          Coding has become more than just a skill; it's something I truly
          enjoy. I'm always excited to learn, create, and grow, and I'd love to
          build meaningful things together with others who share the same
          passion.
        </p>
        <div>
          <div className="mb-16">
            <SocialIcons />
          </div>
          <div>
            <DownloadBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

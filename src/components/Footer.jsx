import Button from "../components/other-components/Button.jsx";
import "./Styles/Footer.css";
import SocialLinks from "../components/other-components/SocialIcons.jsx";
import FooterPages from "./other-components/FooterPages.jsx";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="bgn-img footer-col">
          <h3 className="mb-16">Let’s build something great!</h3>
        </div>
        <div className="footer-col">
          <SocialLinks />
          <div>{<FooterPages />}</div>
          <div className="mb-24">
            {" "}
            <Button
              buttonType="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Go Up
            </Button>
          </div>
        </div>
      </div>
      <div className="btm-right">
        <p className="subtext">© 2025 Charlie Sobrio | All rights reserved.</p>
      </div>
    </section>
  );
}

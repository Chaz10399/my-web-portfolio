import Card from "./other-components/Card";
import { icon1, icon2 } from "../assets/images/imglibrary.js";
import "./Styles/Services.css";
export default function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <h2 className="mb-48">About Services</h2>
        <div className="cards-container mb-24">
          <Card
            logo={icon1}
            subHeading={"UI / UX Design"}
            description={
              "I focus on creating intuitive and user-centered designs that enhance usability and visual appeal. Every interface is carefully crafted to provide a seamless user journey."
            }
          />
          <Card
            logo={icon1}
            subHeading={"Web Development"}
            description={
              "I build responsive and dynamic websites using modern technologies. Whether it's a landing page or a full-stack application, I ensure clean code and scalable structure."
            }
          />
          <Card
            logo={icon2}
            subHeading={"Maintenance/Support"}
            description={
              "I provide ongoing updates, performance tuning, and bug fixes to keep your site running smoothly and securely after launch."
            }
          />
        </div>
      </div>
    </section>
  );
}

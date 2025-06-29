import ImageScroller from "./other-components/ImageScroller";
import diploma from "../assets/images/diploma.jpg";
import ojt from "../assets/images/ojt-certificate.jpg";
import "../components/Styles/Credentials.css";
export default function Credentials() {
  const images = [diploma, ojt];
  return (
    <section className="center-col" id="credentials">
      <h2 className="mb-24">Credentials</h2>
      <ImageScroller images={images} />
    </section>
  );
}

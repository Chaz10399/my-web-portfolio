import "../Styles/Animation.css";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/charlie-sobrio-2442872aa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Chaz10399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/share/16WfLNNCrA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://t.me/charlie10399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </>
  );
}

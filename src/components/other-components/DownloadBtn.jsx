import "./DownloadBtn.css";
import ArrowIcon from "../../assets/images/arrow.svg";
import MyCV from "../../assets/MyCV.pdf";
export function DownloadBtn() {
  return (
    <div className="download-cv-btn">
      <button>
        <a href={MyCV} Download target="blank" rel="noopener noreferrer">
          Download CV
        </a>
      </button>
      <img src={ArrowIcon} alt="Arrow-icon" />
    </div>
  );
}

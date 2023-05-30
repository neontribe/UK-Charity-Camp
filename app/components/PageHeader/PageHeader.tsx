import Image from "next/image";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <header>
      <div className="logo-container">
        <Image alt="UK Charity Camp Logo" src="logo.svg" width={250} height={51} />
      </div>

      <div>
        <a
          className="privacy-link"
          href="https://www.dxw.com/privacy-statement/"
        >
          Privacy Policy
        </a>
      </div>
    </header>
  );
};

export default PageHeader;

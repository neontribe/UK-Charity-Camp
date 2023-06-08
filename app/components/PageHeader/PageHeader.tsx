import Image from "next/image";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <header>
      <div className="logo-container">
        <Image
          alt="UK Charity Camp Logo"
          src="logo.svg"
          width={250}
          height={51}
        />
      </div>

      <div className="twitter-container">
        <Image
          className="twitter-image"
          src="twitter-icon.svg"
          width={35}
          height={35}
          alt="Twitter"
        />

        <p className="twitter-cta-text">
          Follow us on{" "}
          <a href="https://twitter.com/ukcharitycamp" className="twitter-link">
            Twitter
          </a>{" "}
          for updates
        </p>
      </div>
    </header>
  );
};

export default PageHeader;

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

      <div className="social-media-container">
        <a
          href="https://bsky.app/profile/ukcharitycamp.bsky.social"
          target="_blank"
        >
          <Image
            className="social-media-image"
            src="blue-sky-logo.svg"
            width={40}
            height={35}
            alt="Navigates to Neontribe's BlueSky page"
          />
        </a>

        <p className="social-media-cta-text">
          Follow us on{" "}
          <a
            href="https://bsky.app/profile/ukcharitycamp.bsky.social"
            target="_blank"
            className="social-media-link"
          >
            BlueSky
          </a>{" "}
          for updates
        </p>
      </div>
    </header>
  );
};

export default PageHeader;

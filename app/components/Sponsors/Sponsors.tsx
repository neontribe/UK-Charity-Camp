import "./Sponsors.css";
import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-heading-container">
        <p className="sponsor-heading-text">Thank you to our sponsors</p>
      </div>
      <div className="sponsor-body-container">
        <div className="sponsor-first-row">
          <div className="sponsor-first-row-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>
          <div className="sponsor-first-row-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>
        </div>
        <div className="sponsor-grid">
          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>
          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>

          <div className="sponsor-grid-element">
            <Image
              fill={true}
              className="sponsor-grid-element"
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>
          <div className="sponsor-grid-element">
            <Image
              fill={true}
              className="sponsor-grid-element"
              alt="Thank you to the sponsors of this event"
              src="sponsors.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

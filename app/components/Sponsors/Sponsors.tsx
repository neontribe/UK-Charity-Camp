import "./Sponsors.css";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-heading-container">
        <p className="sponsor-heading-text">Thank you to our sponsors</p>
      </div>
      <div className="sponsor-body-container">
        <div className="sponsor-large">
          <div>
            <a target="_blank" href="https://www.neontribe.co.uk/">
              <Image
                width={153}
                height={55}
                alt="Thank you to Neontribe for sponsoring this event"
                src="/neontribe.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.promo.cymru/">
              <Image
                width={153}
                height={85}
                alt="Thank you to Promo cymru for sponsoring this event"
                src="/cymaru.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.ukgovcamp.com">
              <Image
                width={170}
                height={66}
                alt="Thank you to UKGovCamp for sponsoring this event"
                src="/ukgovchamp.png"
              />
            </a>
          </div>
        </div>
        <div className="sponsor-grid">
          <div>
            <a target="_blank" href="https://www.thecatalyst.org.uk/">
              <Image
                width={115}
                height={35}
                alt="Thank you to Catalyst for sponsoring this event"
                src="/catalyst.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.dovetail.network/">
              <Image
                width={85}
                height={18}
                alt="Thank you to Dovetail for sponsoring this event"
                src="/dovetail.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.techforgoodorganisers.uk/">
              <Image
                width={135}
                height={33}
                alt="Thank you to Tech for Good Organisers for sponsoring this event"
                src="/techforgood.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://thirdsectorlab.co.uk/">
              <Image
                width={97}
                height={57}
                alt="Thank you to the Third Sector Lab for sponsoring this event"
                src="/thirdsectorlab.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

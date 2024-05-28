import "./Sponsors.css";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-heading-container">
        <p className="sponsor-heading-text">Thank you to our 2024 sponsors</p>
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
            <a target="_blank" href="https://www.ukgovcamp.com">
              <Image
                width={170}
                height={66}
                alt="Thank you to UKGovCamp for sponsoring this event"
                src="/ukgovchamp.png"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://thirdsectorlab.co.uk/">
              <Image
                width={150}
                height={55}
                alt="Thank you to the Third Sector Lab for sponsoring this event"
                src="/thirdsectorlab.svg"
              />
            </a>
          </div>



          <div>
            <a target="_blank" href="https://nexergroup.com/">
              <Image
                width={150}
                height={35}
                alt="Thank you to Nexer for sponsoring this event"
                src="/nexer.png"
              />
            </a>
          </div>



        </div>
      
      </div>
    </div>
  );
};

export default Sponsors;

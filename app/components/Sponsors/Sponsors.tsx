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
                width={160}
                height={65}
                alt="Thank you to UKGovCamp for sponsoring this event"
                src="/ukgovchamp.png"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://torchbox.com/">
              <Image
                width={153}
                height={55}
                alt="Thank you to Torchbox for sponsoring this event"
                src="/torchbox.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://public.digital/">
              <Image
                width={210}
                height={70}
                alt="Thank you to Public Digital for sponsoring this event"
                src="/public-digital.png"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://basis.co.uk/">
              <Image
                width={145}
                height={65}
                alt="Thank you to Basis for sponsoring this event"
                src="/basis.png"
              />
            </a>
          </div>
        </div>

        <div className="sponsor-grid">

        <div>
            <a target="_blank" href=" https://www.thinknpc.org/">
              <Image
                width={90}
                height={45}
                alt="Thank you to NPC for sponsoring this event"
                src="/NPC.jpg"
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
                width={100}
                height={20}
                alt="Thank you to Nexer for sponsoring this event"
                src="/nexer.png"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.promo.cymru/">
              <Image
                width={110}
                height={35}
                alt="Thank you to Promo Cymru for sponsoring this event"
                src="/promo-cymru.png"

          <div>
            <a target="_blank" href="https://www.dataorchard.org.uk/">
              <Image
                width={75}
                height={55}
                alt="Thank you to Data Orchard for sponsoring this event"
                src="/data-orchard.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

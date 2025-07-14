import "./Sponsors.css";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-heading-container">
        <p className="sponsor-heading-text">Thank you to our 2025 sponsors</p>
      </div>
      <div className="sponsor-body-container">
        <div className="sponsor-large">
          <div>
            <a target="_blank" href="https://www.neontribe.co.uk/">
              <Image
                width={173}
                height={60}
                alt="Thank you to Neontribe for sponsoring this event"
                src="/neontribe.png"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.ukgovcamp.com">
              <Image
                width={195}
                height={70}
                alt="Thank you to UKGovCamp for sponsoring this event"
                src="/ukgovchamp.png"
              />
            </a>
          </div>
        </div>

        <div className="sponsor-large">
          <div>
            <a target="_blank" href="https://torchbox.com/">
              <Image
                width={145}
                height={55}
                alt="Thank you to Torchbox for sponsoring this event"
                src="/torchbox.png"
              />
            </a>
          </div>

{/*
          <div>
            <a target="_blank" href="https://public.digital/">
              <Image
                width={193}
                height={70}
                alt="Thank you to Public Digital for sponsoring this event"
                src="/public-digital.svg"
              />
            </a>
          </div>
*/}

{/*
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
*/}

{/*
          <div>
            <a target="_blank" href="https://poteris.co.uk/">
              <Image
                width={145}
                height={65}
                alt="Thank you to Poteris for sponsoring this event"
                src="/poteris.svg"
              />
            </a>
          </div>
*/}
        </div>


        <div className="sponsor-grid">

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

{/*
          <div>
            <a target="_blank" href="https://www.nexerdigital.com/">
              <Image
                width={100}
                height={20}
                alt="Thank you to Nexer for sponsoring this event"
                src="/nexer.png"
              />
            </a>
          </div>
*/}

          <div>
            <a target="_blank" href="https://www.promo.cymru/">
              <Image
                width={110}
                height={35}
                alt="Thank you to Promo Cymru for sponsoring this event"
                src="/promo-cymru.png"
              />
            </a>
          </div>

{/*
          <div>
            <a target="_blank" href="https://www.wearecast.org.uk/">
              <Image
                width={85}
                height={25}
                alt="Thank you to Cast for sponsoring this event"
                src="/cast.png"
              />
            </a>
          </div>
*/}
{/*
          <div>
            <a
              target="_blank"
              href="https://www.wearecast.org.uk/our-work/programmes-and-initiatives/digital-leads-network/"
            >
              <Image
                width={100}
                height={65}
                alt="Thank you to Digital Leads Network for sponsoring this event"
                src="/digital-leads.png"
              />
            </a>
          </div>
*/}

          <div>
            <a target="_blank" href="https://www.designforjoy.co.uk/">
              <Image
                width={60}
                height={60}
                alt="Thank you to Design For Joy for sponsoring this event"
                src="/joy.jpg"
              />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.charitychangecollective.uk/">
              <Image
                width={130}
                height={70}
                alt="Thank you to Charity Change Collective for sponsoring this event"
                src="/ccc.png"
              />
            </a>
          </div>
          <div>
            <a target="_blank" href="https://teamtilt.co.uk/">
              <Image
                width={70}
                height={70}
                alt="Thank you to Tilt for sponsoring this event"
                src="/tilt.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

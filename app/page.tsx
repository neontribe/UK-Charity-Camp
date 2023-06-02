import Image from "next/image";
import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
export default function Home() {
  return (
    <>
      <PageHeader />
      <main>
        <div className="main-container circle">
          <div className="left-container">
            <h1 className="main-heading">
              {" "}
              Third sector <span className="main-heading-red-letters">Un</span>
              conference{" "}
            </h1>

            <div className="location-container">
              <div className="map-icon-container">
                <Image
                  src="map-pin.svg"
                  height={80}
                  width={70}
                  alt="Map pin icon"
                />

                <Image
                  src="map-elipse.svg"
                  height={10}
                  width={10}
                  alt="Small circle that is part of the map pin icon"
                />

                <Image
                  src="map-elipse.svg"
                  height={10}
                  width={10}
                  alt="Another small circle part of the map pin icon"
                />
              </div>
              <div>
                <h2 className="date-heading">DD/MM/YY Birmingham </h2>
              </div>
            </div>

            <form className="sign-up-form">
              <label htmlFor="email-signup" className="sign-up-label">
                Sign up for more information
              </label>
              <div className="submit-container">
                <input
                  className="sign-up-input-field"
                  id="email-signup"
                  name="email-signup"
                  type="email"
                  placeholder="example@mail.com"
                ></input>
                <button className="sign-up-button">Submit</button>
              </div>
            </form>
          </div>

          <div className="right-container">
            <div className="text-container">
              <p>
                {" "}
                UKCharityCamp is an unconference: a space for conversations,
                not-for-profit, free to participants, open to anyone, 1st come,
                1st served, via open ticketing. We&apos;re expecting a range of
                third sector folk to attend; from trustees to people at smaller
                charities who have to “do digital” as well as everything else to
                heads of digital at larger organisations. Diverse experiences
                make for a better event.
              </p>

              <p>
                The agenda will be worked out on the day, by the people who are
                there. You can look forward to folk bringing their most burning
                questions, and to have real trouble working out which session to
                join. We&apos;d expect sessions on recruiting for digital roles,
                what good practise with AI looks like, where to focus if you
                have to do it all, working with digital partners, and loads
                more.
              </p>

              <p>It&apos;ll be a genuinely inspiring day.</p>
            </div>

            <div className="twitter-container">
              <Image
                className="twitter-image"
                src="twitter-icon.svg"
                width={50}
                height={50}
                alt="Twitter"
              />

              <p className="twitter-cta-text">
                Follow us on{" "}
                <a
                  href="https://twitter.com/ukcharitycamp"
                  className="twitter-link"
                >
                  Twitter
                </a>{" "}
                for updates
              </p>
            </div>
            <a
              className="privacy"
              href="https://www.dxw.com/privacy-statement/"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

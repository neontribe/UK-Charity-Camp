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
              Third sector <span className="main-heading-red-letters">un</span>
              conference{" "}
            </h1>

            <div className="location-container">
              <div>
                <p>Location Icon</p>
                <p>small circle</p>
                <p>small circle</p>
                <p>small circle</p>
              </div>
              <div>
                <h2 className="date-heading">DD/MM/YY Birmingham </h2>
              </div>
            </div>

            <form className="sign-up-form">
              <label className="sign-up-label">
                Sign up for more information
              </label>
              <div>
                <input
                  className="sign-up-input-field"
                  type="email"
                  placeholder="example@mail.com"
                ></input>
                <button className="sign-up-button">Submit</button>
              </div>
            </form>
          </div>

          <div className="right-container">
            <div className="text-container">
              Lorem ipsum dolor sit amet consectetur. Dictum tortor platea
              feugiat aliquam amet. Urna integer tempor eget tristique porttitor
              nunc viverra. Hac elementum donec integer scelerisque sed faucibus
              morbi. Integer volutpat purus sit nunc vel augue morbi libero.
              Pretium at venenatis vivamus et. Pretium auctor elementum enim vel
              libero enim feugiat sagittis. Turpis aliquet fusce dui facilisis
              pulvinar ut ut tristique velit. Augue quis quis dolor vulputate
              turpis nisi adipiscing egestas. Est vel auctor bibendum vulputate
              non viverra nunc feugiat. Facilisi morbi cursus laoreet neque
              cursus mauris amet. Ac tempus consequat dignissim velit
              pellentesque velit in tempus. Sapien amet lectus amet.
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
          </div>
        </div>
      </main>
    </>
  );
}

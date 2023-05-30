import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
export default function Home() {
  return (
    <>
      <PageHeader />
      <main>
        <div className="circle">
          <h1 className="main-heading">
            {" "}
            Third sector <span className="main-heading-red-letters">un</span>
            conference{" "}
          </h1>

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

        <div>
          <div>
            <p>Location Icon</p>
            <h2 className="date-heading">DD/MM/YY Birmingham </h2>
          </div>
          <div>
            <p>small circle</p>
            <p>small circle</p>
            <p>small circle</p>
          </div>
          <div>
            <p> Twitter Icon</p>
            <p className="twitter-cta-text">
              Follow us on <a className="twitter-link">Twitter</a> for updates
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

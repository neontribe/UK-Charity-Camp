"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
import Sponsors from "./components/Sponsors/Sponsors";
export default function Home() {
  const [email, setEmail] = useState("");
  // URL variables will not store real URL's - they will be used to catch inputs from bots and have realistic form names to mask bot detecting functionality
  const [url, setURL] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const submitHandler = async () => {
    const myRequest = new Request("/api/email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetch(myRequest).then((response) => {
      if (response.status >= 400) {
        setSubmissionMessage(
          "Sorry something went wrong... please try again later"
        );
      } else {
        setSubmissionMessage("Success! You're officially signed up!");
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionMessage("");
    if (url !== "") {
      //resets the input field so that it is blank
      setURL("");
      return;
    }
    submitHandler();
    //resets the input field so that it is blank
    setEmail("");
  };

  return (
    <>
      <PageHeader />
      <main>
        <div className="main-container circle">
          <div className="left-container">
            <h1 className="main-heading">
              {" "}
              Third Sector <span className="main-heading-red-letters">Un</span>
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
                <h2 className="date-heading">30/11/2023 Birmingham </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="sign-up-form">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {/* a form field to catch bots, it does not collect any data */}
                <div className="website-url-pot">
                  <label htmlFor="website-url">Your website</label>
                  <input
                    type="text"
                    id="website-url"
                    name="website-url"
                    value={url}
                    tabIndex={-1}
                    onChange={(e) => setURL(e.target.value)}
                    autoComplete="off"
                    placeholder="not for users, please skip"
                  />
                </div>
                {/* a form field to catch bots, it does not collect user data */}

                <button className="sign-up-button">Submit</button>
              </div>
              <p>{submissionMessage}</p>
            </form>

            <div className="twitter-mobile-container">
              <Image
                className="twitter-image"
                src="twitter-icon.svg"
                width={35}
                height={35}
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

          <div className="right-container">
            <div className="text-container">
              <p>
                UKCharityCamp is an unconference: a space for conversations,
                not-for-profit, free to participants, open to anyone, with
                travel bursaries for those who need them.
              </p>

              <p>
                A range of third sector folk attended in 2023; from trustees to
                people at smaller charities who have to “do digital” as well as
                everything else to heads of digital at larger organisations.
                Diverse experiences made for a better event.
              </p>

              <p>
                <p>
                  The{" "}
                  <a
                    className="link"
                    href="https://docs.google.com/spreadsheets/d/1Ar4fC1wVAhYSz2gYn61pvh3OD2TPfT4oh8rLg4PAH7w/edit#gid=0"
                  >
                    agenda was worked out at the event
                  </a>
                  , by the people who were there.
                </p>
              </p>

              <p>It was a genuinely inspiring day.</p>
              <blockquote className="quote">
               <p>You come away with things you can action. Tangible things.</p> 
                <footer className="quote-author">
                  - Head of digital development, <cite> national charity </cite>
                </footer>
              </blockquote>

              <p>
                If you want to hear about plans for the future, drop us your
                email address.
              </p>
            </div>
            <Sponsors />
          </div>
        </div>

        <div className="privacy-container">
          <a className="privacy" href="https://www.dxw.com/privacy-statement/">
            Privacy Policy
          </a>
        </div>
      </main>
    </>
  );
}

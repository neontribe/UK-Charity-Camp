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

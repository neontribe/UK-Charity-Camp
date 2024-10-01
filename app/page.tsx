"use client";
import Image from "next/image";

import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
import Sponsors from "./components/Sponsors/Sponsors";
export default function Home() {
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
                <h2 className="date-heading">
                  28/11/2024{" "}
                  <a href="https://thestudio.co.uk/venues/birmingham/">
                    The Studio, Birmingham
                  </a>
                </h2>
              </div>
            </div>

            <a
              className="tickets"
              href="https://www.eventbrite.co.uk/e/ukcharitycamp-2024-tickets-940310844047"
            >
              Get tickets
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </a>

            <div className="social-media-mobile-container">
              <a
                href="https://bsky.app/profile/ukcharitycamp.bsky.social"
                target="_blank"
              >
                <Image
                  className="social-media-image"
                  src="blue-sky-logo.svg"
                  width={40}
                  height={35}
                  alt="Navigates to Neontribe's Bluesky page"
                />
              </a>

              <p className="social-media-cta-text">
                Follow us on{" "}
                <a
                  href="https://bsky.app/profile/ukcharitycamp.bsky.social"
                  target="_blank"
                  className="social-media-link"
                >
                  BlueSky
                </a>{" "}
                for updates
              </p>
            </div>
          </div>

          <div className="right-container">
            <div className="text-container">
              <p>
                UKCharityCamp is an unconference for people who want to explore
                how to use digital to help the third sector do more for their
                communities. It&apos;s a space for conversations, not-for-profit,
                free to participants, open to anyone, with travel bursaries for
                those who need them.
              </p>

              <p>
                A range of third sector folk attended in 2023; from trustees to
                people at smaller charities who have to “do digital” as well as
                everything else to heads of digital at larger organisations. We
                did our best to make it a welcome and inclusive place for
                everyone from experts to complete beginners. Diverse experiences
                made for a better event.
              </p>

              <p>
                As UKCharityCamp is an unconference, the {''}
                <a
                  className="link"
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1Ar4fC1wVAhYSz2gYn61pvh3OD2TPfT4oh8rLg4PAH7w/edit#gid=0"

                >
                  agenda was worked out at the event {'  '}
                </a>
                by the people who were there. Folks came along with their
                questions, challenges, ideas and experiences to share. It was a
                genuinely inspiring day, so we&apos;re doing it again.
              </p>

              <p>
                Grab a ticket if you&apos;d like to join us in Birmingham on
                Thursday 28 November 2024
              </p>
              <blockquote className="quote">
                <p>
                  You come away with things you can action. Tangible things.
                </p>
                <footer className="quote-author">
                  - Head of digital development, national charity
                </footer>
              </blockquote>
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

"use client";
import Image from "next/image";

import "./page.css";
import PageHeader from "./components/PageHeader/PageHeader";
import Sponsors from "./components/Sponsors/Sponsors";
import VenueHeading from "@/app/components/VenueHeading/VenueHeading";
import HyperlinkButton from "@/app/components/HyperlinkButton/HyperlinkButton";
import SignupForm from "@/app/components/SignupForm/SignupForm";

export default function Home() {
  /* fill and set this object to control the page */
  const event = {
    eventDate: null,
    venueUrl: null,
    venueName: null,
    ticketingHref: null,
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
              <VenueHeading
                date={event.eventDate}
                venueUrl={event.venueUrl}
                venueName={event.venueName}
              />
            </div>

            { event.ticketingHref ? (
              <HyperlinkButton
                buttonText="Get Tickets"
                href={event.ticketingHref}
              />
            ) : (
              <SignupForm />
            )}
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
                communities. It&apos;s a space for conversations,
                not-for-profit, free to participants, open to anyone - with
                blocks of tickets for larger and smaller charities, and for the
                folk who work with them, and travel bursaries for those who need
                them.
              </p>

              <p>
                A range of third sector folk attended in 2024; from trustees to
                people at smaller charities who have to “do digital” as well as
                everything else to heads of digital at larger organisations. We
                did our best to make it a welcome and inclusive place for
                everyone from experts to complete beginners. Diverse experiences
                made for a better event.
              </p>

              <p>
                As UKCharityCamp is an unconference, the {""}
                <a
                  className="link"
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1Ar4fC1wVAhYSz2gYn61pvh3OD2TPfT4oh8rLg4PAH7w/edit#gid=0"
                >
                  agenda was worked out at the event {"  "}
                </a>
                by the people who were there. Folks came along with their
                questions, challenges, ideas and experiences to share. It was a
                genuinely inspiring day, so we&apos;re doing it again.
              </p>

              <p>
                Sign up for more information if you&apos;d like to join us in Birmingham on
                Thursday 13 November 2025, and we'll let you know when tickets are available.
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

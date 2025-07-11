import React from "react";

type VenueHeadingProps = {
  date: string | null | undefined;
  venueUrl: string | null | undefined;
  venueName: string | null | undefined;
};

const VenueHeading: React.FC<VenueHeadingProps> = ({
  date,
  venueUrl,
  venueName,
}) => {
  return (
    <div>
      <div className="date-heading">{date ?? ""} </div>
      <div className="date-heading">
        <span>
          {venueUrl ? (
            <a href={venueUrl}>{venueName ?? ""}</a>
          ) : (
            venueName ?? ""
          )}
        </span>
      </div>
    </div>
  );
};

export default VenueHeading;

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
      <h2 className="date-heading">
        {date ?? ""}{" "}
        {venueUrl ? (
          <a href={venueUrl}>{venueName ?? ""}</a>
        ) : (
          <span>{venueName ?? ""}</span>
        )}
      </h2>
    </div>
  );
};

export default VenueHeading;

import React from "react";

export const Clock = ({ timeZone }) => {
  const now = new Date();
  const options = {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedTime = new Intl.DateTimeFormat("en-GB", options).format(now);

  return (
    <div>
      <p>Copenhagen, DK {formattedTime}</p>
    </div>
  );
};

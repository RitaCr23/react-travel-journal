import React from "react";
import pin from "../images/Fill 219.png";

export default function Countries({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="countries-card">
      <img src={imageUrl} className="location-img" />
      <div className="location">
        <img src={pin} />
        <h5>{location}</h5>
        <h6>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </h6>
      </div>
      <h3>{title}</h3>
      <div className="dates">
        <h6>
          {startDate} - {endDate}
        </h6>
      </div>
      <p className="description">{description}</p>
      <hr></hr>
    </div>
  );
}

/*
title, location, googleMapsUrl, startDate, endDate, description, imageUrl
*/

import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <FontAwesomeIcon icon="map-marker-alt" />
          <label>Location</label>
        </li>
        <li>
          <FontAwesomeIcon icon="phone" />
          <label>Contact</label>
        </li>
        <li>
          <FontAwesomeIcon icon="calendar" />
           <label>Calendar</label>
        </li>
        <li>
          <FontAwesomeIcon icon="users" />
          <label>RSVP</label>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

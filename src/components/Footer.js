import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Calendar from "./Calendar";
import Call from "./Call";
import Location from "./Location";
import RVSP from "./RVSP";

const Footer = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { nav: "Location", icon: "map-marker-alt", id: 0 },
      { nav: "Contact", icon: "phone", id: 1 },
      { nav: "Calendar", icon: "calendar", id: 2 },
      { nav: "RVSP", icon: "users", id: 3 },
    ],
  });
  const [calendar, setCalendar] = useState("display-none");
  const [call, setCall] = useState("display-none");
  const [location, setLocation] = useState("display-none");
  const [rvsp, setRvsp] = useState("display-none");

  function openTab(index, e) {
    if (index === "Calendar" && appState.objects[e] !== appState.activeObject) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCalendar("display-flex overlay-2");
      setCall("display-none");
      setLocation("display-none");
      setRvsp("display-none");
    } else if (
      index === "Contact" &&
      appState.objects[e] !== appState.activeObject
    ) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCall("display-flex overlay-2");
      setCalendar("display-none");
      setLocation("display-none");
      setRvsp("display-none");
    } else if (
      index === "Location" &&
      appState.objects[e] !== appState.activeObject
    ) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCall("display-none");
      setCalendar("display-none");
      setLocation("display-flex overlay-2");
      setRvsp("display-none");
    } else if (
      index === "RVSP" &&
      appState.objects[e] !== appState.activeObject
    ) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCall("display-none");
      setCalendar("display-none");
      setLocation("display-none");
      setRvsp("display-flex overlay-2");
    } else {
      changeState({ ...appState, activeObject: appState.objects });
      setCalendar("display-none");
      setCall("display-none");
      setLocation("display-none");
      setRvsp("display-none");
    }
  }
  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "active";
    } else {
      return "not-active";
    }
  }
  return (
    <div className="nav">
      <footer>
        <ul>
          {appState.objects.map((elements, index) => (
            <li
              key={index}
              className={toggleActiveStyles(index)}
              onClick={() => {
                openTab(elements.nav, index);
              }}
              value={index}
            >
              <FontAwesomeIcon icon={elements.icon} />
              <label>{elements.nav}</label>
            </li>
          ))}
        </ul>
      </footer>
      <div className={calendar}>
        <Calendar />
      </div>
      <div className={call}>
        <Call />
      </div>
      <div className={location}>
        <Location />
      </div>
      <div className={rvsp}>
        <RVSP/>
      </div>
    </div>
  );
};

export default Footer;

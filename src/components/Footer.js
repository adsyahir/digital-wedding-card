import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Calendar from "./Calendar";
import Call from "./Call";

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

  function openTab(index, e) {
    if (index === "Calendar" && appState.objects[e] !== appState.activeObject) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCalendar("display-flex overlay-2");
      setCall("display-none");
    } else if (
      index === "Contact" &&
      appState.objects[e] !== appState.activeObject
    ) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setCall("display-flex overlay-2");
      setCalendar("display-none");
    } else {
      changeState({ ...appState, activeObject: appState.objects });
      setCalendar("display-none");
      setCall("display-none");
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
        <Call/>
      </div>
    </div>
  );
};

export default Footer;

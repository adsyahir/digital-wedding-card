import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState} from "react";
import Location from "./Location";

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
  const[location, setLocation] = useState("display-none");

  
  function openTab(index,e) {
    if (index === "Location" && appState.objects[e] !== appState.activeObject ) {
      changeState({ ...appState, activeObject: appState.objects[e] });
      setLocation("display-flex overlay-2");
      console.log(index);
      console.log(e);
    }
    else
    {
      changeState({ ...appState, activeObject: appState.objects });
      setLocation("display-none");
      console.log("2");
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
                openTab(elements.nav,index);
              }}
              value={index}
            >
              <FontAwesomeIcon icon={elements.icon} />
              <label>{elements.nav}</label>
            </li>
          ))}
        </ul>
      </footer>
      <div className={location}>
      <Location />
      </div>
    </div>
  );
};

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Location.css';
const Location = () => {
    return (
      <div className="location">
        <ul>
          <li>
          <a href="myevents.ics" download>
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <p>Apple Map</p></a>
          </li>
        </ul>
      </div>
      );
}
 
export default Location;
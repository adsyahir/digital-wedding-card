import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Calendar.css';
const Calendar = () => {
    return (
      <div className="calendar">
        <ul>
          <li>
          <a href="myevents.ics" rel="noreferrer" target="_blank" download>
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <p>Apple Calendar</p></a>
          </li>
          <li>
          <a href="myevents.ics" rel="noreferrer" target="_blank" download>
          <FontAwesomeIcon icon={['fab', 'google']} />
          <p>Google Calendar</p></a>
          </li>
        </ul>
      </div>
      );
}
 
export default Calendar;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Location.css';
const Calendar = () => {
    return (
      <div className="location">
        <ul>
          <li>
          <a href="https://www.waze.com/live-map/directions/kodiang-kedah-malaysia?to=place.ChIJZ_6HW0WhTDARFIxqDhDQmYY" rel="noreferrer" target="_blank" download>
          <FontAwesomeIcon icon={['fab', 'waze']} />
          <p>Waze</p></a>
          </li>
          <li>
          <a href="https://www.google.com/maps/dir/1.5806424,103.7868531/dewan+di+kodiang/@4.0335404,99.7766274,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x304c97cabde110ab:0xce976c709a28345e!2m2!1d100.2385942!2d6.5152336" rel="noreferrer" target="_blank" download>
          <FontAwesomeIcon icon={['fab', 'google']} />
          <p>Google Map</p></a>
          </li>
        </ul>
      </div>
      );
}
 
export default Calendar;
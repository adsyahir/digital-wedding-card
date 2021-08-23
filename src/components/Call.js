import "./Call.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Call = () => {
  return (
    <div className="call">
      <ul>
        <li>
          <label>Abu</label>
          <div className="number">
            <a
              className="phone"
              href="tel:0123456789"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={"phone"} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="whatsapp"
              href="https://api.whatsapp.com/send?phone=60123456789"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
          </div>
        </li>
        <li>
          <label>Zaiton</label>
          <div className="number">
            <a
              className="phone"
              href="tel:0123456789"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={"phone"} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="whatsapp"
              href="https://api.whatsapp.com/send?phone=60123456789"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
          </div>
        </li>
        <li>
          <label>Kumar</label>
          <div className="number">
            <a className="phone" href="tel:0123456789">
              <FontAwesomeIcon icon={"phone"} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="whatsapp"
              href="https://api.whatsapp.com/send?phone=60123456789"
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Call;

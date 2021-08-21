import "./Detail.css";
import Bismillah from "../bismillah_black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = () => {
  return (
    <div className="detail">
      <img src={Bismillah} alt="bismillah"></img>
      <p>Walimatulurus</p>
      <h2>Muhammad Ali bin Abu Bakar</h2>
      <h2>&</h2>
      <h2>Siti Fatimah binti Ismail Sabri</h2>
      <p>
        DENGAN SEGALA HORMATNYA MEMPERSILAKAN Y.B. / Y.BHG. TAN SRI / PUAN SRI /
        DATUK / DATO’/ DATIN / TUAN / PUAN / SAUDARA / SAUDARI KE MAJLIS
        PERKAHWINAN
      </p>
      <h2>Muhammad Ali bin Abu Bakar</h2>
      <h2>&</h2>
      <h2>Siti Fatimah binti Ismail Sabri</h2>
      <h5>TARIKH</h5>
      <label>April 30, 2050</label>
      <h5>ATURCARA MAJLIS</h5>
      <label>Ketibaan Tetamu : 10:00 am</label>
      <label>Jamuan Makan : 10:00 am</label>
      <label>Ketibaan Pengantin : 2:00 pm</label>
      <label>Majlis Tamat : 5:00 pm</label>
      <h5>LOKASI</h5>
      <label>Dewan Mulia, Kodiang</label>
      <p>
        Undangan kami setulus hati, dengan izin Allah SWT sudilah meraikan
        majlis ini. Sekian terima kasih. Wassalam
      </p>
      <h4>Social Share</h4>
      <ul className="ul-icon">
        <li className="facebook"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></li>
        <li className="twitter"><FontAwesomeIcon icon={['fab', 'twitter-square']} /></li>
        <li className="whatsapp"><FontAwesomeIcon icon={['fab', 'whatsapp-square']} /></li>
        <li className="telegram"><FontAwesomeIcon icon={['fab', 'telegram']} /></li>
      </ul>
    </div>
  );
};

export default Detail;

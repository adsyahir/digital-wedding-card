import "./Doa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Doa = ({ count, increment }) => {
  return (
    <div className="doa">
      <p>
        Ya Allah, berkatilah satukanlah hati kedua pasangan mempelai ini dengan
        iman, keyakinan dan tawakal kepadaMu, panjangkan umur mereka,
        lapangkanlah rezeki mereka, dekatlah mereka menuju kebaikan, jauhkanlah
        mereka dari keburukan, kurniakanlah mereka zuriat yang soleh dan
        solehah.
      </p>
      <div className="row-like">
        <div className="like" onClick={increment}>
          <FontAwesomeIcon icon="heart" />
        </div>
        <span>{count}</span>
      </div>
    </div>
  );
};
export default Doa;

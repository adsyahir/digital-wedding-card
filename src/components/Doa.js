import "./Doa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Doa = ({ counts, increment,handleInput}) => {

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
        {counts.map((counts) => (
          <div key={counts.id}>
            <div className="like" onClick={() => {
                increment(counts.counter);
                handleInput(counts.counter)
              }}>
              <FontAwesomeIcon icon="heart" />
            </div>
            <span>{counts.counter}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doa;

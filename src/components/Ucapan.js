import "./Ucapan.css";
import Button from "./Button";
const Ucapan = () => {
  return (
    <form>
      <div className="ucapan">
        <h2>Ucapan</h2>
        <input
          type="text"
          name="name"
          className="name-anda"
          placeholder="Nama anda"
          required
        ></input>
        <textarea
          rows="4"
          className="ucapan-anda"
          placeholder="&#10;Ucapan anda"
          required
        ></textarea>
        <Button />
      </div>
    </form>
  );
};

export default Ucapan;

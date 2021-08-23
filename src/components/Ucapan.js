import "./Ucapan.css";
import './Button.css';
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
        <button type="submit" class="submit-button state-0">
          <span class="pre-state-msg">Submit</span>
          <span class="current-state-msg hide">Sending...</span>
          <span class="done-state-msg hide">Done!</span>
        </button>
      </div>
    </form>
  );
};

export default Ucapan;

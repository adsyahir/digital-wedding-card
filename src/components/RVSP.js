import { useState } from "react";
import "./RVSP.css";

const RVSP = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    if (e.target.value === "Hadir") {
      setInput(false);
      console.log(e);
    } else if(e.target.value === "Tidak Hadir") {
      setInput(true);
    }
  };
  return (
    <div className="rvsp">
      <h4>RVSP</h4>
      <select name="kehadiran" className="input-rvsp" onChange={handleInput}>
        <option value="Hadir">Hadir</option>
        <option value="Tidak Hadir"> Tidak Hadir</option>
      </select>
      <input
        type="text"
        name="name"
        className="input-rvsp"
        placeholder="Nama "
      ></input>
      <input
        type="number"
        name="phone"
        className="input-rvsp"
        placeholder="No Telefon"
      ></input>
      <input
        type="email"
        name="email"
        className="input-rvsp"
        placeholder="Email"
      ></input>
      <input
        type="number"
        name="jumlah-kehadiran"
        className="input-rvsp"
        placeholder="Jumlah Kehadiran"
        hidden={input}
      ></input>
      <button type="submit" class="submit-button1 state-0">
        <span class="pre-state-msg">Submit</span>
        <span class="current-state-msg hide">Sending...</span>
        <span class="done-state-msg hide">Done!</span>
      </button>
    </div>
  );
};

export default RVSP;

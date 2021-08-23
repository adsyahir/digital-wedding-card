import Home from "./components/Home";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import "./components/FontAwesome";
import Separator from "./components/Separator";
import Doa from "./components/Doa";
import Countdown from "./components/Countdown";
import Ucapan from "./components/Ucapan";
import CreatedBy from "./components/CreatedBy";
import { useEffect, useRef, useState } from "react";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 30 , 2050 10:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop out timer
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const someref = interval.current;
    startTimer();
    return () => {
      clearInterval(someref);
    };
  }, []);
  /* 
  const [counts, setCounts] = useState(null);

   useEffect(() => {
    fetch("http://localhost:8000/count")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCounts(data);
      });
  });
  const [input, setInput] = useState("");
  function handleInput(event) {
    setInput(event);
  }
  function increment(counter) {
    var id = 1;
    counter++;
    let item = { counter, id };
    console.log(input);
    console.log(id);
    console.warn("item", item);
    fetch("http://localhost:8000/count/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
  }   */
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  };
  /* npx json-server --watch data/db.json --port 8000 */
  return (
    <div className="App">
      <Home />
      <Separator />
      <Detail />
      <Separator />
      <Doa increment={increment} count={count} />
      <Separator />
      <Countdown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Separator />
      <Ucapan />
      <CreatedBy />
      <Footer />
    </div>
  );
}
export default App;

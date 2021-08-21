import './Countdown.css';
const Countdown = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
    return ( 
        <div className="countdown">
        <h2>Countdown</h2>
        <ul>
            <li>
                <h4>{timerDays}</h4>
                <p>Hari</p>
            </li>
            <li>
                <h4>{timerHours}</h4>
                <p>Jam</p>
            </li>
            <li>
                <h4>{timerMinutes}</h4>
                <p>Minit</p>
            </li>
            <li>
                <h4>{timerSeconds}</h4>
                <p>Saat</p>
            </li>
        </ul>
        </div>
     );
}
 
export default Countdown;
import './Button.css';


const Button = () => {
    return ( 
        <button type="submit" class="submit-button state-0"><span class="pre-state-msg">Submit</span><span class="current-state-msg hide">Sending...</span><span class="done-state-msg hide">Done!</span></button>
     );
}
 
export default Button;
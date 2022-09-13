import "./contact.scss";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    if (!validateEmail(email)) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    setEmail("");
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>C O N T A C T </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you, I will respond ASAP</span>}
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

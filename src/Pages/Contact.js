import React, { useState } from "react";
import { send } from "emailjs-com";
import Footer from "./Footer";

// Skapar en funktion för användaren att kunna skicka mejl till mig

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Tömmer input fälten när användaren trycker på submit

  const reset = () => {
    document.getElementById("nameInput").value = "";
    document.getElementById("mailInput").value = "";
    document.getElementById("messageInput").value = "";
  };

  const myFunction = () => {
    mailConfirm();
    reset();
  };

  const mailConfirm = () => {
    alert("Your e-mail has been sent");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_6at5hki",
      "template_p7a8i1w",
      toSend,
      "user_kNYq5TdCtNs1XvOiObG8Y"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      })
      .reset()
      .mailConfirm();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="backGround-Image Contact"
      style={{
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://www.wallpaperup.com/uploads/wallpapers/2013/11/27/179556/5b09d28757f349bf50cffd2666e79c92.jpg)`,
      }}
    >
      <h1 className="contact-page-header">Welcome to the contact page!</h1>
      <p className="contact-page-text">
        This is my contact page, here you will find ways of contacting me. I
        will be happy to answer any questions you might have, relevant or not
        relevant, I like irrelevant questions. You can either send me a mail in
        the form below or, if you want a higher chance of me responding, message
        me directly on LinkedIn.
      </p>
      <h2 className="contact-page-mail-header">
        Send me a mail if you want to contact me
      </h2>

      {/* Skapar fälten där användaren kan skicka sitt mejl */}

      <form onSubmit={onSubmit}>
        <div className="mail-form">
          <input
            id="nameInput"
            type="text"
            name="from_name"
            placeholder="First and lastname"
            value={toSend.from_name}
            onChange={handleChange}
          />

          <input
            id="mailInput"
            type="text"
            name="from_email"
            placeholder="Your e-mail address"
            value={toSend.to_email}
            onChange={handleChange}
          />
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div className="mail-form">
          <textarea
            rows="5"
            cols="39"
            id="messageInput"
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />

          <button
            id="mail-submit-button"
            type="submit"
            onClick={() => myFunction()}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="contact-page-second-header">
        <h2>
          Message me on LinkedIn for some interesting <br></br> conversations
          (nothing interesting can be promised)
        </h2>
      </div>
      <div className="github-contact">
        <a href="https://www.linkedin.com/in/emil-s%C3%B6derback-502462228/">
          <img
            className="github-link"
            src="https://divorceinpoland.com/wp-content/uploads/2020/01/official-linkedin-logo-tile-300x300-1.png"
            alt="linkedinlogo"
          />
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

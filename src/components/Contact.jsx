import React from "react";
import Typewriter from "./Typewriter";
import "../styles/Contact.scss";

const Contact = () => {
  const email = "davemgj@gmail.com";
  const gitHub = "Github";
  const linkedIn = "LinkedIn";

  return (
    <>
      <section className="contacts">
        <div>
          <h1>Contact</h1>
          <h3>
            <a
              className="email"
              href="mailto:davemgj@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="far fa-envelope "></i>{" "}
              <Typewriter message={email} key={email} />
            </a>
          </h3>
          <h3>
            <a
              className="github"
              href="https://github.com/davemgj84"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github "></i>{" "}
              <Typewriter message={gitHub} key={gitHub} />
            </a>
          </h3>
          <h3>
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/david-jardine-a639891b7/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>{" "}
              <Typewriter message={linkedIn} key={linkedIn} />
            </a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contacts">
        <div className="contact-container">
          <h1>Contact</h1>
          <h3>
            <a
              className="email"
              href="mailto:davemgj@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="far fa-envelope "></i>davemgj@gmail.com
            </a>
          </h3>
          <div className="socials">
            <h3>
              <a
                className="github"
                href="https://github.com/davemgj84"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github "></i>
              </a>
            </h3>
            <h3>
              <a
                className="linked-in"
                href="https://www.linkedin.com/in/david-jardine-a639891b7/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

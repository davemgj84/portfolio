import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contacts">
        <h1>Contact</h1>

        <h3>
          <a className="phone" href="tel:778-998-8368">
            <i class="fas fa-mobile-alt fa-2x"></i> (778) 998-8368
          </a>
        </h3>

        <h3>
          <a className="email" href="mailto:davemgj@gmail.com" target="_blank">
            <i class="far fa-envelope fa-2x"></i> davemgj@gmail.com
          </a>
        </h3>
        <h3>
          <a
            className="github"
            href="https://github.com/davemgj84"
            target="_blank"
          >
            <i class="fab fa-github fa-2x"></i> Github
          </a>
        </h3>
        <h3>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/david-jardine-a639891b7/"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-2x"></i> LinkedIn
          </a>
        </h3>
      </section>
    </>
  );
};

export default Contact;

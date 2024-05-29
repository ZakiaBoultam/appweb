import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Avez-vous des questions?</h1>
      <h1 className="primary-heading">Laissez-nous vous aider</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Votre Commentaire" />
        <button className="secondary-button">Envoyer</button>
      </div>
    </div>
  );
};

export default Contact;
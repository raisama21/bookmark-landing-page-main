import React, { useState } from "react";

function SignUpComponent() {
  const [formData, setFormData] = useState({
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log([formData]);
  }

  return (
    <>
      <section>
        <div className="contactUs-section">
          <div className="contactUs-text">
            <p>35,000+ ALREADY JOINED</p>
            <h5>Stay up-to-date with what we're doing</h5>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
              name="email"
              onChange={handleChange}
            />
            <button className="button-style contactUs-btn">Contact Us</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUpComponent;

import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  };


  return (

    <main className="contact-page">

      <section className="contact-section">


        {/* Heading */}

        <div className="section-heading">

          <p className="section-tag">
            ✦ GET IN TOUCH
          </p>

          <h1>
            Let's <span>Connect.</span>
          </h1>

          <p className="section-subtitle">
            Have a project idea, question or just want to say hello?
            Feel free to reach out.
          </p>

        </div>



        {/* Contact Content */}

        <div className="contact-container">


          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-info-header">

              <span>
                👋
              </span>

              <div>

                <h2>
                  Hi, I'm Amey Prabhakar Mahajan
                </h2>

                <p>
                  I'm always open to discussing new projects,
                  ideas and opportunities.
                </p>

              </div>

            </div>



            {/* Email */}

            <div className="contact-item">

              <div className="contact-icon">
                📧
              </div>

              <div>

                <small>
                  Email
                </small>

                <p>
                  mahajanamey26@gmail.com
                </p>

              </div>

            </div>



            {/* Phone */}

            <div className="contact-item">

              <div className="contact-icon">
                📱
              </div>

              <div>

                <small>
                  Phone
                </small>

                <p>
                  +91 7498543674
                </p>

              </div>

            </div>



            {/* Location */}

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <small>
                  Location
                </small>

                <p>
                  Pune, Maharashtra, India
                </p>

              </div>

            </div>



            {/* Contact Note */}

            <div className="contact-note">

              🚀 Currently learning, building and looking
              forward to new opportunities.

            </div>

          </div>



          {/* Contact Form */}

          <div className="contact-form-card">

            <h2>
              Send Me a Message
            </h2>

            <p>
              Fill in the details below and send your message.
            </p>


            {/* Success Message */}

            {submitted && (

              <div className="success-message">

                ✓ Message submitted successfully!

              </div>

            )}



            <form onSubmit={handleSubmit}>


              {/* Name */}

              <div className="contact-form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>



              {/* Email */}

              <div className="contact-form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>



              {/* Message */}

              <div className="contact-form-group">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>



              {/* Submit Button */}

              <button
                type="submit"
                className="contact-submit-btn"
              >

                Send Message

                <span>
                  →
                </span>

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>

  );
}

export default Contact;
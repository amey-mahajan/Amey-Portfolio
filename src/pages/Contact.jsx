import { useState } from "react";
import emailjs from "@emailjs/browser";

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

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_lqnawwm",
        "template_74ku3xp",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        {
          publicKey: "sLda2Vwhmvol8i44r"
        }
      );

      console.log("EmailJS response:", response);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Message could not be sent. Please try again.");
    }
  };

  return (
    <main className="contact-page">

      <section className="contact-section">

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

        <div className="contact-container">

          <div className="contact-info">

            <div className="contact-info-header">

              <span>👋</span>

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

            <div className="contact-item">

              <div className="contact-icon">
                📧
              </div>

              <div>
                <small>Email</small>
                <p>mahajanamey26@gmail.com</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                📱
              </div>

              <div>
                <small>Phone</small>
                <p>+91 7498543674</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <small>Location</small>
                <p>Pune, Maharashtra, India</p>
              </div>

            </div>

            <div className="contact-note">
              🚀 Currently learning, building and looking
              forward to new opportunities.
            </div>

          </div>

          <div className="contact-form-card">

            <h2>
              Send Me a Message
            </h2>

            <p>
              Fill in the details below and send your message.
            </p>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

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

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
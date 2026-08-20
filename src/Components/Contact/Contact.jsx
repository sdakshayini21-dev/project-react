import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "a",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("");

  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (
      !form.email.includes("@")
    ) {
      newErrors.email =
        "Enter a valid email";
    }

    if (
      form.message.trim().length < 10
    ) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus("Sending...");

    await new Promise(
      (resolve) =>
        setTimeout(resolve, 1500)
    );

    setStatus("✅ Message sent");

    setForm({
      name: "",
      email: "",
      subject: "a",
      message: ""
    });

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >

      <h2>Contact Me</h2>

      <p className="contact-intro">
        Have a project? Let's talk.
      </p>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-msg">
              {errors.name}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">
              {errors.email}
            </span>
          )}

        </div>

        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >

            <option value="a">
              Select a topic
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collab">
              I want to collaborate
            </option>

            <option value="other">
              Others
            </option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">
              {errors.message}
            </span>
          )}

        </div>

        <button
          type="submit"
          disabled={status === "Sending..."}
        >
          {status || "Send Message"}
        </button>

      </form>

      <div className="contact-details">

        <p>
          Phone:7204087916
        </p>

        <p>
          Email:{" "}

          <a href="mailto:sdakshayini21@gmail.com">
            sdakshayini21@gmail.com
          </a>

        </p>

      </div>

    </section>
  );
}

export default Contact;
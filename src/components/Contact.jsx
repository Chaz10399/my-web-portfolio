import Button from "./other-components/Button";
import "./Styles/Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = e.target.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_xxauzpa",
        "template_icr7z02",
        e.target,
        "XEF8_NZxHQPGSzIuk"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-p mb-24">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <form onSubmit={sendEmail}>
          <div className="contact-col">
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={8}
            required
          ></textarea>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </section>
  );
}

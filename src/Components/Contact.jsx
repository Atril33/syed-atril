const Contact = () => (
  <>
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">Contact</h2>
      <form
        action="https://formspree.io/f/mgeboelg"
        method="post"
        id="formaction"
      >
        <input
          type="text"
          maxLength="30"
          name="name"
          placeholder="Your Name Here"
          id="input"
          className="name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Here"
          id="input"
          className="email"
          required
        />
        <textarea
          id="textpanel"
          cols="30"
          rows="9"
          maxLength="500"
          name="message"
          className="message"
          placeholder="Write Your Message Here"
          required
        />
        <button type="submit" className="submit">
          Get In Touch
        </button>
      </form>
    </div>
  </>
);

export default Contact;

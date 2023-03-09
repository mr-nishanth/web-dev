const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" id="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" id="message" cols="20" rows="10" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Contact;

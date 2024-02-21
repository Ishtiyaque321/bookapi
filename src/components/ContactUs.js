
const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can send data to a backend or an email service)
        // For now, let's log the form data:
        const { name, email, message } = e.target.elements;
        console.log('Name:', name.value);
        console.log('Email:', email.value);
        console.log('Message:', message.value);
      };
    
  return (
    <div>
            <div className="container mt-5">
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>


    </div>
  )
}

export default ContactUs
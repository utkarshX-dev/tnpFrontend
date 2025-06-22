import React, { useState } from "react";

export default function FooterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4 rounded shadow-sm bg-white" style={{ maxWidth: 500, margin: "0 auto", color:"black" }}>
      <h4 className="mb-3 fw-bold text-center">Get in Touch</h4>
      <p className="mb-4 text-muted text-center">We’d love to hear from you. Please fill out this form.</p>
      {submitted ? (
        <div className="alert alert-success text-center">Thank you for reaching out!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
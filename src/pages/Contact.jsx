import React, { useState } from "react";

/**
 * Contact form (id="contact")
 * This example uses a local demo alert on submit.
 * To receive real messages, integrate EmailJS / Netlify Forms / server.
 */

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // demo: replace with real integration
    alert(`Thanks ${name || "there"}! Message sent (demo).`);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Let’s start a conversation — open to internships and junior roles.</p>
      </div>

      <div className="section-card">
        <form className="contact-grid" onSubmit={onSubmit}>
          <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <input placeholder="Your email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <textarea placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
          <button type="submit" className="btn btn-primary" style={{gridColumn:"1 / -1",justifySelf:"start"}}>Send message</button>
        </form>

        <div style={{marginTop:14,color:"var(--muted)"}}>
          <strong>Or reach me directly:</strong>
          <div style={{marginTop:8}}>📞 09602071099</div>
          <div>✉️ kentjohn.navarro.24@usjr.edu.ph</div>
          <div style={{marginTop:8}}>📍 The Bird Building, Barrio Luz, Mabolo, Cebu City</div>
        </div>
      </div>
    </section>
  );
}

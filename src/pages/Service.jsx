import React from "react";

/**
 * Services (id="services")
 * Add or remove services as needed.
 */

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Responsive sites with HTML, CSS, and JavaScript." },
    { title: "C Programming", desc: "Console apps and algorithm practice in C." },
    { title: "Content & Design", desc: "Basic graphics and social visuals using Canva." },
    { title: "Data Handling", desc: "Excel data encoding, organization, and cleanup." },
   
  ];

  return (
    <section id="services">
      <div className="section-title">
        <h2>Services</h2>
        <p>What I can help you with — small, practical, and impactful.</p>
      </div>

      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="section-card">
            <h3 style={{margin:0}}>{s.title}</h3>
            <p style={{marginTop:8,color:"var(--muted)"}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

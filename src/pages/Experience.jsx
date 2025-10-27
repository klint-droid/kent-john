import React from "react";

/**
 * Experience (id="experience")
 * Add real experiences or school projects here.
 */

export default function Experience() {
  const experiences = [
    { role: "Work Immersion Student", company: "Mantalongon National HS", year: "2023", desc: "Data encoding using MS Excel, organizing folders and files, assisting admin tasks." },
    { role: "Project: BMI Calculator", company: "Academic Project", year: "2024", desc: "Built a single-page HTML/CSS/JS app with login and BMI computation." },
  ];

  return (
    <section id="experience">
      <div className="section-title">
        <h2>Experience</h2>
        <p>Work experience, internships, and relevant projects</p>
      </div>

      <div className="timeline">
        {experiences.map((ex, i) => (
          <div key={i} className="timeline-item">
            <strong>{ex.role} — {ex.company}</strong>
            <div style={{color:"var(--muted)",marginTop:6}}>{ex.year}</div>
            <div style={{marginTop:8,color:"var(--muted)"}}>{ex.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

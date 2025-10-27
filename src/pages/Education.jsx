import React from "react";

/**
 * Education (id="education")
 * Edit entries to match your actual dates and schools.
 */

export default function Education() {
  const education = [
    { year: "May 2025", degree: "Associate in Computer Technology (Software Development)", school: "University of San Jose-Recoletos, Cebu City" },
    { year: "May 2024", degree: "Senior High School (STEM) — With High Honor (GPA 95%)", school: "Mantalongon National High School, Dalaguete, Cebu" },
  ];

  return (
    <section id="education">
      <div className="section-title">
        <h2>Education</h2>
        <p>Academic background and certifications</p>
      </div>

      <div className="timeline">
        {education.map((e, i) => (
          <div key={i} className="timeline-item">
            <strong>{e.degree}</strong>
            <div style={{color:"var(--muted)",marginTop:6}}>{e.school}</div>
            <div style={{marginTop:8,color: "var(--muted)"}}>{e.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

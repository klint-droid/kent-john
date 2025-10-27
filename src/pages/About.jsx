import React from "react";

/**
 * About section (id="about")
 * Replace the text to reflect your own profile.
 */

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <h2>About Me</h2>
        <p>Quick summary of who I am and what I bring.</p>
      </div>

      <div className="section-card">
        <p style={{color:"var(--muted)"}}>
          I am an Associate in Computer Technology (Software Development) graduate and an aspiring web developer.
          I enjoy converting ideas into functional websites and simple applications. My background includes data
          encoding, organizing digital files, and developing small-scale projects using HTML, CSS, JavaScript, and C.
          I am hardworking, eager to learn, and enjoy collaborating with teams to solve real problems.
        </p>
      </div>
    </section>
  );
}

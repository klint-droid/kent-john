import React from "react";
import { useState, useEffect } from "react";

/**
 * Hero / Home section (id="home")
 * Displays profile, tagline, and key skills.
 */

export default function Hero() {
      const text = "Kent John Navarro";
      const [displayedText, setDisplayedText] = useState("");
      const [index, setIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
        const speed = isDeleting ? 100 : 150;
  
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index));
  
          if(!isDeleting&& index < text.length){
            setIndex(index + 1);
          } else if(isDeleting && index > 0){
            setIndex(index - 1)
          } else if(index === text.length){
            setTimeout(() => setIsDeleting(true), 1000);
          } else if(index === 0 && isDeleting){
            setIsDeleting(false);
          }
        }, speed);
  
        return () => clearTimeout(timeout);
      }, [index, isDeleting]);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* ===== Left Profile Card ===== */}
        <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="avatar">
            {/* ✅ Replaced with your Google Drive image link */}
            <img
              src="./public/MyPic.png"
              alt="Kent John Navarro"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/140";
              }}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #35d0ff",
              }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#e8fbff" }}>{displayedText}</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Web Developer</div>
            <div style={{ marginTop: 12, color: "#dff7ff", maxWidth: 260, lineHeight: 1.35 }}>
              Turning ideas into seamless digital experiences — passionate about building fast, elegant, and user-focused websites.
            </div>

            <div className="actions" style={{ marginTop: 20 }}>
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hire me
              </button>
              <a
                className="btn btn-outline"
                href="#certificates"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("certificates")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View certificates
              </a>
            </div>
          </div>
        </div>

        {/* ===== Right Info Card ===== */}
        <div className="card section-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>Profile</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>
                Aspiring web developer skilled in HTML, CSS, JavaScript, and C. Experienced with
                basic web apps, data encoding, and collaborative school projects.
              </p>
            </div>
            <div style={{ textAlign: "right", color: "var(--muted)" }}>
              <div style={{ fontWeight: 700 }}>Cebu City, Philippines</div>
              <div style={{ marginTop: 6 }}>📞 09602071099</div>
              <div>✉️ kentjohn.navarro.24@usjr.edu.ph</div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["HTML", "CSS", "JavaScript", "C Programming", "Canva", "Excel", "React", "Node.js", "PHP"].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: "rgba(53,208,255,0.06)",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

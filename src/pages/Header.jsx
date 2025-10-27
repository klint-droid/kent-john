import React, { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const onScroll = () => {
      const scrollPos = window.scrollY + 120; // offset
      let cur = "home";
      for (const s of sections) {
        if (s.offsetTop <= scrollPos) cur = s.id;
      }
      setActive(cur);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }; 

   return (
    <>
      <header className="header" role="banner">
        <div className="logo">Portfolio</div>

        <nav className="nav" aria-label="Primary">
          <ul>
            <li>
              <button
                onClick={() => scrollTo("home")}
                className={active === "home" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("about")}
                className={active === "about" ? "active" : ""}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("services")}
                className={active === "services" ? "active" : ""}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("education")}
                className={active === "education" ? "active" : ""}
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("experience")}
                className={active === "experience" ? "active" : ""}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("certificates")}
                className={active === "certificates" ? "active" : ""}
              >
                Certificates
              </button>
            </li>

            {/* ✅ Projects now scrolls smoothly instead of navigating */}
            <li>
              <button
                onClick={() => scrollTo("projects")}
                className={active === "projects" ? "active" : ""}
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("contact")}
                className={active === "contact" ? "active" : ""}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="cta" onClick={() => scrollTo("contact")}>
            Let's talk
          </button>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span className="line" style={{ background: "#cfeefc" }} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div className="mobile-menu" style={{ display: open ? "block" : "none" }}>
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("services")}>Services</button>
        <button onClick={() => scrollTo("education")}>Education</button>
        <button onClick={() => scrollTo("experience")}>Experience</button>
        <button onClick={() => scrollTo("certificates")}>Certificates</button>

        {/* ✅ Projects now scrolls instead of opening a new page */}
        <button onClick={() => scrollTo("projects")}>Projects</button>

        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </>
   );
}

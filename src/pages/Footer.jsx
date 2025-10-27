import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Kent John Navarro</div>
      <div style={{marginTop:6,color:"var(--muted)"}}>Built with care • Available for internships & junior dev roles</div>
    </footer>
  );
}

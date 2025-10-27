import React from "react";

/**
 * Certificates (id="certificates")
 *
 * How to use Google Drive images:
 * 1. Upload your certificate image to Google Drive.
 * 2. Right-click → Share → Get link → change to "Anyone with the link" (Viewer).
 * 3. From the share URL:
 *    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *    COPY the FILE_ID (between /d/ and /view).
 * 4. Use a viewer URL for thumbnails:
 *    https://drive.google.com/uc?export=view&id=FILE_ID
 * 5. Use the original file link for "View Full":
 *    https://drive.google.com/file/d/FILE_ID/view
 *
 * Replace the example IDs below with your actual FILE_IDs.
 */

export default function Certificates() {
  // Replace 'FILE_ID_1' / 'FILE_ID_2' with your Google Drive file IDs
  const certs = [
    {
      title: "Youth Empowerment Session",
      img: "YouthEmpowerment.jpg",
      link: "https://drive.google.com/file/d/1S2uXs8Ac6QZiwFQLF5No6x2k6lXXnYcu/view?usp=sharing"
    },
    {
      title: "Cybersecurity Seminar",
      img: "Kent John Navarro.JPG",
      link: "https://drive.google.com/file/d/1F7OH2tV8HfoFWn70qf8OBn8wx2c2zu3k/view?usp=sharing"
    }
    // add more certificates as needed
  ];

  return (
    <section id="certificates">
      <div className="section-title">
        <h2>Certificates</h2>
        <p>Certified courses and seminar participations</p>
      </div>

      <div style={{marginTop:12}} className="certs-grid">
        {certs.map((c, i) => (
          <div key={i} className="section-card">
            <div className="cert-thumb">
              <a href={c.link} target="_blank" rel="noreferrer" title={`Open ${c.title}`}>
                <img src={c.img} alt={c.title} onError={(e)=>{e.target.src='https://via.placeholder.com/320x200?text=Certificate'}} />
              </a>
            </div>
            <h4 style={{marginTop:10,marginBottom:6}}>{c.title}</h4>
            <a href={c.link} target="_blank" rel="noreferrer" style={{color:"var(--accent)",fontWeight:600}}>View Full</a>
          </div>
        ))}
      </div>
    </section>
  );
}

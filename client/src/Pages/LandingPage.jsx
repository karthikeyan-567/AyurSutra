import { useEffect } from "react";
import "../styles/LandingPage.css";
import { NavLink } from "react-router-dom"; 
export default function LandingPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => observer.observe(i));
  }, []);

  return (
    <div className="landing">

      {/* HERO */}
      <section className="hero fade">
        <div className="hero-text">
          <span className="badge">AI Powered Ayurveda</span>
          <h1>
            AVARTANA <br /> CARE
          </h1>
          <p className="hero-sub">
            Bridging ancient Ayurvedic wisdom with modern AI-driven care,
            transforming fragmented therapy centres into intelligent,
            scalable healing ecosystems.
          </p>
          <button className="cta-btn">Explore Therapies</button>
          <NavLink to="/register">
          <button className="cta-outline">Get Started</button></NavLink>
        </div>

        <img src="/therapy_1.png" className="hero-image" />
      </section>

      {/* TRUST STRIP */}
      <section className="trust fade">
        <div>✔ 100+ Clinics Connected</div>
        <div>✔ Licensed Practitioners</div>
        <div>✔ AI Guided Therapies</div>
        <div>✔ Patient Progress Tracking</div>
      </section>

      {/* THERAPIES */}
      <Therapy
        img="/shirodhara_1.png"
        title="Shirodhara"
        desc="A deeply relaxing therapy where warm medicated oil flows continuously over the forehead, calming the nervous system."
        benefits={[
          "Relieves anxiety & insomnia",
          "Improves mental clarity",
          "Balances Vata & Pitta"
        ]}
      />

      <Therapy
        img="/panchakarma_1.png"
        title="Panchakarma Detox"
        reverse
        desc="A powerful detoxification process that removes deeply accumulated toxins and restores metabolic balance."
        benefits={[
          "Cleanses internal systems",
          "Improves digestion & immunity",
          "Prevents chronic illness"
        ]}
      />

      <Therapy
        img="/therapy_2.png"
        title="Abhyanga"
        desc="A full-body herbal oil massage that nourishes tissues, boosts circulation, and rejuvenates the body."
        benefits={[
          "Improves skin health",
          "Relieves muscle stiffness",
          "Delays ageing naturally"
        ]}
      />

      <Therapy
        img="/shirodhara_2.png"
        title="Nasya Therapy"
        reverse
        desc="A nasal therapy that clears sinus pathways and improves brain and respiratory function."
        benefits={[
          "Treats sinus & migraine",
          "Enhances breathing",
          "Boosts neurological health"
        ]}
      />

      <Therapy
        img="/therapy_1.png"
        title="Mind–Body Therapy"
        desc="An integrative approach combining breathing, meditation, and alignment to restore emotional balance."
        benefits={[
          "Reduces stress",
          "Improves focus",
          "Balances lifestyle disorders"
        ]}
      />

      {/* WHY AVARTANA */}
      <section className="why fade">
        <h2>Why AVARTANA CARE?</h2>
        <div className="why-grid">
          <div>
            <h4>Unified Platform</h4>
            <p>All clinics, doctors, therapies and patients connected.</p>
          </div>
          <div>
            <h4>AI Intelligence</h4>
            <p>Smart recommendations and therapy tracking.</p>
          </div>
          <div>
            <h4>Patient Trust</h4>
            <p>Clear guidance, reports and continuity of care.</p>
          </div>
          <div>
            <h4>Scalable Care</h4>
            <p>Built for modern healthcare growth.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta fade">
        <h2>Experience Intelligent Healing</h2>
        <p>
          Join AVARTANA CARE and transform how Ayurveda is practiced,
          experienced and scaled.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>

      <footer className="footer">
        © 2026 AVARTANA CARE · Intelligent Ayurvedic Ecosystem
      </footer>
    </div>
  );
}

/* THERAPY BLOCK */
function Therapy({ img, title, desc, benefits, reverse }) {
  return (
    <section className={`therapy fade ${reverse ? "reverse" : ""}`}>
      <img src={img} />
      <div className="therapy-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <ul>
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

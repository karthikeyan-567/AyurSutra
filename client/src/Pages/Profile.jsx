import { useState } from "react";
import PatientSideBar from "../components/PatientSideBar";
import PatientNavBar from "../components/PatientNavBar";
import "../styles/Profile.css";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Karthi J",
    patientId: "PT-2024-021",
    age: 21,
    constitution: "Vata-Pitta",
    email: "karthi@email.com",
    phone: "+91 98765 43210",
    practitioner: "Dr. Mukil S",
    license: "AYU-TN-245678",
    council: "Central Council of Indian Medicine (CCIM)",
    therapy: "Abhyanga Therapy",
    treatmentStart: "Nov 20, 2024",
    blood: "O+",
    emergency: "Mukil Kumar (+91 98765 12345)"
  });

  /* FEEDBACK STATES */
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="patient-dashboard">
      <PatientSideBar />

      <div className="patient-main">
        <PatientNavBar />

        <div className="profile-wrapper">
          <h2 className="page-title">Patient Profile</h2>
          <p className="page-sub">Your personal and medical information</p>

          {/* PROFILE CARD */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">KJ</div>

              <div className="profile-basic">
                <h3>{profile.name}</h3>
                <p className="patient-id">
                  Patient ID: {profile.patientId}
                </p>

                <button
                  className="btn-outline"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? "Save Profile" : "Edit Profile"}
                </button>
              </div>
            </div>

            <div className="profile-grid">
              {/* PERSONAL INFO */}
              <div>
                <h4 className="section-title">Personal Information</h4>

                <ProfileField label="Age" name="age" value={profile.age}
                  editMode={editMode} onChange={handleChange} />

                <ProfileField label="Constitution" name="constitution"
                  value={profile.constitution}
                  editMode={editMode} onChange={handleChange} />

                <ProfileField label="Email" name="email"
                  value={profile.email}
                  editMode={editMode} onChange={handleChange} />

                <ProfileField label="Phone" name="phone"
                  value={profile.phone}
                  editMode={editMode} onChange={handleChange} />
              </div>

              {/* MEDICAL INFO */}
              <div>
                <h4 className="section-title">Medical Information</h4>

                <ReadOnlyField label="Practitioner" value={profile.practitioner} />
                <ReadOnlyField label="License No" value={profile.license} />
                <ReadOnlyField label="Medical Council" value={profile.council} />
                <ReadOnlyField label="Therapy" value={profile.therapy} />
                <ReadOnlyField label="Blood Type" value={profile.blood} />
                <ReadOnlyField label="Emergency Contact" value={profile.emergency} />
              </div>
            </div>
          </div>

          {/* THERAPY FEEDBACK */}
          <div className="feedback-card">
            <div className="feedback-notification">
              🔔 Feedback for your today’s therapy
            </div>

            <div className="therapy-summary">
              <div>
                <span className="label">Therapy</span>
                <p>{profile.therapy}</p>
              </div>

              <div>
                <span className="label">Practitioner</span>
                <p>{profile.practitioner}</p>
              </div>

              <div>
                <span className="label">License</span>
                <p>{profile.license}</p>
              </div>

              <div>
                <span className="label">Status</span>
                <p className="completed">Completed</p>
              </div>
            </div>

            <h4 className="feedback-title">Rate your therapy experience</h4>

            <div className="rating-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "active" : ""}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea
              className="feedback-input"
              placeholder="Write your experience about the therapy and practitioner..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button
              className="feedback-btn"
              disabled={!rating || !feedback}
              onClick={() => setSubmitted(true)}
            >
              Submit Feedback
            </button>

            {submitted && (
              <p className="feedback-success">
                ✔ Feedback securely sent to the practitioner
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* SUB COMPONENTS */

function ProfileField({ label, name, value, editMode, onChange }) {
  return (
    <div className="field-row">
      <span>{label}</span>
      {editMode ? (
        <input name={name} value={value} onChange={onChange} />
      ) : (
        <strong>{value}</strong>
      )}
    </div>
  );
}

function ReadOnlyField({ label, value }) {
  return (
    <div className="field-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

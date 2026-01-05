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
    treatmentStart: "Nov 20, 2024",
    blood: "O+",
    emergency: "Mukil Kumar (+91 98765 12345)"
  });

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

          <div className="profile-card">
            {/* HEADER */}
            <div className="profile-header">
              <div className="profile-left">
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
            </div>

            {/* CONTENT */}
            <div className="profile-grid">
              {/* PERSONAL INFO */}
              <div>
                <h4 className="section-title">Personal Information</h4>

                <ProfileField
                  label="Age"
                  name="age"
                  value={profile.age}
                  editMode={editMode}
                  onChange={handleChange}
                />

                <ProfileField
                  label="Constitution"
                  name="constitution"
                  value={profile.constitution}
                  editMode={editMode}
                  onChange={handleChange}
                />

                <ProfileField
                  label="Email"
                  name="email"
                  value={profile.email}
                  editMode={editMode}
                  onChange={handleChange}
                />

                <ProfileField
                  label="Phone"
                  name="phone"
                  value={profile.phone}
                  editMode={editMode}
                  onChange={handleChange}
                />
              </div>

              {/* MEDICAL INFO */}
              <div>
                <h4 className="section-title">Medical Information</h4>

                <ReadOnlyField
                  label="Primary Practitioner"
                  value={profile.practitioner}
                />

                <ReadOnlyField
                  label="Treatment Start"
                  value={profile.treatmentStart}
                />

                <ReadOnlyField
                  label="Blood Type"
                  value={profile.blood}
                />

                <ReadOnlyField
                  label="Emergency Contact"
                  value={profile.emergency}
                />
              </div>
            </div>
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
        <input
          name={name}
          value={value}
          onChange={onChange}
        />
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

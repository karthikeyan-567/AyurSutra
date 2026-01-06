import { useState } from "react";
import DoctorSidebar from "../Components/Sidebar";
import DoctorNavbar from "../Components/Navbar";

export default function DoctorFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [patient, setPatient] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitFeedback = () => {
    if (!patient.trim() || !comment.trim()) return;
    const newFB = {
      id: Date.now(),
      patient,
      rating,
      comment,
      date: new Date().toLocaleDateString()
    };
    setFeedbacks([newFB, ...feedbacks]);
    setPatient("");
    setRating(5);
    setComment("");
  };

  return (
    <div className="min-h-screen ]">
      <DoctorSidebar />
      <DoctorNavbar doctorName="Karthikeyan J" />

      <main className="ml-64 p-6 pt-20">
        <h1 className="text-3xl font-semibold text-green-700 mb-6">Doctor Feedback</h1>

        {/* Form Card */}
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm mb-5">
          <input
            type="text"
            placeholder="Patient name..."
            className="w-full p-3 rounded-xl border border-green-200 focus:outline-green-400 text-sm mb-3"
            value={patient}
            onChange={e => setPatient(e.target.value)}
          />

          {/* Rating */}
          <label className="text-sm text-gray-600 font-medium">Rating: {rating}/5</label>
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            onChange={e => setRating(e.target.value)}
            className="w-full mb-3 accent-green-600"
          />

          <textarea
            placeholder="Enter feedback about therapy or patient progress..."
            className="w-full p-3 rounded-xl border border-green-200 focus:outline-green-400 text-sm"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />

          <button
            onClick={submitFeedback}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-700"
          >
            Submit Feedback
          </button>
        </div>

        {/* Feedback List */}
        <div className="grid gap-3">
          {feedbacks.length === 0 && (
            <p className="text-center text-gray-500 mt-10 text-sm">No feedback submitted yet</p>
          )}

          {feedbacks.map(fb => (
            <div
              key={fb.id}
              className="bg-white p-4 rounded-xl border border-green-200 shadow-sm text-sm text-gray-700"
            >
              <div className="flex justify-between items-center mb-1">
                <b className="text-green-700">{fb.patient}</b>
                <span className="text-xs text-gray-500">{fb.date}</span>
              </div>
              <p className="text-xs text-yellow-600 font-semibold mb-2">⭐ {fb.rating}/5</p>
              <p>{fb.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

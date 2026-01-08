import { useState } from "react";
import "../styles/Questionnaire.css";

const questions = [
  {
    id: 1,
    question: "Do you often feel stressed or anxious?",
    options: ["Rarely", "Sometimes", "Often"]
  },
  {
    id: 2,
    question: "How is your sleep quality?",
    options: ["Good", "Disturbed", "Very Poor"]
  },
  {
    id: 3,
    question: "Do you experience frequent body pain or stiffness?",
    options: ["No", "Occasionally", "Regularly"]
  },
  {
    id: 4,
    question: "How is your digestion?",
    options: ["Normal", "Irregular", "Very Poor"]
  },
  {
    id: 5,
    question: "Do you feel tired even after resting?",
    options: ["No", "Sometimes", "Yes"]
  },
  {
    id: 6,
    question: "Do you experience headaches or migraines?",
    options: ["Never", "Occasionally", "Frequently"]
  },
  {
    id: 7,
    question: "How would you describe your overall energy level?",
    options: ["High", "Moderate", "Low"]
  }
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const calculateRecommendation = () => {
    const values = Object.values(answers);

    if (
      values.includes("Often") ||
      values.includes("Very Poor") ||
      values.includes("Frequently")
    ) {
      return {
        therapy: "Shirodhara Therapy",
        description:
          "Highly effective for stress, anxiety, insomnia and nervous system relaxation."
      };
    }

    if (
      values.includes("Regularly") ||
      values.includes("Low") ||
      values.includes("Yes")
    ) {
      return {
        therapy: "Abhyanga Therapy",
        description:
          "Recommended for body pain, fatigue, stiffness and improved circulation."
      };
    }

    return {
      therapy: "Panchakarma Detox",
      description:
        "A complete detoxification therapy to balance digestion, immunity and metabolism."
    };
  };

  const submitAssessment = () => {
    const result = calculateRecommendation();
    setRecommendation(result);

    // Optional: store for UI usage
    localStorage.setItem("recommendedTherapy", result.therapy);

    setShowResult(true);
  };

  const goToLogin = () => {
    window.location.href = "/patient-dashboard";
  };

  return (
    <div className="questionnaire-page">
      <div className="questionnaire-card">
        {!showResult ? (
          <>
            <h2>Health Assessment</h2>
            <p className="subtitle">
              Answer these questions to receive a personalized therapy recommendation
            </p>

            {questions.map((q) => (
              <div key={q.id} className="question-block">
                <h4>{q.id}. {q.question}</h4>

                <div className="options">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      className={
                        answers[q.id] === opt
                          ? "option-btn active"
                          : "option-btn"
                      }
                      onClick={() => handleSelect(q.id, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="submit-btn"
              disabled={Object.keys(answers).length !== 7}
              onClick={submitAssessment}
            >
              Get Recommendation
            </button>
          </>
        ) : (
          <>
            <h2>Recommended Therapy</h2>

            <div className="result-box">
              <h3>{recommendation.therapy}</h3>
              <p>{recommendation.description}</p>
            </div>

            <button className="submit-btn" onClick={goToLogin}>
              Continue to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

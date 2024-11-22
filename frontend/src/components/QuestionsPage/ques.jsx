import { ChevronLeft, ChevronRight, Check, Loader } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";
const UserQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState({
    experience: "",
    interests: [],
    goals: "",
    availability: "",
    background: "",
  });
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

  // Update body class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-white", "text-gray-900");
    } else {
      document.body.classList.add("bg-white", "text-gray-900");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [darkMode]);

  const questions = [
    {
      id: "experience",
      title: "Development Experience",
      type: "single",
      question: "1. What is your current level of education?",
      options: [
        "10th grade",
        "12th grade",
        "Undergraduate (Bachelor’s)",
        "Postgraduate (Master’s, Doctorate)",
      ],
    },
    {
      id: "major",
      title: "Field of Study",
      type: "single",
      question: "2. What is your major or field of study?",
      options: [
        "Science (Physics, Chemistry, Biology, etc.)",
        "Engineering (Computer Science, Mechanical, Electrical, etc.)",
        "Business (Finance, Management, etc.)",
        "Arts (Literature, History, Philosophy, etc.)",
        "Social Sciences (Psychology, Sociology, Anthropology, etc.)",
        "Medical (Medicine, Nursing, Public Health, etc.)",
        "Law",
        "Education",
        "Other",
        "Not Applicable",
      ],
    },
    {
      id: "strengths",
      title: "Strengths and Skills",
      type: "multiple",
      question: "3. What are your strengths in terms of skills?",
      options: [
        "Problem-solving",
        "Creativity",
        "Communication (Verbal and Written)",
        "Critical Thinking",
        "Technical/Analytical skills",
        "Leadership",
        "Time management",
        "Teamwork / Collaboration",
        "Organizational skills",
        "Emotional Intelligence",
        "Other",
      ],
    },
    {
      id: "hobbies",
      title: "Hobbies and Interests",
      type: "multiple",
      question: "4. What do you enjoy doing in your free time?",
      options: [
        "Reading",
        "Playing sports",
        "Gaming",
        "Volunteering / Social work",
        "Traveling",
        "Watching movies / TV shows",
        "Drawing / Painting / Art",
        "Playing music / Learning an instrument",
        "Cooking / Baking",
        "Socializing / Hanging out with friends",
        "Other",
      ],
    },
    {
      id: "workPreference",
      title: "Work Style Preference",
      type: "single",
      question: "5. Do you prefer working independently or in teams?",
      options: ["Independent", "Team-based", "Both, depending on the task"],
    },
    {
      id: "techComfort",
      title: "Comfort with Technology",
      type: "single",
      question:
        "6. How comfortable are you with technology and digital tools?",
      options: [
        "Very comfortable",
        "Somewhat comfortable",
        "Not comfortable at all",
      ],
    },
    {
      id: "industries",
      title: "Industry Interests",
      type: "multiple",
      question: "7. What industries are you most interested in working in?",
      options: [
        "Healthcare (e.g., Medicine, Nursing, Public Health)",
        "Technology (e.g., Software, IT, AI)",
        "Engineering (e.g., Mechanical, Civil, Electrical)",
        "Business / Finance (e.g., Accounting, Marketing, Banking)",
        "Education / Teaching",
        "Arts and Entertainment (e.g., Film, Music, Fine Arts)",
        "Design (e.g., Graphic Design, Fashion, Architecture)",
        "Social Services (e.g., Psychology, Social Work, Counseling)",
        "Law and Legal (e.g., Lawyer, Legal Advisor, Paralegal)",
        "Environmental / Sustainability",
        "Government / Public Service",
        "Manufacturing / Production",
        "Research and Development",
      ],
    },
    {
      id: "Motivation",
      title: "Career Motivation",
      type: "single",
      question:
        "What motivates you to succeed in your career?",
      options: [
        "Financial stability",
        "Passion for the work",
        "Helping others",
        "Personal desires",
        "Career advancement and promotions",
        "Work-life balance",
        "Gaining new skills and knowledge",
        "Recognition and accolades",
        "Making an impact on society",
      ],
    },
  ];

  const handleSingleChoice = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleMultipleChoice = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId]?.includes(value)
        ? prev[questionId].filter((item) => item !== value)
        : [...(prev[questionId] || []), value],
    }));
  };
  const navigate = useNavigate();
  const handleTextInput = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCurrentStep(questions.length);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;
  const progress = ((currentStep + 1) / questions.length) * 100;

  // Classes for dark and light mode
  const buttonClasses = darkMode
    ? "bg-blue-500 hover:bg-blue-600 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";
  const borderClasses = darkMode
    ? "border-gray-700 hover:bg-gray-800"
    : "border-gray-300 hover:bg-gray-50";

  if (currentStep === questions.length) {
    return (
      <div
        className={`min-h-screen w-full flex flex-col items-center justify-center p-6`}
      >
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <div
              className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Check className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">All Done!</h1>
            <p className="text-gray-600">
              Thank you for completing the questionnaire.
            </p>
          </div>
          <button
            onClick={() => {
              navigate('/dashboard')
            }}
            className={`${buttonClasses} w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            Go to recommendations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-6`}
    >
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="h-1 w-full bg-gray-200 rounded-full mb-4">
            <div
              className="h-1 bg-blue-600 rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
          <h2 className="text-sm font-medium text-gray-600 mb-1">
            Step {currentStep + 1} of {questions.length}
          </h2>
          <h1 className="text-2xl font-bold mb-2">{currentQuestion.title}</h1>
          <p className="text-gray-600">{currentQuestion.question}</p>
        </div>

        <div className="space-y-4 mb-8">
          {currentQuestion.type === "single" && (
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    handleSingleChoice(currentQuestion.id, option)
                  }
                  className={`w-full p-3 text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${answers[currentQuestion.id] === option ? "border-blue-600 bg-blue-50" : `${borderClasses}`}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === "multiple" && (
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    handleMultipleChoice(currentQuestion.id, option)
                  }
                  className={`w-full p-3 text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${answers[currentQuestion.id]?.includes(option) ? "border-blue-600 bg-blue-50" : `${borderClasses}`}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === "text" && (
            <textarea
              value={answers[currentQuestion.id] || ""}
              onChange={(e) =>
                handleTextInput(currentQuestion.id, e.target.value)
              }
              placeholder={currentQuestion.placeholder}
              rows={4}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${borderClasses}`}
            />
          )}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
            className={`flex-1 py-2 px-4 ${borderClasses} rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </button>

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`flex-1 py-2 px-4 ${buttonClasses} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                "Complete"
              )}
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className={`flex-1 py-2 px-4 ${buttonClasses} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2`}
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Toggle Dark Mode Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-lg"
      >
        Change Theme
      </button>
    </div>
  );
};

export default UserQuestions;

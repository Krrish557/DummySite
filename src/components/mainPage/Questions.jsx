import { useState } from "react";

function Questions() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    "Is this Labler Company real?",
    "Who Operates this site?",
    "What's your Github?",
    "What is this website for?",
    "Link for the Repositery?",
    "Is there more to this site than this page?",
  ];
  const answer = [
    "No, it is a dummy site for my portfolio.",
    "Krrish Kataria.",
    "https://github.com/krrish557",
    "To display my front end capabilities.",
    "https://github.com/Krrish557/DummySite1",
    "Yes, there is a shopping page.",
  ];
  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div id="questions">
      {questions.map((question, index) => (
        <div key={index} className="questionContainer">
          <h2
            className={`indiQues ${
              selectedQuestion === index ? "selected" : ""
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            {question}
          </h2>
          {selectedQuestion === index && (
            <p className="answer">{answer[index]}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Questions;

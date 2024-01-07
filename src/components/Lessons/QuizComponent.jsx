import React, { useState } from "react";
import "./QuizComponent.css";

function QuizComponent({ quiz }) {
  var jsonString = quiz.replace(/\`\`\`json|\`\`\`/g, "").trim();
  var questionsArray = JSON.parse(JSON.parse(jsonString));

  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleResponse = (questionIndex, response) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: response,
    });
  };

  const evaluateQuiz = () => {
    let score = 0;
    questionsArray.forEach((question, index) => {
      if (selectedOptions[index] === question.correct_answer) {
        score += 1;
      }
    });
    alert(`Your score is ${score}/${questionsArray.length}`);
    setQuizCompleted(true);
  };

  const getButtonStyle = (questionIndex, option) => {
    const isSelected = selectedOptions[questionIndex] === option;
    const isCorrect = questionsArray[questionIndex].correct_answer === option;

    if (quizCompleted) {
      if (isCorrect) {
        return "quizBtn choiceBtn correct"; 
      } else if (isSelected) {
        return "quizBtn choiceBtn selected";
      }
    } else {
      return isSelected ? "quizBtn choiceBtn selected" : "quizBtn choiceBtn";
    }

    return "quizBtn choiceBtn"; 
  };

  return (
    <div>
      <p className="questionIndex" style={{ marginTop: "0px" }}>
        Quiz Time!
      </p>

      {questionsArray.map((question, index) => (
        <div key={index}>
          <p className="questionIndex">Question {index + 1}!</p>
          {question.type === "True/False" && (
            <div>
              <p>{question.question}</p>
              <div className="quizBtnContainer">
                <button
                  className={getButtonStyle(index, "True")}
                  onClick={() => handleResponse(index, "True")}
                >
                  <p>TRUE</p>
                </button>
                <button
                  className={getButtonStyle(index, "False")}
                  onClick={() => handleResponse(index, "False")}
                >
                  <p>FALSE</p>
                </button>
              </div>
            </div>
          )}
          {question.type === "Multiple Choice" && (
            <div>
              <p>{question.question}</p>
              <div className="quizBtnContainer choiceBtns">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={getButtonStyle(index, option)}
                    onClick={() => handleResponse(index, option)}
                  >
                    <p>{option}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {!quizCompleted && (
        <div className="quizBtnContainer choiceBtns">
          <button className="quizBtn finishBtn" onClick={evaluateQuiz}>
            <p>FINISH QUIZ!</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizComponent;

import { Questions } from "../helpers/QuestionsList";
import { QuizContext } from "../helpers/Context";
import React from "react";
import { useState, useContext } from "react";

function Quiz() {
  // add a state to keep track of scores
  const { score, setScore, setGameState } = useContext(QuizContext);
  // add a state to keep track of questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // add a state to keep track of options chosen
  const [optionChosen, setOptionChosen] = useState("");

  //handles clicked options to show indicator of which buttons been pressed
  const handleOptionClick = (option) => {
    setOptionChosen(option);
  };

  //next question logic
  const nextQuestion = () => {
    //if correct answer, score +1
    console.log("Score:", score); // Add a console log to check the score
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    //resets option chosen colour
    setOptionChosen("");
    //move forward to next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    //checks if last question is answered correctly; bc react interaction with score is 1 state delayed
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    //sets state from quiz -> endscreen
    setGameState("endScreen");
  };

  //buttons for quiz
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button
          className={optionChosen === "A" ? "selected" : ""}
          onClick={() => handleOptionClick("A")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={optionChosen === "B" ? "selected" : ""}
          onClick={() => handleOptionClick("B")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={optionChosen === "C" ? "selected" : ""}
          onClick={() => handleOptionClick("C")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={optionChosen === "D" ? "selected" : ""}
          onClick={() => handleOptionClick("D")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
}

//   return (
//     <div className="Quiz">
//       <h1>{Questions[currentQuestion].prompt}</h1>
//       <div className="options">
//         <button onClick={() => setOptionChosen("A")}>
//           {Questions[currentQuestion].optionA}
//         </button>
//         <button onClick={() => setOptionChosen("B")}>
//           {Questions[currentQuestion].optionB}
//         </button>
//         <button onClick={() => setOptionChosen("C")}>
//           {Questions[currentQuestion].optionC}
//         </button>
//         <button onClick={() => setOptionChosen("D")}>
//           {Questions[currentQuestion].optionD}
//         </button>
//       </div>

//       {/* if last question, will show finish quiz instead of next */}
//       {currentQuestion == Questions.length - 1 ? (
//         <button onClick={finishQuiz}> Finish Quiz </button>
//       ) : (
//         <button onClick={nextQuestion}> Next </button>
//       )}
//     </div>
//   );
// }

export default Quiz;

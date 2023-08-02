import React, { useContext } from "react";
import "../App.css";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionsList";

function EndScreen() {
  //keeps track of for final score, setscore and setgamestate also used to restart quiz
  const { score, setScore, setGameState } = useContext(QuizContext);

  //if restart quiz is clicked, resets score to 0 and moves to mainmenu
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1> Quiz Finished! </h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;

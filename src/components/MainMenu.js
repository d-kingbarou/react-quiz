import "../App.css";
import { QuizContext } from "../helpers/Context";
import React from "react";
import { useContext } from "react";
import Quiz from "./Quiz";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

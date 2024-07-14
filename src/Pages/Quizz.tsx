import { useEffect, useState } from "react";
import { useQuiz } from "../Context/QuizzContext";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Quizz = () => {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    setQuestions,
    setCurrentQuestionIndex,
    setUserAnswers,
  } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [userScore, setUserScore] = useState<number>(0);
  useEffect(() => {
    setQuestions([
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "What is the capital of japan",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        answer: "Tokyo",
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: [
          "Jane Austen",
          "Charles Dickens",
          "Mark Twain",
          "William Shakespeare",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: "Jupiter",
      },
    ]);
  }, [setQuestions]);

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);
    console.log(newAnswers);

    let updatedScore = userScore;
    // All of this is done because of the nature of how React States work
    // They are updated in an asynchrous way so we don't have the final value of the state
    if (questions[currentQuestionIndex].answer === selectedAnswer) {
      updatedScore += 1;
      setUserScore(updatedScore);
      console.log(
        `User score after question ${currentQuestionIndex + 1}: ${updatedScore}`
      );
    }

    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(0);
      localStorage.setItem("userScore", updatedScore.toString());
      setUserScore(0);
      navigate("/result");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };
  return (
    <>
      <div className="h-screen bg-quizzi-black text-black text-2xl flex justify-center items-center">
        <div className="w-1/2 p-8 bg-white rounded-2xl">
          <div className="flex justify-between">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <h2>{currentQuestionIndex + 1 + "/" + questions.length}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl variant="standard">
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={selectedAnswer}
                onChange={handleRadioChange}
              >
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  )
                )}
              </RadioGroup>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained">
                Next Question {"->"}
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quizz;

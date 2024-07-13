import { useEffect, useState } from "react";
import { useQuiz } from "../Context/QuizzContext";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const Quizz = () => {
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    setQuestions,
    setCurrentQuestionIndex,
    setUserAnswers,
  } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
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
    ]);
  }, [setQuestions]);

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const handleSubmit = () => {
    if (questions[currentQuestionIndex].answer == selectedAnswer) {
      alert("Correct !");
    } else {
      alert("Try Again");
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };
  return (
    <>
      <div className="h-screen bg-quizzi-black text-white text-2xl flex justify-center items-center">
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
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
              <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Check Answer
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quizz;

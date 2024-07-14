import { ReactNode, createContext, useContext, useState } from "react";
import { Question } from "../Data/Question";

// This is here all the stuff will be stored
// We will wrap our code in the App with the quizzProvider
// Basically the role of a context in react

interface QuizzContextType {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: string[];

  setQuestions: (questions: Question[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setUserAnswers: (answers: string[]) => void;
}

const QuizzContext = createContext<QuizzContextType | undefined>(undefined);

export const QuizzProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  return (
    <QuizzContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        userAnswers,
        setQuestions,
        setCurrentQuestionIndex,
        setUserAnswers,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizzContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

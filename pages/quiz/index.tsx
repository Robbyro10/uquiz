import { QuizLayout } from "@/components/layouts/QuizLayout";
import { Title } from "@/components/ui";
import { QuizContext } from "@/context";
import { quizData } from "@/data/quiz-data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import criminal from "../../public/criminal.png";

const index = () => {
  const questions = quizData;
  const [questionNumber, setQuestionNumber] = useState(0);
  const { getScore } = useContext(QuizContext);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleSelect = (value: number) => {
    setScore(score + value);
    getScore(score);
    setQuestionNumber(questionNumber + 1);
    if (questionNumber === questions.length - 1) {
      router.push("quiz/results");
    }
  };

  if (questionNumber === questions.length) return <></>;

  return (
    <QuizLayout
      title={questions[questionNumber].title}
      pageDescription={questions[questionNumber].title}
    >
      <>
        <h1 className="text-center text-sm my-2">
          Question {questionNumber + 1} of {questions.length}
        </h1>
        <Title body={questions[questionNumber].title} />

        <div className="flex justify-center">
          <div className="flex flex-col gap-3 mt-20 justify-center w-4/5 md:w-1/3">
            {questions[questionNumber].options.map((option) => (
              <button
                key={option.title}
                className="bg-pink-400 hover:bg-pink-300 rounded py-2 px-4 text-white transition-all ease-linear drop-shadow animate__animated animate__fadeIn"
                onClick={() => handleSelect(option.value)}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src={criminal}
            alt="cartoon criminal"
            height={230}
            className="opacity-40 grayscale "
          />
        </div>
      </>
    </QuizLayout>
  );
};

export default index;

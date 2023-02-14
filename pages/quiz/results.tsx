import { QuizLayout } from "@/components/layouts/QuizLayout";
import { Title } from "@/components/ui";
import { QuizContext } from "@/context";
import { calculateResult } from "@/utils/calculate-result";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

const ResultsPage = () => {
  const router = useRouter();
  const { score, name } = useContext(QuizContext);
  const result = calculateResult(score);

  return (
    <QuizLayout
      title={result.title}
      pageDescription="The results of your test arrived"
    >
      <div className="text-center">
        <h2>
          Congratulations <b>{name}</b>!! you will commit:
        </h2>
        <Title body={result.title} />
        <p>{result.desc}</p>
      </div>
      <div className="flex justify-center">
      <div className="flex flex-col mt-10">
        <Image
          src={result.img}
          alt={result.title}
          className="my-10 rounded drop-shadow"
        />
      <button
        className="bg-pink-400 hover:bg-pink-300 rounded py-4 px-4 font-bold text-white transition ease-linear drop-shadow "
        onClick={() => router.push("/")}
      >
        Retake Test
      </button>
      </div>

      </div>

    </QuizLayout>
  );
};

export default ResultsPage;

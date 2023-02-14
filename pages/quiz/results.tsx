import { QuizLayout } from "@/components/layouts/QuizLayout";
import { Title } from "@/components/ui";
import { QuizContext } from "@/context";
import { calculateResult } from "@/utils/calculate-result";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

const results = () => {
  const router = useRouter();
  const {score, name} = useContext(QuizContext)
  const result = calculateResult(score)

  return (
    <QuizLayout
      title={result.title}
      pageDescription="The results of your test arrived"
    >
      <div className="text-center">
      <h2>Congratulations <b>{name}</b>!! you will commit:</h2>
      <Title body={result.title} />
      <p>{result.desc}</p>

      </div>
      <Image src={result.img} alt={result.title} className="my-10 rounded drop-shadow"/>
      
      <button
        className=" bg-pink-400 hover:bg-pink-300 rounded py-2 px-4 text-white transition ease-linear drop-shadow "
        onClick={() => router.push("/")}
      >
        Retake Test
      </button>
    </QuizLayout>
  );
};

export default results;

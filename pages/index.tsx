import { QuizLayout } from "@/components/layouts/QuizLayout";
import { Title } from "@/components/ui";
import { QuizContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import criminal from "../public/criminal.png";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const { getName } = useContext(QuizContext);

  const handleSubmit = () => {
    if (name) {
      router.push("quiz");
      getName(name);
      return;
    }
    Swal.fire({
      title: "Oopsies!",
      text: "Please enter your name",
      icon: "error",
      confirmButtonColor: "rgb(244 114 182)",
    });
  };

  return (
    <QuizLayout
      title="Which will be your nest crime?"
      pageDescription="With this test
    you will determine your next crime"
    >
      <div className="flex justify-center">
        <div className="flex flex-col w-2/3">
          <Title body="Which will be your next crime?" />
          <h2 className="text-center mb-4 text-sm">
            Hey folk&apos;s Mr. Hedderich over here. I made this incredibly
            aesthetic quiz with love and passion. With this test you will
            determine your next crime <b>(100% CERTIFIED)</b>.{" "}
            <i>Results will not be saved or registered in any way.</i>
          </h2>
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-lg">Enter your name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded px-2 py-1 my-4"
        ></input>
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-pink-400 hover:bg-pink-300 font-bold text-white py-1 px-8 rounded text-lg transition ease-linear drop-shadow animate__animated animate__fadeIn"
        >
          Start
        </button>
      </div>
      <div className="flex justify-center mt-24">
        <Image
          src={criminal}
          priority
          alt="cartoon criminal"
          className="opacity-40 grayscale"
          width={300}
        />
      </div>
    </QuizLayout>
  );
}

import { useRef, useState } from "react";
import { QUIZ_QUESTION } from "../../constants/QUIZ_QUESTION";
import { CSSTransition } from "react-transition-group";
import "./Quiz.css";
import { Button } from "../ui/button";
import JSConfetti from "js-confetti";


const jsConfetti = new JSConfetti();

function randomizeQuizIndex() {
  return Math.floor(Math.random() * QUIZ_QUESTION.length);
}

function Quiz() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(
    randomizeQuizIndex()
  );
  const quizQuestion = QUIZ_QUESTION[quizQuestionIndex];
  const coloredImgRef = useRef(null);
  const misteryImgRef = useRef(null);

  function answerHandler(index, answer) {
    setIsAnswered(true);
    if (index === answer) {
      setIsRightAnswer(true);
      jsConfetti.addConfetti({
        emojis: ['🦄'],
        emojiSize: 100,
      });
      return;
    }
    jsConfetti.addConfetti({
      emojis: ['NUDROS'],
      emojiSize: 100,
    });
  }

  function resetHandler() {
    setIsAnswered(false);
    setIsRightAnswer(false);
    let currentRandomIndex = quizQuestionIndex;
    while (currentRandomIndex === quizQuestionIndex) {
      currentRandomIndex = randomizeQuizIndex();
    }
    setQuizQuestionIndex(currentRandomIndex);
  }

  return (
    <div className="container py-16 flex flex-col gap-12">
      <div className="flex gap-10">
        {/* img */}

        <div className="relative w-full h-[300px]">
          <CSSTransition
            nodeRef={coloredImgRef}
            in={isAnswered}
            timeout={{ enter: 3000, exit: 0 }}
            classNames="img-quiz"
            unmountOnExit
          >
            <img
              ref={coloredImgRef}
              className="absolute w-full h-full"
              src={quizQuestion.coloredImgUrl}
              alt={quizQuestion.options[quizQuestion.answer]}
            />
          </CSSTransition>

          <CSSTransition
            nodeRef={misteryImgRef}
            in={!isAnswered}
            timeout={3000}
            classNames="img-quiz"
            unmountOnExit
          >
            <img
              ref={misteryImgRef}
              className="absolute w-full h-full"
              src={quizQuestion.misteryImgUrl}
              alt="silhoute"
            />
          </CSSTransition>
        </div>

        {/* text */}
        <div className="text-2xl flex flex-col justify-around w-full">
          <p className="text-4xl">Siapakah dia?</p>
          <p>Clue: {quizQuestion.clue}</p>
          <div className="flex gap-10">
            {quizQuestion.options.map((value, i) => (
              <Button
                disabled = {isAnswered}
                size={"lg"}
                variant={"destructive"}
                onClick={() => answerHandler(i, quizQuestion.answer)}
                key={i}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {isAnswered && isRightAnswer && <p className="text-4xl text-[#051650]">Betul</p>}
        {isAnswered && !isRightAnswer && <p className="text-4xl text-red font-semibold">Salah</p>}

        {isAnswered && (
          <Button className="" onClick={resetHandler}>
            Main Lagi!
          </Button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

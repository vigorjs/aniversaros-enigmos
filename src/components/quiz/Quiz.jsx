import { useRef, useState } from "react";
import { QUIZ_QUESTION } from "../../constants/QUIZ_QUESTION";
import { CSSTransition } from "react-transition-group";
import "./Quiz.css";

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
    }
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
    <div className="container py-16 flex flex-col gap-5">
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
        <div className="text-xl flex flex-col justify-around w-full">
          <p>Siapa dia?</p>
          <p>Clue: {quizQuestion.clue}</p>
          <div className="flex gap-10">
            {quizQuestion.options.map((value, i) => (
              <button
                onClick={() => answerHandler(i, quizQuestion.answer)}
                key={i}
                className="border"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {isAnswered && isRightAnswer && <p>Betul</p>}
        {isAnswered && !isRightAnswer && <p>Salah</p>}

        {isAnswered && (
          <button className="border" onClick={resetHandler}>
            Main Lagi!
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

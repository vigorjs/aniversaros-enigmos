import { useState } from "react";
import { QUOTES } from "../../constants/QUOTES";
import Button from "../ui/Button";

function random() {
  return Math.floor(Math.random() * QUOTES.length);
}

function Quote() {
  const [randomIndex, setRandomIndex] = useState(random);
  const { author, imageUrl, quote } = QUOTES[randomIndex];

  function randomizeQuoteHandler() {
    let currentRandom = randomIndex;
    while (currentRandom === randomIndex) {
      currentRandom = random();
    }
    setRandomIndex(currentRandom);
  }

  return (
    <>
      <section className="bg-gray-light py-20">
        <div className="container flex flex-col items-center gap-7">
          {/* Quotes */}
          <div className="container flex items-center gap-3">
            <blockquote className="flex flex-col gap-2 px-52">
              <p className="text-lg">{quote}</p>
              <footer className="text-base">&mdash; {author}</footer>
            </blockquote>

            <div className="w-[300px] h-[200px]">
              <img
                src={imageUrl}
                alt={author}
                className="inset-0 min-w-[300px] w-full h-full"
              />
            </div>
          </div>

          {/* actions */}
          <div>
            <Button onClick={randomizeQuoteHandler} variant="outline-red">
              Generate Random Quotes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;

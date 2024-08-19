import { useState } from "react";
import { QUOTES } from "../../constants/QUOTES";
import JSConfetti from "js-confetti";
import { Button } from "../ui/button";

function random() {
  return Math.floor(Math.random() * QUOTES.length);
}

function Quote() {
  const [randomIndex, setRandomIndex] = useState(random);
  const jsConfetti = new JSConfetti();

  const { author, imageUrl, quote } = QUOTES[randomIndex];

  function randomizeQuoteHandler() {
    let currentRandom = randomIndex;
    while (currentRandom === randomIndex) {
      currentRandom = random();
    }
    setRandomIndex(currentRandom);

    // Trigger confetti when the button is clicked
    jsConfetti.addConfetti();
  }

  return (
    <>
      <section className="bg-[#00072D] py-20">
        <div className="container flex flex-col items-center gap-7 bg-[#FFFFFF] p-5 rounded-2xl">
          {/* Quotes */}
          <div className="container flex items-center gap-20 justify-center">
            <blockquote className="flex flex-col gap-2">
              <p className="text-4xl">{quote}</p>
              <footer className="text-base">&mdash; {author}</footer>
            </blockquote>

            <div className="w-[400px] h-[300px]">
              <img
                src={imageUrl}
                alt={author}
                className="inset-0 min-w-[400px] w-full h-full"
              />
            </div>
          </div>

          {/* actions */}
          <div>
            <Button onClick={randomizeQuoteHandler} variant="destructive">
              Generate Random Quotes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;

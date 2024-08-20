function Hero() {
  return (
    <div className="h-screen relative" id="home">
      {/* Video */}
      <div className="h-screen w-full absolute top-0 left-0">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source
            src="https://res.cloudinary.com/leviis/video/upload/v1724050024/aniversasos/rbfmyzusppnkrendusuo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-black to-black opacity-60 flex flex-col justify-center">
        <div className="container mx-auto px-4 items-center justify-center">
          {/* <h1 className="text-red text-center text-8xl font-black font-display">79<sup>th</sup> {text}</h1> */}
          <h1 className="text-red text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-black font-display">
            Dirgahayu Indonesiaku,
          </h1>
          <h1 className="text-red text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-black font-display">
            Berjayalah Enigmaku
          </h1>
          <h1 className="text-white text-center text-2xl lg:text-3xl xl:text-4xl font-bold mt-5">
            Bersama menuju masa depan yang lebih baik
          </h1>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;

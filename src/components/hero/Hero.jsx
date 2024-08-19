function Hero() {
  const text = "Dirgahayu 79 Tahun indonesia merdeka";

  return (
    <div className="h-screen relative">
      {/* Video */}
      <div className="h-screen w-screen absolute top-0 left-0">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source
            src="https://res.cloudinary.com/leviis/video/upload/v1724050024/aniversasos/rbfmyzusppnkrendusuo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-black to-black opacity-50 flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-red-light text-4xl">{text}</h1>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;

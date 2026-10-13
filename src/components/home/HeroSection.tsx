type HeroProps = {
  heroData: {
    title: string;
    subtitle: string;
    description: string;
  };
  imageUrl: string;
};
export const Hero = ({ heroData, imageUrl }: HeroProps) => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={imageUrl}
        className="object-cover h-full w-full brightness-90"
        alt="hero"
      />
      <div className="absolute bottom-12 left-4 md:bottom-16 md:left-16">
        <h1 className="text-white font-serif text-5xl md:text-6xl">
          {heroData?.title}
        </h1>
        <p className="text-white md:text-xl mt-4">{heroData?.description}</p>
        <div className="flex flex-col md:flex-row gap-2 mt-6 mr-4">
          <button
            name="sign-up"
            className="bg-blue-800 hover:bg-blue-900 shadow-sm min-w-64 cursor-pointer flex justify-center items-center gap-2 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign Up
          </button>
          <button
            name="learn-more"
            className="border-2 bg-transparent min-w-64 shadow-sm border-blue-800 hover:bg-blue-800 cursor-pointer flex  justify-center items-center gap-2 text-white font-bold py-2 px-4 rounded-full"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

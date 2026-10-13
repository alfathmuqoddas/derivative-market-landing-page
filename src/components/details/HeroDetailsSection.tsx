import { ArrowRight } from "lucide-react";

type HeroProps = {
  heroData: {
    title: string;
    subtitle: string;
    description: string;
  };
  imageUrl: string;
};
export const HeroDetailsSection = ({ heroData, imageUrl }: HeroProps) => {
  return (
    <section className="md:container mx-auto md:px-4 relative mt-24">
      <img
        src={imageUrl}
        className="md:aspect-video object-cover w-full h-screen md:h-auto brightness-90 rounded-3xl"
        alt="hero"
      />
      <div className="absolute bottom-12 left-4 md:bottom-16 md:left-16">
        <h1 className="text-white font-serif text-5xl md:text-6xl">
          {heroData?.title}
        </h1>
        <p className="text-white md:text-xl mt-4 text-shadow-sm">
          {heroData?.description}
        </p>
        <div className="flex flex-col md:flex-row gap-2 mt-6 mr-4">
          <button
            name="sign-up"
            className="bg-blue-800 hover:bg-blue-900 shadow-sm min-w-64 cursor-pointer flex justify-center items-center gap-2 text-white font-bold py-2 px-4 rounded-full"
          >
            {`Trade ${heroData?.title} Now`}
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

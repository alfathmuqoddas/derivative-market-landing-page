import { ArrowRight } from "lucide-react";

type DefinitionProps = {
  definitionData: {
    title: string;
    description: string;
  };
};

export const Definition = ({ definitionData }: DefinitionProps) => {
  return (
    <section className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
      <div className="w-full md:w-1/2">
        <h1 className="md:text-xl font-serif text-blue-800">
          {definitionData?.title}
        </h1>
        <p className="text-xl md:text-xl">{definitionData?.description}</p>
        <button
          name="learn-more"
          className="bg-blue-800 hover:bg-blue-900 cursor-pointer flex items-center gap-2 text-white font-bold py-2 px-8 mt-6 rounded-full"
        >
          Learn More
          <ArrowRight className="size-6" />
        </button>
      </div>
      <img
        src="/what-is-derivative.jpg"
        alt="what-is-derivative"
        className="w-full md:w-1/2 h-auto aspect-video rounded-3xl"
      />
    </section>
  );
};

export const HowItWorksSection = ({
  howItWorksData,
  product,
}: {
  howItWorksData: {
    title: string;
    subtitle?: string;
    description: string;
    list: {
      title: string;
      description: string;
    }[];
  };
  product: string;
}) => {
  return (
    <section className="container mx-auto px-4 py-24">
      <h1 className="text-blue-800 font-serif font-bold">
        {howItWorksData?.title}
      </h1>
      <p className="text-xl md:text-2xl">
        {howItWorksData?.subtitle || howItWorksData?.description}
      </p>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2">
          {howItWorksData?.list?.map((item: any, index: number) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="font-serif text-blue-800">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
        <img
          src={`https://picsum.photos/seed/${product}-wejfrhwef/1920/1080`}
          alt="how-it-works"
          className="rounded-2xl w-full md:w-1/3 h-auto aspect-video"
        />
      </div>
    </section>
  );
};

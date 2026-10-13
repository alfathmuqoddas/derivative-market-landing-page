type OnboardingSectionProps = {
  onboardingData: {
    title: string;
    description: string;
    buttonText: string;
  };
};
export const OnboardingSection = ({
  onboardingData,
}: OnboardingSectionProps) => {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="rounded-2xl bg-blue-800 p-8 space-y-1 text-center">
        <h1 className="text-white font-serif text-xl md:text-3xl">
          {onboardingData?.title}
        </h1>
        <p className="text-white md:text-xl">{onboardingData?.description}</p>
        <button
          name="sign-up"
          className="mx-auto mt-4 bg-white min-w-64 cursor-pointer flex justify-center items-center gap-2 text-blue-800 font-bold py-2 px-4 rounded-full"
        >
          {onboardingData?.buttonText}
        </button>
      </div>
    </section>
  );
};

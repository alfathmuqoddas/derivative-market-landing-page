import {
  ArrowRight,
  ShieldAlert,
  Compass,
  TrendingUp,
  ArrowLeftRight,
} from "lucide-react";

type PurposeSectionProps = {
  purposeData: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      id: string;
      title: string;
      description: string;
    }[];
  };
};
export const PurposeSection = ({ purposeData }: PurposeSectionProps) => {
  const iconMap = {
    riskHedging: ShieldAlert,
    priceDiscovery: Compass,
    leverage: TrendingUp,
    speculation: ArrowLeftRight,
  };

  return (
    <section className="px-4 py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="md:text-xl font-serif text-blue-800">
          {purposeData?.title}
        </h1>
        <p className="text-xl md:text-3xl">{purposeData?.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {purposeData?.list?.map((item: any) => {
            const CurrentIcon = iconMap[item.id as keyof typeof iconMap];
            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-sm"
              >
                {CurrentIcon && (
                  <CurrentIcon className="text-blue-800 mx-auto" size={32} />
                )}
                <h2 className="font-serif text-blue-900">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
        <button
          name="learn-more"
          className="bg-blue-800 mx-auto hover:bg-blue-900 cursor-pointer flex items-center gap-2 text-white font-bold py-2 px-8 mt-12 rounded-full"
        >
          Learn More About {purposeData?.title}
          <ArrowRight className="size-6" />
        </button>
      </div>
    </section>
  );
};

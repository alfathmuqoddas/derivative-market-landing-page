import {
  FiShield,
  FiActivity,
  FiTrendingUp,
  FiEye,
  FiTarget,
  FiCreditCard,
  FiRepeat,
  FiSliders,
  FiLock,
  FiLayers,
  FiRefreshCw,
  FiGlobe,
  FiPercent,
  FiFileText,
} from "react-icons/fi";

type BenefitsProps = {
  benefitsData: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  product: string;
};

const iconMap: Record<string, any> = {
  futures: {
    operationalHedging: FiShield,
    highLiquidity: FiActivity,
    capitalEfficiency: FiTrendingUp,
    transparentPricing: FiEye,
  },
  forwards: {
    perfectHedgeAlignment: FiTarget,
    noDailyCashDrag: FiCreditCard,
    tailoredForeignExchange: FiRepeat,
    flexibleSettlementModes: FiSliders,
  },
  options: {
    downsideInsurance: FiShield,
    cappedRiskForBuyers: FiLock,
    strategicVersatility: FiLayers,
    capitalLeverage: FiTrendingUp,
  },
  swaps: {
    interestRateRiskTransformation: FiRefreshCw,
    currencyRiskAlignment: FiGlobe,
    lowerBorrowingCosts: FiPercent,
    offBalanceSheetFlexibility: FiFileText,
  },
};

export const BenefitsDetailsSection = ({
  benefitsData,
  product,
}: BenefitsProps) => {
  console.log(product);
  return (
    <section className="px-4 py-24 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="md:text-xl font-serif text-blue-800">
          {benefitsData?.title}
        </h1>
        <p className="text-xl md:text-3xl">{benefitsData?.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {benefitsData?.list?.map((item: any, index: number) => {
            const CurrentIcon = iconMap[product]?.[item.id];

            console.log({ CurrentIcon, itemId: item.id, product });

            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-sm"
              >
                {CurrentIcon && (
                  <div className="size-10 flex items-center justify-center rounded-full bg-blue-800">
                    <CurrentIcon className="text-white" size={24} />
                  </div>
                )}
                <h2 className="font-serif text-blue-900">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

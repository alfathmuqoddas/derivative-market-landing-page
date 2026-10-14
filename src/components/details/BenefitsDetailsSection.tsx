import { FiShield, FiActivity, FiTrendingUp, FiEye } from "react-icons/fi";
import { Wallet, Target, Sliders, ArrowLeftRight } from "lucide-react";

type BenefitsProps = {
  benefitsData: {
    title: string;
    subtitle: string;
    description: string;
    list: {
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
    perfectHedgeAlignment: Target,
    noDailyCashDrag: Wallet,
    tailoredForeignExchange: Sliders,
    flexibleSettlementModes: ArrowLeftRight,
  },
  options: {
    downsideInsurance: "",
    cappedRiskForBuyers: "",
    strategicVersatility: "",
    capitalLeverage: "",
  },
  swaps: {
    interestRateRiskTransformation: "",
    currencyRiskAlignment: "",
    lowerBorrowingCosts: "",
    offBalanceSheetFlexibility: "",
  },
};

export const BenefitsDetailsSection = ({
  benefitsData,
  product,
}: BenefitsProps) => {
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

            return (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl p-6 bg-white shadow-sm"
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
      </div>
    </section>
  );
};

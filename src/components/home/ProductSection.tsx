type ProductSectionProps = {
  productData: {
    title: string;
    subtitle: string;
    description: string;
    list: {
      title: string;
      icon: string;
      description: string;
    }[];
  };
  lang: any;
};

export const ProductSection = ({ productData, lang }: ProductSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="md:text-xl font-serif text-blue-800">
            {productData?.title}
          </h1>
          <p className="text-xl md:text-3xl">{productData?.subtitle}</p>
        </div>
        <p className="flex-1">{productData?.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-16">
        {productData?.list?.map((item: any) => {
          return (
            <a
              key={item.title}
              href={`/${lang}/details/${item.icon}`}
              className="flex flex-col gap-2 bg-white group cursor-pointer"
            >
              <figure className="aspect-video w-full overflow-hidden rounded-2xl mb-2">
                <img
                  src={`/${item.icon}-illustration1.jpg`}
                  loading="lazy"
                  alt={`${item.icon}-illustration1`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </figure>
              <h2 className="font-serif text-blue-900 group-hover:underline group-active:underline underline-offset-2 group-hover:decoration-blue-800">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

import { SectionTitle } from "../ui/SectionTitle";
import { NewsCard } from "../ui/NewsCard";

export function NewsInsights() {
  return (
    <section className="flex w-full flex-col mt-32 px-8 md:px-16 lg:px-24 animate-fade-in">
      <SectionTitle 
        title="News & Insights"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <NewsCard
            size="large"
            image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/1d7e7a0e4c2534bd4640a591d57196e0e2cb3f9ded2162d94db04b1099a32786"
            title="Turner Marks Topping Out of $389 Million Project at Offutt Air Force Base"
            className="hover:scale-[1.02] transition-transform"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {[
            {
              image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a943f3e4b947a1dc26e5c9021219bafa4d5979d93475293afcee111760df4dae",
              title: "Turner Celebrates a Century of Building Hope."
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/b69341dd05bf3028fb55d59cfc49a2611176e126581b45efb1db128678190339",
              title: "Turner Joint Venture Reaches Milestone on $445."
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/6e5ec32a81d1f4a3226922bb5597edb31659d368231f06bb13e6aca55edbfff1",
              title: "Turner and New York City FC Break Ground on."
            }
          ].map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              title={item.title}
              className="hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
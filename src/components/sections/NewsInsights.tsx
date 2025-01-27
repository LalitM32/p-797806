import { SectionTitle } from "../ui/SectionTitle";
import { NewsCard } from "../ui/NewsCard";

export function NewsInsights() {
  return (
    <section className="w-full py-32 bg-white animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionTitle 
          title="News & Insights"
          className="mb-16 text-left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[320px]">
          {/* Featured Article - Spans 4 columns and 2 rows */}
          <div className="md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <NewsCard
              size="large"
              image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/1d7e7a0e4c2534bd4640a591d57196e0e2cb3f9ded2162d94db04b1099a32786"
              title="Turner Marks Topping Out of $389 Million Project at Offutt Air Force Base"
              className="h-full"
            />
          </div>
          
          {/* Secondary Articles - 2 columns each */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <NewsCard
              image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a943f3e4b947a1dc26e5c9021219bafa4d5979d93475293afcee111760df4dae"
              title="Turner Celebrates a Century of Building Hope"
              className="h-full"
            />
          </div>
          
          <div className="md:col-span-2 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <NewsCard
              image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/b69341dd05bf3028fb55d59cfc49a2611176e126581b45efb1db128678190339"
              title="Turner Joint Venture Reaches Milestone on $445"
              className="h-full"
            />
          </div>
          
          {/* Bottom Articles - 3 columns each */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <NewsCard
              image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/6e5ec32a81d1f4a3226922bb5597edb31659d368231f06bb13e6aca55edbfff1"
              title="Turner and New York City FC Break Ground on"
              className="h-full"
            />
          </div>
          
          <div className="md:col-span-3 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <NewsCard
              image="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/6e5ec32a81d1f4a3226922bb5597edb31659d368231f06bb13e6aca55edbfff1"
              title="Turner Announces New Sustainable Initiative"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
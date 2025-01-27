import { NewsInsights } from "@/components/sections/NewsInsights";
import { OurCulture } from "@/components/sections/OurCulture";
import { LifeAtTurner } from "@/components/sections/LifeAtTurner";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)] overflow-hidden">
      <header>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/e00e41d9174bdd7ba5976e91e830ca0f840023adefeee16ab4a66592073f1c8c?placeholderIfAbsent=true"
          className="aspect-[1.98] object-contain w-full max-md:max-w-full"
          alt="Turner Construction header"
        />
      </header>

      <main>
        <NewsInsights />

        <section className="w-full max-w-[1137px] mt-[369px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[61%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/4b336b5e15f0419830fb0c4651e0953dd75add7f67fe31d5a4ec4db02765fa93?placeholderIfAbsent=true"
                className="aspect-[1.29] object-contain w-full grow rounded-md max-md:max-w-full max-md:mt-10"
                alt="India office"
              />
            </div>
            <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch font-normal my-auto max-md:max-w-full max-md:mt-10">
                <span className="rotate-[2.4492937051703357e-16rad] text-[rgba(65,129,218,1)] text-sm leading-loose">
                  INDIA
                </span>
                <h2 className="rotate-[2.4492937051703357e-16rad] text-[rgba(75,75,78,1)] text-[39px] font-bold leading-[56px] mt-[11px]">
                  Our Work In Your Local<br />
                  Community
                </h2>
                <p className="rotate-[2.4492937051703357e-16rad] text-[rgba(101,101,104,1)] text-[19px] leading-[30px] w-[327px] mt-[26px] max-md:mr-[7px]">
                  Together we can grow communities,<br />
                  strengthen economies, and improve<br />
                  lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="self-center flex w-[546px] max-w-full items-stretch gap-5 text-sm text-[rgba(147,147,153,1)] font-normal leading-loose flex-wrap justify-between mt-24 max-md:mt-10">
          <button className="rotate-[2.4492937051703357e-16rad] hover:text-[rgba(11,93,208,1)] transition-colors">
            MEET THE INDIA TEAM
          </button>
          <button className="rotate-[2.4492937051703357e-16rad] hover:text-[rgba(11,93,208,1)] transition-colors">
            Choose another location
          </button>
        </div>

        <OurCulture />
        <LifeAtTurner />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
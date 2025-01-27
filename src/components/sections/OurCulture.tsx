import { SectionTitle } from "../ui/SectionTitle";

export function OurCulture() {
  return (
    <section className="mt-[145px] max-md:mt-10">
      <SectionTitle 
        title="Our Culture"
        className="ml-[46px] max-md:ml-2.5"
      />
      
      <p className="rotate-[2.4492937051703357e-16rad] text-[rgba(101,101,104,1)] text-xl font-bold leading-[30px] ml-[45px] mt-[46px] max-md:max-w-full max-md:mt-10">
        Our vision is to be the highest-value provider of global construction services and technical expertise while we make a<br />
        difference in the lives of people, customers, the community, and the environment.
      </p>

      <div className="self-stretch mr-[11px] mt-[77px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[24%] max-md:w-full max-md:ml-0">
            <nav className="bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border flex w-full flex-col text-[rgba(83,141,221,1)] mx-auto px-11 py-[54px] rounded-md border-[rgba(11,93,208,1)] border-solid max-md:mt-10 max-md:px-5">
              {/* Navigation items */}
              <div className="self-stretch flex items-stretch gap-4 text-[rgba(208,224,246,1)]">
                <span className="rotate-[2.4492937051703357e-16rad] text-sm font-normal leading-loose grow my-auto">
                  01
                </span>
                <div className="flex items-stretch text-[22px] font-bold leading-loose">
                  <span className="rotate-[2.4492937051703357e-16rad] grow my-auto max-md:mr-[-9px]">
                    ESG Strate
                  </span>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/c259389eef1a6f48fd11c4c563431fb9473bb710e7a8c512b65e5e31454e27b6?placeholderIfAbsent=true"
                    className="aspect-[1.05] object-contain w-[45px] shrink-0 rounded-md"
                    alt=""
                  />
                </div>
              </div>
              {/* More nav items */}
              {[
                { num: "02", text: "Community" },
                { num: "03", text: "DE&I" },
                { num: "04", text: "Environmental" },
                { num: "05", text: "Innovation" },
                { num: "06", text: "Safet" }
              ].map(item => (
                <div key={item.num} className="flex items-stretch gap-[13px] font-normal mt-6">
                  <span className="rotate-[2.4492937051703357e-16rad] text-sm leading-loose">
                    {item.num}
                  </span>
                  <span className="rotate-[2.4492937051703357e-16rad] text-[17px] leading-loose">
                    {item.text}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          <div className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-sm font-normal mt-6 max-md:mt-10">
              <span className="rotate-[2.4492937051703357e-16rad] text-[rgba(65,129,218,1)] leading-5">
                ENVIRONMENTAL, SOCIAL, AND GOVERNANCE<br />
                STRATEGY
              </span>
              <h3 className="rotate-[2.4492937051703357e-16rad] text-[rgba(111,111,113,1)] text-[27px] font-bold leading-[42px] mt-2.5">
                Building Today to<br />
                Transform Tomorrow
              </h3>
              <p className="rotate-[2.4492937051703357e-16rad] text-[rgba(138,138,140,1)] text-[17px] leading-[26px] self-center mt-[35px]">
                We support a healthy and more<br />
                equitable future for our people,<br />
                our business, and our planet<br />
                through our ESG strategy.
              </p>
              <span className="rotate-[2.4492937051703357e-16rad] text-[rgba(147,147,153,1)] leading-loose mt-[25px]">
                LEARN MORE
              </span>
            </div>
          </div>

          <div className="w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d?placeholderIfAbsent=true"
              className="aspect-[1.57] object-contain w-full rounded-md max-md:max-w-full max-md:mt-10"
              alt="Culture illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
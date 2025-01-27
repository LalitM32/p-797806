export function Footer() {
  return (
    <footer className="mt-[136px] max-md:mt-10">
      <div className="w-full max-md:max-w-full max-md:mr-[3px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-3/12 max-md:w-full max-md:ml-0">
            <div className="rotate-[2.4492937051703357e-16rad] bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border grow text-[39px] text-white font-bold whitespace-nowrap leading-none w-full pt-[23px] pb-[65px] px-14 border-[rgba(11,93,208,1)] border-solid max-md:px-5">
              Turner
            </div>
          </div>
          <nav className="w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border flex grow items-stretch gap-[40px_42px] text-sm text-[rgba(208,224,246,1)] font-normal leading-loose w-full px-[35px] py-[61px] border-[rgba(11,93,208,1)] border-solid max-md:px-5">
              {["Our Company", "Our Services", "Our Projects", "Insights", "Careers", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rotate-[2.4492937051703357e-16rad] hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border flex grow gap-5 text-sm font-normal whitespace-nowrap w-full justify-between pl-[29px] pr-[66px] pt-[37px] pb-[62px] border-[rgba(11,93,208,1)] border-solid max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/0e85ece9aa7c39168efce7d38d259351a58bf5a2de4d71dbceed11ebb1eb088f?placeholderIfAbsent=true"
                className="aspect-[0.93] object-contain w-[42px] shrink-0 rounded-md"
                alt="Social icon 1"
              />
              <span className="rotate-[2.4492937051703357e-16rad] text-[rgba(208,224,246,1)] leading-loose mt-2">
                o
              </span>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a3f4381c45dd8082c04970015104b448c7c7e5b0894aa2f9231db5dc4c2b7bf8?placeholderIfAbsent=true"
                className="aspect-[0.92] object-contain w-9 shrink-0 rounded-md"
                alt="Social icon 2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d02463d3a0ca0ad62c89974848acdd77830477d8402656b6f0a674f184aa1950?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-7 shrink-0 mt-1.5"
                alt="Social icon 3"
              />
              <button className="rotate-[2.4492937051703357e-16rad] rounded bg-[rgba(11,93,208,1)] border overflow-hidden text-white leading-loose mt-[5px] px-3 py-[3px] border-white border-solid">
                A
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-md:max-w-full max-md:mr-[3px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-3/12 max-md:w-full max-md:ml-0">
            <div className="rotate-[2.4492937051703357e-16rad] bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border grow text-sm text-[rgba(144,179,222,1)] font-normal leading-[22px] w-full pt-[50px] pb-[100px] px-[55px] border-[rgba(11,93,208,1)] border-solid max-md:px-5">
              © 2025 Turner Construction Company<br />
              All rights reserved
            </div>
          </div>
          <div className="w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border flex grow flex-col items-stretch font-normal w-full px-[34px] py-[49px] border-[rgba(65,129,218,1)] border-solid max-md:max-w-full max-md:px-5">
              <p className="rotate-[2.4492937051703357e-16rad] text-[rgba(144,179,222,1)] text-sm leading-[22px] max-md:max-w-full">
                Turner is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation, gender<br />
                identity, national origin, disability, status as a protected veteran, or other characteristics protected<br />
                by applicable law.
              </p>
              <a href="#" className="rotate-[2.4492937051703357e-16rad] text-[rgba(192,213,243,1)] text-[15px] leading-[1.6] z-10 -mt-4 hover:text-white transition-colors">
                Human Rights Policy
              </a>
            </div>
          </div>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="rotate-[2.4492937051703357e-16rad] bg-[rgba(11,93,208,1)] shadow-[0px_0px_2px_rgba(23,26,31,0.12)] border grow text-base text-[rgba(144,179,222,1)] font-normal leading-[26px] w-full pt-9 pb-[106px] px-8 border-[rgba(65,129,218,1)] border-solid max-md:pb-[100px] max-md:px-5">
              <a href="#" className="hover:text-white transition-colors">Fraud Alert</a> I{" "}
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> I{" "}
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
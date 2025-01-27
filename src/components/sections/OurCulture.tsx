import { SectionTitle } from "../ui/SectionTitle";

export function OurCulture() {
  return (
    <section className="mt-32 px-8 md:px-16 lg:px-24 animate-fade-in">
      <SectionTitle 
        title="Our Culture"
      />
      
      <p className="text-gray-700 text-xl font-bold leading-relaxed mt-8 max-w-3xl">
        Our vision is to be the highest-value provider of global construction services and technical expertise while we make a
        difference in the lives of people, customers, the community, and the environment.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#0B5DD0] rounded-lg p-8 text-white">
          <nav className="space-y-6">
            {[
              { num: "01", text: "ESG Strategy", active: true },
              { num: "02", text: "Community" },
              { num: "03", text: "DE&I" },
              { num: "04", text: "Environmental" },
              { num: "05", text: "Innovation" },
              { num: "06", text: "Safety" }
            ].map((item) => (
              <div 
                key={item.num}
                className={`flex items-center gap-4 transition-colors ${
                  item.active 
                    ? "text-white" 
                    : "text-blue-300 hover:text-white"
                }`}
              >
                <span className="text-sm">{item.num}</span>
                <span className="text-lg">{item.text}</span>
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <span className="text-blue-600 text-sm font-medium tracking-wider">
            ENVIRONMENTAL, SOCIAL, AND GOVERNANCE STRATEGY
          </span>
          <h3 className="text-3xl font-bold text-gray-800">
            Building Today to Transform Tomorrow
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We support a healthy and more equitable future for our people,
            our business, and our planet through our ESG strategy.
          </p>
          <button className="text-gray-500 hover:text-blue-600 transition-colors">
            LEARN MORE
          </button>
        </div>

        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d"
            alt="Culture illustration"
            className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform"
          />
        </div>
      </div>
    </section>
  );
}
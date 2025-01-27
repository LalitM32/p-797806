import { SectionTitle } from "../ui/SectionTitle";
import { useState } from "react";

interface CultureItem {
  num: string;
  text: string;
  title: string;
  description: string;
  image: string;
}

export function OurCulture() {
  const [activeItem, setActiveItem] = useState<number>(0);

  const cultureItems: CultureItem[] = [
    {
      num: "01",
      text: "ESG Strategy",
      title: "Building Today to Transform Tomorrow",
      description: "We support a healthy and more equitable future for our people, our business, and our planet through our ESG strategy.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d"
    },
    {
      num: "02",
      text: "Community",
      title: "Building Strong Communities",
      description: "We're committed to making a positive impact in the communities where we live and work.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/1d7e7a0e4c2534bd4640a591d57196e0e2cb3f9ded2162d94db04b1099a32786"
    },
    {
      num: "03",
      text: "DE&I",
      title: "Embracing Diversity",
      description: "We foster an inclusive environment where every voice is heard and valued.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/a943f3e4b947a1dc26e5c9021219bafa4d5979d93475293afcee111760df4dae"
    },
    {
      num: "04",
      text: "Environmental",
      title: "Sustainable Future",
      description: "Leading the construction industry in environmental stewardship and sustainable practices.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/b69341dd05bf3028fb55d59cfc49a2611176e126581b45efb1db128678190339"
    },
    {
      num: "05",
      text: "Innovation",
      title: "Driving Innovation",
      description: "Pioneering new technologies and methods to transform the construction industry.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/6e5ec32a81d1f4a3226922bb5597edb31659d368231f06bb13e6aca55edbfff1"
    },
    {
      num: "06",
      text: "Safety",
      title: "Safety First",
      description: "Maintaining the highest standards of safety in every project we undertake.",
      image: "https://cdn.builder.io/api/v1/image/assets/58bc881aeabe4338ac25df327d56971b/d055ce2ec2846860349f44c4509c311ca58a3b0d3318d2787b74507af27db79d"
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Our Culture"
          className="mb-16"
        />
        
        <p className="text-gray-700 text-xl font-bold leading-relaxed mb-16 max-w-3xl">
          Our vision is to be the highest-value provider of global construction services and technical expertise while we make a
          difference in the lives of people, customers, the community, and the environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0B5DD0] rounded-lg p-8 text-white">
            <nav className="space-y-6">
              {cultureItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveItem(index)}
                  className={`flex items-center gap-4 w-full text-left transition-all duration-300 ${
                    index === activeItem 
                      ? "text-white scale-105" 
                      : "text-blue-300 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-medium">{item.num}</span>
                  <span className="text-lg">{item.text}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6 animate-fade-in">
            <span className="text-blue-600 text-sm font-medium tracking-wider">
              {cultureItems[activeItem].text.toUpperCase()}
            </span>
            <h3 className="text-3xl font-bold text-gray-800">
              {cultureItems[activeItem].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {cultureItems[activeItem].description}
            </p>
            <button className="text-gray-500 hover:text-blue-600 transition-colors">
              LEARN MORE
            </button>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <img
              src={cultureItems[activeItem].image}
              alt="Culture illustration"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
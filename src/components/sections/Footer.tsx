import { Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B5DD0] text-white animate-fade-in">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-4xl font-bold">Turner</h2>
            <p className="text-blue-200 leading-relaxed">
              Building the Future Together. Turner Construction Company is a leading construction management firm, known for our commitment to quality, innovation, and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Our Company",
                "Our Services",
                "Our Projects",
                "Insights",
                "Careers",
                "Contact",
                "Sustainability",
                "Innovation"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center text-blue-200 hover:text-white transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact and Social */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-blue-200">375 Hudson Street<br />New York, NY 10014</p>
              <p className="text-blue-200">+1 (212) 229-6000</p>
              <div className="flex space-x-4 pt-4">
                <SocialLink href="#" icon={Facebook} />
                <SocialLink href="#" icon={Twitter} />
                <SocialLink href="#" icon={Linkedin} />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-blue-700/50 my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-blue-200">
          <div className="space-y-2">
            <p>© 2024 Turner Construction Company. All rights reserved.</p>
            <p className="max-w-xl">
              Turner is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation,
              gender identity, national origin, disability, status as a protected veteran, or other characteristics
              protected by applicable law.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">Social Link</span>
    </a>
  );
}
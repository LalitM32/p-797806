import { NewsInsights } from "@/components/sections/NewsInsights";
import { OurCulture } from "@/components/sections/OurCulture";
import { LifeAtTurner } from "@/components/sections/LifeAtTurner";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">Turner</div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#">Our Company</NavLink>
          <NavLink href="#">Our Services</NavLink>
          <NavLink href="#">Our Projects</NavLink>
          <NavLink href="#">News & Insights</NavLink>
          <NavLink href="#">Careers</NavLink>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-gray-200">Contact Us</button>
          <button className="text-white hover:text-gray-200">Become a Subcontractor</button>
          <button className="text-white">
            <div className="flex flex-col space-y-1.5">
              <div className="h-0.5 w-6 bg-white"></div>
              <div className="h-0.5 w-6 bg-white"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsInsights />
          <OurCulture />
          <LifeAtTurner />
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white text-sm font-medium hover:text-gray-200 transition-colors"
  >
    {children}
  </a>
);

export default Index;
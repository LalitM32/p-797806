export function Footer() {
  return (
    <footer className="mt-32 bg-[#0B5DD0] text-white animate-fade-in">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Turner</h2>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {["Our Company", "Our Services", "Our Projects", "Insights", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-end space-x-6">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <span className="sr-only">Social Link {i}</span>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-blue-700 my-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-blue-200">
          <div>
            <p>© 2025 Turner Construction Company</p>
            <p>All rights reserved</p>
          </div>

          <div>
            <p className="mb-4">
              Turner is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation, gender
              identity, national origin, disability, status as a protected veteran, or other characteristics protected
              by applicable law.
            </p>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              Human Rights Policy
            </a>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <a href="#" className="hover:text-white transition-colors">Fraud Alert</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
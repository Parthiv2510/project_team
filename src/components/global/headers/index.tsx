import Logo from "@/components/images/logo.svg";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <a href="/" className="text-primary flex items-center">
          <Logo className="h-8 w-8 mr-2" /> {/* Render SVG as a component */}
          <h1 className="text-xl font-bold text-black">Faster</h1>
        </a>
        
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler lg:hidden focus:outline-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6" id="navbarCollapse">
          <a href="/" className="text-gray-700 hover:text-primary transition-colors">Home</a>
          <a href="/about" className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="/services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
          <a href="/pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
          <a href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Get A Quote Button */}
        <a href="" className="hidden lg:block bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
          Get A Quote
        </a>
      </nav>
    </div>
  );
}

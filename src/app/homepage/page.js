import React from "react";

// Navigation Bar Component
function Navbar() {
  return (
    <nav className="bg-gray-800 bg-opacity-80 py-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="/" className="text-white text-lg hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white text-lg hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-white text-lg hover:text-gray-400">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white text-lg hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Main Home Page Layout
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center text-white" style={{ backgroundImage: "url(https://source.unsplash.com/1600x900/?nature)" }}>
      <Navbar />
      <header className="bg-black bg-opacity-50 text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-2xl mb-6">Explore our site and learn more about what we offer!</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-2 rounded-md">
          Explore Now
        </button>
      </header>
      <section className="bg-white bg-opacity-80 text-black rounded-lg p-8 mx-6 md:mx-auto mt-8 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-lg mb-6">
          We provide excellent services that cater to your needs. Learn more by exploring the pages on our website.
        </p>
        <img
          src="https://i.pinimg.com/736x/63/54/94/63549497893aed43812ad3fb835effad.jpg"
          alt="Service template"
          className="w-full rounded-lg shadow-md"
        />
      </section>
      <footer className="bg-gray-800 text-white text-sm py-6 mt-auto">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <p>Twitter: @yourcompany</p>
            <p>Facebook: facebook.com/yourcompany</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Other Links</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="text-center mt-6">&copy; 2024 Your Company. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (<div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    {/* Navigation Bar */}
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a href="#" className="text-2xl font-bold">Virtue</a>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
        <button
          className="bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </nav>

    {/* Hero Section */}
    <header className="bg-dots-pattern text-gray-800 py-16 relative">
  <div className="absolute inset-0 bg-white bg-opacity-80"></div> {/* Overlay */}
  <div className="container mx-auto text-center relative">
    <h1 className="text-4xl font-bold">Empowering Your Learning Journey</h1>
    <p className="text-lg mt-4 text-gray-700">
      Connect with mentors, access study material, and grow your skills.
    </p>
    <button
      className="bg-gray-800 text-gray-100 font-bold px-6 py-3 mt-6 rounded-lg shadow hover:bg-gray-700"
      onClick={() => navigate('/signup')}
    >
      Get Started
    </button>
  </div>
</header>

{/* Services Section */}
<section id="services" className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Talk to a Mentor", description: "Guidance from experts.", icon: "💬" },
        { title: "Forums", description: "Collaborate with peers.", icon: "📝" },
        { title: "Personality Test", description: "Discover your path.", icon: "🧠" },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-gray-800 text-gray-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          onClick={() => navigate('/signup')}
        >
          <div className="text-4xl">{service.icon}</div>
          <h3 className="text-xl font-bold mt-4">{service.title}</h3>
          <p className="text-gray-300 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4">
              Virtue is your one-stop solution for virtual learning. We connect you with experts, 
              provide top-notch resources, and foster a collaborative learning environment.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Expert Mentorship</li>
              <li>Engaging Community Forums</li>
              <li>Personalized Learning Paths</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-4">Have questions? Reach out anytime.</p>
          <form className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded border border-gray-300 bg-gray-50 text-gray-800"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded border border-gray-300 bg-gray-50 text-gray-800"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-4 rounded border border-gray-300 bg-gray-50 text-gray-800"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          © 2024 Virtue. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

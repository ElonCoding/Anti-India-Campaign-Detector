import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/shield-icon.svg" alt="CyberGuard India Logo" className="h-8 w-8" /> {/* Placeholder for shield icon */}
          <span className="text-xl font-bold">CyberGuard India</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-400">Products</a>
          <a href="#" className="hover:text-blue-400">Solutions</a>
          <a href="#" className="hover:text-blue-400">Resources</a>
          <a href="#" className="hover:text-blue-400">Q</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </nav>

      <div className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(\'/images/laptop-bg.jpg\')' }}> {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Detect & Counter</h2>
          <h3 className="text-4xl text-blue-400 font-bold mb-4">Anti-India Campaigns</h3>
          <h3 className="text-4xl font-bold mb-8">on Digital Platforms</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Advanced AI-powered cybersecurity solutions to identify, analyze, and neutralize digital threats targeting India's national interests across social media and online platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Start Monitoring
            </button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded">
              {/* Placeholder for another button */}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-gray-800 rounded-lg">
          <h4 className="text-3xl font-bold">10M+</h4>
          <p>Posts Monitored Daily</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h4 className="text-3xl font-bold">5,000+</h4>
          <p>Threats Neutralized</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h4 className="text-3xl font-bold">99.7%</h4>
          <p>Detection Accuracy</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
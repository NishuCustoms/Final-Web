import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Nishu Customs</h1>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Nishu Customs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in custom automotive solutions tailored to your unique style and performance needs.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Builds</h3>
              <p className="text-gray-600">
                Fully customized vehicles built to your exact specifications and preferences.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Upgrades</h3>
              <p className="text-gray-600">
                Engine tuning, suspension upgrades, and other performance enhancements.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailing Services</h3>
              <p className="text-gray-600">
                Premium detailing services to keep your vehicle looking its absolute best.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Nishu Customs</h3>
              <p className="text-gray-300">Quality custom automotive solutions since 2023</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Gallery</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">info@nishucustoms.com</li>
                  <li className="text-gray-300">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Nishu Customs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

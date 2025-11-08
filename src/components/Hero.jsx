import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-primary-600">EZ Labs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Innovative solutions for modern challenges. We help businesses transform their digital presence 
              with cutting-edge technology and creative expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="btn-primary inline-block text-center"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium 
                         hover:bg-gray-50 focus:outline-none focus:ring-2 
                         focus:ring-primary-500 focus:ring-offset-2 
                         transition-colors duration-200 border border-primary-600 inline-block text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <svg 
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  />
                </svg>
                <p className="text-xl font-semibold">Innovation Starts Here</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-50 blur-xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

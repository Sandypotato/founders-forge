import React, { useState } from 'react';
import { Menu, X, ChevronRight, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';

export default function FoundersForge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              We Redefine
              <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 pb-2 leading-tight">
                Changemaking
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              If you’re interested to inspire a lasting culture of changemaking in your school,</p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
      href="/aboutus"  // <-- Updated link
      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
    >
      Click Here
      <ChevronRight className="inline ml-2" size={20} />
    </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-4xl font-bold text-white mb-4">What is Founders’ Forge?</h3>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      We’re happy you’re interested. To learn more:
    </p>
    <a
      href="/aboutus"  // <-- Updated link
      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
    >
      Click Here
      <ChevronRight className="inline ml-2" size={20} />
    </a>
  </div>
</section>

      {/* CTA Section 
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of entrepreneurs who have transformed their ideas into successful businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/*<footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Founder's Forge
              </h4>
              <p className="text-gray-300">
                Fostering the culture of changemaking among Singapore’s youth.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Startup Incubation</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Funding Support</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Business Development</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Toolkit</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Founder's Forge. All rights reserved. </p>
            <p>Powered by Anders Choo Technologies</p>
          </div>
        </div>
      </footer>*/}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">
      {/* Brand */}
      <div>
        <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-relaxed pb-1">
          Founder's Forge
        </h4>
        <p className="text-gray-300">
          Empowering changemakers to improve the future, one project at a time.
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <h5 className="text-white font-semibold mb-4">Home</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#home" className="hover:text-orange-400 transition-colors">Go to Home</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-white font-semibold mb-4">About</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#about" className="hover:text-orange-400 transition-colors">Learn More</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-white font-semibold mb-4">Founders</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#founders" className="hover:text-orange-400 transition-colors">Meet the Founders</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-white font-semibold mb-4">What We Do</h5>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#whatwedo" className="hover:text-orange-400 transition-colors">Our Work</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-white font-semibold mb-4">Contact Us</h5>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a href="mailto:foundersforgesg@gmail.com" className="hover:text-orange-400 transition-colors">
              foundersforgesg@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; 2025 Founder's Forge. All rights reserved.</p>
      <p>Powered by Anders Choo Technologies</p>
    </div>
  </div>
</footer>

    </div>
  );
}


import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/logo.svg'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-left">
              <div className="flex-shrink-0">
                <img src={logo} alt="Founders Forge Logo" className="h-32 w-32" />
                
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to='/' className="text-white hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
                <Link to='/aboutus' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
                <Link to='/founders' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">Founders</Link>
                <Link to='/whatwedo' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">What We Do</Link>
                
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to='/' className="text-white hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
                <Link to='/aboutus' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">About</Link>
                <Link to='/founders' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">Founders</Link>
                <Link to='/whatwedo' className="text-gray-300 hover:text-orange-400 transition-colors px-3 py-2 text-sm font-medium">What We Do</Link>
                
              <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
      </div>
  )
}

export default Navbar
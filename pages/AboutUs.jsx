import React, { useState } from 'react';
import { Menu, X, Heart, Users, Lightbulb, Target, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/navbar';
const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="text-orange-400" size={20} />
            <span className="text-white font-medium">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Forging the Next Generation of
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Changemakers
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We believe education should not be purely about academics. It should be about developing and nurturing youths to become concerned citizens who give back to society.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="text-orange-400" size={20} />
                <span className="text-orange-400 font-medium">Our Vision</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Shared Vision, Different Expression
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                This vision is shared by every school, though it may be expressed differently in each school's core values. Yet through our experiences and conversations, we found that such a culture of changemaking has yet to be developed in many schools.
              </p>
              <p className="text-lg text-gray-300">
                Students don't know how to start projects and certainly don't have a catalyst to inspire them to do so.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={28} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Community Impact</h4>
                    <p className="text-gray-300 text-sm">Building projects that solve real problems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="text-white" size={28} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Innovation</h4>
                    <p className="text-gray-300 text-sm">Inspiring creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-8">
            <ArrowRight className="text-orange-400" size={20} />
            <span className="text-orange-400 font-medium">Our Mission</span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-8">
            We Aim to Change That
          </h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              We are committed to sharing our knowledge and insights on starting meaningful initiatives with as many youth as possible, to inspire the next generation of changemakers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Share Knowledge</h4>
              <p className="text-gray-300">Providing insights and resources for starting meaningful projects</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Inspire Youth</h4>
              <p className="text-gray-300">Motivating young people to become active changemakers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Build Community</h4>
              <p className="text-gray-300">Creating a network of passionate young leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forging Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="text-white" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Forged with Love</h4>
                    <p className="text-gray-300">
                      Our founders have forged our projects with love and more than anything, are looking to give back to the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="text-orange-400" size={20} />
                <span className="text-orange-400 font-medium">What It Means to Forge</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Shaping Something From Nothing
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                To forge is to shape, to build up something from nothing. Our founders have forged our projects with love and more than anything, are looking to give back to the community.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We are committed to forging even more youth changemakers, building a movement of young leaders who are passionate about making a difference in their communities.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                Join Our Movement
                <ArrowRight className="inline ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Founder's Forge
              </h4>
              <p className="text-gray-300">
                Empowering young changemakers to build a better tomorrow.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">About</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Mission</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Impact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Programs</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Youth Leadership</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Project Mentorship</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community Building</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
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
};

export default AboutUs;
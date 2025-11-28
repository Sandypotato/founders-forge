import React, { useState } from 'react';
import { Menu, X, Users, Lightbulb, TrendingUp, Award, MessageSquare, Calendar, HandHeart, Target, Zap, Star, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/navbar';

const programs = [
  {
    id: 1,
    title: "Groundup Roadmap Workshop",
    type: "Our Talks",
    duration: "45-60 minutes",
    participants: "50-1000+ students",
    description: "A comprehensive guide that takes students through the entire journey of building a changemaking project from scratch, providing practical tools and actionable insights.",
    image: "/api/placeholder/400/300",
    components: [
      "Ideation and opportunity identification techniques",
      "Strategic planning and business model frameworks",
      "Partnership strategies with organizations",
      "Grant applications and funding resources",
      "Essential toolkit for young changemakers"
    ],
    impact: "Educational",
    quote: "This workshop transforms abstract ideas into concrete action plans, giving students the confidence to start their changemaking journey."
  },
  {
    id: 2,
    title: "Founder Panel Discussion",
    type: "Our Talks",
    duration: "45-60 minutes",
    participants: "50-1000+ students",
    description: "Close-up conversations with 4-5 student founders who share their real journeys, challenges, victories, and the driving force behind their ventures.",
    image: "/api/placeholder/400/300",
    components: [
      "Authentic founder stories and experiences",
      "Challenges faced and lessons learned",
      "What drives young changemakers",
      "Interactive Q&A sessions",
      "Networking opportunities"
    ],
    impact: "Inspirational",
    quote: "Hearing from peers who've walked the path makes changemaking feel achievable and exciting for every student."
  },
  {
    id: 3,
    title: "Mentorship Programme",
    type: "Other Events",
    duration: "3-6 months",
    participants: "20-40 students",
    description: "Connect your students with experienced founders who provide personalized guidance and support throughout their changemaking journey - from ideation, to execution, to reflection.",
    image: "/api/placeholder/400/300",
    components: [
      "One-on-one mentor matching process",
      "Project-based guidance and support",
      "Regular check-ins and milestone tracking",
      "Showcase opportunities and demo days",
      "Peer networking and collaboration"
    ],
    impact: "Transformational",
    quote: "The mentorship program turns dreams into reality, providing the support system every young changemaker needs to succeed."
  },
  {
    id: 4,
    title: "Customised Programmes",
    type: "Other Events",
    duration: "Flexible",
    participants: "Variable",
    description: "Tailored programs designed to align with your school's specific curriculum, priorities, and student development goals.",
    image: "/api/placeholder/400/300",
    components: [
      "Innovation workshops and ideation sessions",
      "Passion project incubators",
      "Leadership development tracks",
      "Demo days and pitch competitions",
      "Industry-specific focus areas"
    ],
    impact: "Customized",
    quote: "Every school is unique, and our custom programmes ensure maximum relevance and impact for your specific student community."
  }
];

const impactAreas = [
  {
    icon: Target,
    title: "Ideation & Planning",
    description: "Teaching students how to identify opportunities and develop comprehensive plans"
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Understanding how to form a team and how to lead it."
  },
  {
    icon: TrendingUp,
    title: "Growth & Scaling",
    description: "Finding both government and non-government support to scale your initiative"
  },
  {
    icon: HandHeart,
    title: "Community Impact",
    description: "Fostering a culture of changemaking that emphasises impact on others above oneself"
  }
];

export default function WhatWeDo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const emailLink = "mailto:hello@foundersforge.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Lightbulb className="text-orange-400" size={20} />
            <span className="text-white font-medium">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Action & Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We inspire and empower Singapore's youth through comprehensive talks, mentorship programs, and customized experiences that develop your students into young changemakers.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-6 py-3 border border-orange-400/30">
            <Target className="text-orange-400" size={20} />
            <span className="text-white font-medium">4 Core Programs Available</span>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Impact Areas</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every program is designed to develop key skills and mindsets that are crucial in developing ground-up initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{area.title}</h4>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-6 py-3 mb-8 border border-orange-400/30">
            <Heart className="text-orange-400" size={20} />
            <span className="text-orange-400 font-medium">Our Philosophy</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We believe every program should be <span className="text-orange-400 font-semibold">tailored to your school's unique needs</span>. Whether you want to focus on event planning, leadership development, or specific types of projects, we customize our approach to maximize relevance and impact.
            </p>
            <div className="text-2xl font-bold text-white">
              Ready to inspire your students? Let's create something amazing together! 🚀
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Programs</h3>
            <p className="text-xl text-gray-300">Click on any program to learn more about what we offer</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/50 transition-all cursor-pointer group hover:transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      {program.type === "Our Talks" ? <MessageSquare className="text-white" size={32} /> : <Calendar className="text-white" size={32} />}
                    </div>
                    <span className="text-white font-semibold">{program.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${program.impact === 'Educational' ? 'bg-blue-400' : program.impact === 'Inspirational' ? 'bg-green-400' : program.impact === 'Transformational' ? 'bg-purple-400' : 'bg-orange-400'}`}></div>
                    <span className="text-sm text-gray-300">{program.impact} Impact</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{program.title}</h4>
                  <p className="text-orange-400 font-semibold mb-2">{program.duration} • {program.participants}</p>
                  <p className="text-gray-300 text-sm line-clamp-3">{program.description}</p>
                  <div className="mt-4 flex items-center text-orange-400 text-sm font-medium">
                    <a href={emailLink}>Learn more</a>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="relative">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm z-10"
              >
                <X size={20} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        {selectedProgram.type === "Our Talks" ? <MessageSquare className="text-white" size={40} /> : <Calendar className="text-white" size={40} />}
                      </div>
                      <span className="text-white font-semibold text-lg">{selectedProgram.type}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${selectedProgram.impact === 'Educational' ? 'bg-blue-400' : selectedProgram.impact === 'Inspirational' ? 'bg-green-400' : selectedProgram.impact === 'Transformational' ? 'bg-purple-400' : 'bg-orange-400'}`}></div>
                      <span className="text-gray-300">{selectedProgram.impact} Impact</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-orange-400 font-semibold text-sm">Duration</div>
                        <div className="text-white">{selectedProgram.duration}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-orange-400 font-semibold text-sm">Participants</div>
                        <div className="text-white">{selectedProgram.participants}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProgram.title}</h3>
                  <p className="text-orange-400 font-semibold text-lg mb-4">{selectedProgram.type}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Program Overview</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProgram.description}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border-l-4 border-orange-400">
                      <p className="text-gray-300 italic">"{selectedProgram.quote}"</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <a href={emailLink} className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all text-center">
                        Book This Program
                      </a>
                      <a href={emailLink} className="flex-1 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-center">
                        Find Out More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
{/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-6 py-3 mb-6 border border-orange-400/30">
              <Star className="text-orange-400" size={20} />
              <span className="text-orange-400 font-medium">Our Testimonials</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Our Testimonials</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our programmes are well received by students and teachers
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-white/10">
              <img src="https://i.ibb.co/DDFLsRhb/DSC03104-1.jpg" alt="Testimonial 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
              <img src="https://i.ibb.co/KzNxdVZR/Whats-App-Image-2025-11-18-at-10-33-12-PM.jpg" alt="Testimonial 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Quote Box */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white" size={24} />
              </div>
              <blockquote className="text-lg text-gray-300 leading-relaxed mb-4 pt-4">
                "Three speakers from Founders' Forge shared their journeys initiating and scaling up their efforts as changemakers during RGS's Community and Makers' Fair 2025. They were engaging and able to draw general principles which were transferable across different domains. This session encouraged participating students to design projects for their target audiences and sustain ongoing projects."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full"></div>
                <div>
                  <p className="text-white font-semibold">Mr Tok Wei Sin</p>
                  <p className="text-orange-400">Raffles Girls' School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Students?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create an inspiring experience that ignites a culture of changemaking in your school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={emailLink} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center">
              Book a Program
              <ArrowRight className="inline ml-2" size={20} />
            </a>
            <a href={emailLink} className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center">
              Schedule Consultation
            </a>
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
                Inspiring the next generation of changemakers.
              </p>
            </div>
            
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Founder's Forge. All rights reserved.</p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

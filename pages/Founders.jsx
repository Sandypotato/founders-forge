import React, { useState } from 'react';
import { Menu, X, Heart, Globe, Mic, Star, ArrowRight, ChevronLeft, ChevronRight, Users, Award, Target, Sparkles } from 'lucide-react';
import Navbar from '../components/navbar';
const Founders = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);

  // Sample founders data - you can replace this with your actual founders
  const founders = [
    {
      id: 1,
      name: "Charmaine",
      title: "Co-Founder",
      project: "Project Lavande and Project Avocardio",
      impact: "National",
      image: "https://i.ibb.co/Xfj2sKxH/Whats-App-Image-2025-07-12-at-20-00-12-4d9ca7d4-1.jpg",
      description: "Project lavande raised over $29k for singapore cancer society, engaging 30 cancer warriors, recruiting 465 volunteers and spreading cancer awareness to more than 10,000 people.",
      story: "Project avocardio took pride in our interconnected initiatives which raised $9k for cardiac rehabilitation patients while showing cardiac rehabilitation patients that we care, and spreading awareness on heart health and resuscitation. Both projects have been handed over to capable and passionate young leaders who continue to grow our impact and serve our communities.",
      achievements: [],
      quote: "don't just think about it, go for it!"
    },
    {
      id: 2,
      name: "Matteo Wee",
      title: "Founder",
      project: "Our SG Stories",
      impact: "National",
      image: "https://i.ibb.co/CKHYVjMF/Whats-App-Image-2025-07-12-at-12-55-27-32226d29.jpg",
      description: "Our SG stories inspires and empowers over 350 youth nationwide by connecting them to mentors nationwide through its Ambassador Programme",
      story: "Our SG stories inspires and empowers over 350 youth nationwide by connecting them to mentors nationwide through its Ambassador Programme",
      achievements: [],
      quote: "Always start with the Why"
    },
    {
      id: 3,
      name: "Anders Choo (Testing)",
      title: "Founder",
      project: "Google",
      impact: "International",
      image: "https://i.ibb.co/NgtvgPbr/images.jpg",
      description: "Founded Google, the world's leading search engine and technology company.",
      story: "Anders Choo's journey began with a simple idea: to organize the world's information and make it universally accessible and useful. His relentless pursuit of innovation led to the creation of Google, which has transformed how we access information globally.",
      achievements: ["Created the world's most popular search engine", "Pioneered advancements in AI and machine learning", "Contributed to open-source projects and community initiatives"],
      quote: "Innovation is not just about technology; it's about making a difference in people's lives."
    },
    {
      id: 4,
      name: "David Kim",
      title: "Social Entrepreneur",
      project: "FoodShare Network",
      impact: "National",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Tackling food insecurity by connecting surplus food with communities in need.",
      story: "David's experience volunteering at local food banks opened his eyes to the paradox of food waste alongside food insecurity. He developed FoodShare Network to create an efficient system for redistributing surplus food.",
      achievements: ["1M+ meals redistributed", "200+ partner organizations", "National Food Innovation Award"],
      quote: "Food security is a human right, and together we can ensure no one goes hungry."
    },
    {
      id: 5,
      name: "Emma Thompson",
      title: "Accessibility Champion",
      project: "AccessibleTech Solutions",
      impact: "International",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      description: "Developing innovative technology solutions to improve accessibility for people with disabilities.",
      story: "Emma's younger brother was born with a visual impairment, which inspired her to create technology that could help people with disabilities navigate the world more independently.",
      achievements: ["5 patent applications", "Used by 50,000+ users", "UN Accessibility Innovation Award"],
      quote: "True innovation happens when we design for everyone, not just the majority."
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Community Builder",
      project: "Youth Leadership Hub",
      impact: "National",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      description: "Empowering young leaders through mentorship and skill-building programs.",
      story: "James recognized that many young people had great ideas but lacked the guidance and resources to turn them into reality. He created Youth Leadership Hub to provide mentorship and practical skills training.",
      achievements: ["1,000+ youth mentored", "95% program completion rate", "Featured in Forbes 30 Under 30"],
      quote: "Leadership isn't about age—it's about the courage to step up and make a difference."
    }
  ];

  const criteria = [
    {
      icon: Globe,
      title: "National/International Impact",
      description: "Projects that create meaningful change beyond local communities"
    },
    {
      icon: Star,
      title: "Founded from Scratch",
      description: "Original initiatives built from the ground up, not inherited"
    },
    {
      icon: Mic,
      title: "Public Speaking Excellence",
      description: "Skilled communicators who can inspire and educate others"
    },
    {
      icon: Heart,
      title: "Founder's Heart",
      description: "Genuine passion for creating positive change in their communities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Users className="text-orange-400" size={20} />
            <span className="text-white font-medium">Our Founders</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet the Hearts Behind
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              The Movement
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every founder is expected to commit to giving talks to inspire others. Given the importance of this task, we hold each and every founder who joins our community to the highest standards.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-6 py-3 border border-orange-400/30">
            <Heart className="text-orange-400" size={20} />
            <span className="text-white font-medium">~20 Handpicked Founders</span>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Selection Criteria</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our founders are handpicked through a stringent selection process based on these four essential criteria:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Heart Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full px-6 py-3 mb-8 border border-orange-400/30">
            <Heart className="text-orange-400" size={20} />
            <span className="text-orange-400 font-medium">What is a Founder's Heart?</span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We believe it is the <span className="text-orange-400 font-semibold">genuine feeling to make change</span>, the emotion that galvanises the individual to go above and beyond to impact the community positively in whatever area they pursue.
            </p>
            <div className="text-2xl font-bold text-white">
              Get inspired by the hearts of our founders! ❤️
            </div>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Inspiring Founders</h3>
            <p className="text-xl text-gray-300">Click on any founder to learn more about their journey and impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.id}
                onClick={() => setSelectedFounder(founder)}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/50 transition-all cursor-pointer group hover:transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${founder.impact === 'International' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                    <span className="text-sm text-gray-300">{founder.impact} Impact</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{founder.name}</h4>
                  <p className="text-orange-400 font-semibold mb-2">{founder.title}</p>
                  <p className="text-gray-300 text-sm mb-4">{founder.project}</p>
                  <p className="text-gray-300 text-sm line-clamp-3">{founder.description}</p>
                  <div className="mt-4 flex items-center text-orange-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile Modal */}
      {selectedFounder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="relative">
              <button
                onClick={() => setSelectedFounder(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm z-10"
              >
                <X size={20} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img
                      src={selectedFounder.image}
                      alt={selectedFounder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${selectedFounder.impact === 'International' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                      <span className="text-gray-300">{selectedFounder.impact} Impact</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {selectedFounder.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                            <Award size={14} className="text-orange-400" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedFounder.name}</h3>
                  <p className="text-orange-400 font-semibold text-lg mb-4">{selectedFounder.title}</p>
                  <p className="text-gray-300 mb-6">{selectedFounder.project}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Their Story</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedFounder.story}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border-l-4 border-orange-400">
                      <p className="text-gray-300 italic">"{selectedFounder.quote}"</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all">
                        Connect
                      </button>
                      <button className="flex-1 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Do you have a founder's heart? Apply to become part of our inspiring community of changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
              Apply to Join
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Nominate Someone
            </button>
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
            <div>
              <h5 className="text-white font-semibold mb-4">Founders</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Meet Our Founders</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Selection Process</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Application</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Workshops</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Resources</a></li>
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

export default Founders;
import React, { useState } from 'react';
import { Menu, X, Heart, Globe, Mic, Star, ArrowRight, ChevronLeft, ChevronRight, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/navbar';

const Founders = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  // Updated founders list
  const founders = [
    {
      id: 1,
      name: "Charmaine Lin",
      title: "Founder",
      project: "Project Lavande and Project Avocardio",
      impact: "National",
      image: "https://i.ibb.co/Xfj2sKxH/Whats-App-Image-2025-07-12-at-20-00-12-4d9ca7d4-1.jpg",
      description: "Project Lavande raised over $29k for Singapore Cancer Society, engaging 30 cancer warriors, recruiting 465 volunteers and spreading cancer awareness to more than 10,000 people.",
      story: "Project Avocardio took pride in our interconnected initiatives which raised $9k for cardiac rehabilitation patients while showing cardiac rehabilitation patients that we care, and spreading awareness on heart health and resuscitation. Both projects have been handed over to capable and passionate young leaders who continue to grow our impact and serve our communities.",
      quote: "Don't just think about it, go for it.",
      linkedin: "https://www.linkedin.com/in/charmaine-lin"
    },
    {
      id: 2,
      name: "Matteo Wee",
      title: "Founder",
      project: "Our SG Stories",
      impact: "National",
      image: "https://i.ibb.co/CKHYVjMF/Whats-App-Image-2025-07-12-at-12-55-27-32226d29.jpg",
      description: "Our SG Stories inspires and empowers over 350 youth nationwide by connecting them to mentors nationwide through its Ambassador Programme.",
      story: "Our SG Stories inspires and empowers over 350 youth nationwide by connecting them to mentors nationwide through its Ambassador Programme.",
      quote: "Always start with the why.",
      linkedin: "https://www.linkedin.com/in/matteo-wee"
    },
    
    // Add more founders here as needed
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
            Every founder is expected to commit their time and effort to share their knowledge and inspire others.
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
              We are committed to delivering the best quality of service to the schools we work with. As such, our founders - all still studying in secondary schools, junior colleges and universities - are handpicked through a stringent selection process based on these four essential criteria:
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

          <div className="text-center mt-12 text-gray-300 text-lg">
            For our full list of 20+ founders, <a href="mailto:foundersforgesg@gmail.com" className="text-orange-400 underline">contact us</a>.
          </div>
        </div>
      </section>

      {/* Profile Modal */}
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
                      {selectedFounder.linkedin ? (
                        <a href={selectedFounder.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all text-center">
                          Connect
                        </a>
                      ) : (
                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all">
                          Connect
                        </button>
                      )}
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
    </div>
  );
};

export default Founders;

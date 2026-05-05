/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  Star, 
  Heart, 
  Coffee, 
  Cake, 
  Calendar,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Plus,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONFIG = {
  businessName: "Heavenly Bakers Cakes & Pastries",
  primaryCta: "Book a Order Inquiry",
  destinationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc6yWspccUqwY6K5uC_TT1tGDvR7mctLcC7pkBgMQtBY0v6ag/viewform",
  colors: {
    darkBrown: "#2D1810",
    lightBrown: "#D4B499",
    accent: "#8B5E3C",
    bg: "#FCFAF7"
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FCFAF7]/80 backdrop-blur-xl border-b border-[#D4B499]/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between min-h-[100px]">
        <div className="flex items-center gap-6">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src="https://i.ibb.co/xSXYv429/1000124928-1.jpg" 
            alt="Heavenly Bakers Logo" 
            className="w-[80px] h-[80px] object-contain shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[42px] font-medium tracking-tight text-[#2D1810] leading-none uppercase">
              Heavenly Baker's
            </span>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#D4B499]/40"></div>
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[#8B5E3C] uppercase">
                Cakes & Pastries
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D1810]/60">
          <a href="#products" className="hover:text-[#8B5E3C] transition-colors">Menu</a>
          <a href="#quiz-section" className="hover:text-[#8B5E3C] transition-colors">Experience</a>
          <a href="#faq" className="hover:text-[#8B5E3C] transition-colors">Concierge</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={CONFIG.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#2D1810] text-white rounded-full font-medium transition-all hover:bg-[#8B5E3C] shadow-lg shadow-black/5"
          >
            {CONFIG.primaryCta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2D1810]"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-[#D4B499]/20 p-6 md:hidden flex flex-col items-center shadow-xl"
          >
            <a
              href={CONFIG.destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-[#2D1810] text-white rounded-xl font-medium"
            >
              {CONFIG.primaryCta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-52 pb-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-24">
          <div className="space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-bold tracking-[0.4em] text-[#8B5E3C] uppercase">Established Excellence</span>
                <div className="h-[1px] flex-1 bg-[#D4B499]/20"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-light text-[#2D1810] leading-[0.9] tracking-[-0.04em]">
                Exquisite <br />
                <span className="italic font-normal serif text-[#8B5E3C]">Simplicity.</span>
              </h1>
              <p className="mt-10 text-xl text-[#2D1810]/60 leading-relaxed max-w-lg font-light">
                Providing premium quality baked delicacies at approachable prices. We celebrate the art of honest baking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a
                href={CONFIG.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-[#2D1810] text-white rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#8B5E3C] transition-all overflow-hidden"
              >
                <span className="relative z-10">{CONFIG.primaryCta}</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 aspect-[3/4] rounded-[6rem] overflow-hidden shadow-[0_40px_80px_rgba(45,24,16,0.15)] border border-white/20"
            >
              <img 
                src="/src/assets/images/regenerated_image_1777869882182.jpg" 
                alt="Heavenly Bakers Masterpiece"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Elegant Ornamental Elements */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-[#D4B499]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-48 h-48 bg-[#D4B499]/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProposition = () => {
  const points = [
    {
      number: "01",
      title: "Simple & Honest",
      description: "No over-the-top decorations. Just pure, high-quality ingredients made with love.",
    },
    {
      number: "02",
      title: "Premium Taste",
      description: "We focus on flavor. Every bite is a testament to our 10+ years of baking mastery.",
    },
    {
      number: "03",
      title: "Truly Affordable",
      description: "Luxury shouldn't be out of reach. We provide premium quality at prices everyone can enjoy.",
    }
  ];

  return (
    <section className="py-32 px-8 bg-white border-y border-[#D4B499]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-serif text-5xl font-light text-[#D4B499]/40 group-hover:text-[#8B5E3C]/60 transition-colors">{p.number}</span>
                <div className="h-[1px] flex-1 bg-[#D4B499]/20 self-center"></div>
              </div>
              <h3 className="text-3xl font-serif font-medium text-[#2D1810] mb-6">{p.title}</h3>
              <p className="text-[#2D1810]/50 leading-relaxed font-light text-lg">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Quiz = () => {
  const [step, setStep] = useState<'intro' | 'questions' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 0,
      question: "What kind of \"vibe\" are you going for with this event?",
      options: [
        { label: "Sophisticated & Professional (Office/Corporate)", value: "A" },
        { label: "Warm & Intimate (Small gathering/Family)", value: "B" },
        { label: "Grand & Exciting (Big celebration/Party)", value: "C" },
        { label: "Sweet & Thoughtful (Gifting/Door-gift)", value: "D" }
      ]
    },
    {
      id: 1,
      question: "When it comes to sweetness, what do your guests usually prefer?",
      options: [
        { label: "Intense & Rich (Deep chocolate lovers)", value: "A" },
        { label: "Light & Balanced (Easy to eat)", value: "B" },
        { label: "Classic & Traditional (Crowd-pleasers)", value: "C" }
      ]
    },
    {
      id: 2,
      question: "How would you describe the ideal \"texture\" for this cake?",
      options: [
        { label: "Dense and fudgy", value: "A" },
        { label: "Light and soft", value: "B" },
        { label: "Traditional and moist", value: "C" }
      ]
    },
    {
      id: 3,
      question: "How many guests are you looking to impress?",
      options: [
        { label: "1–4 (Small group)", value: "A" },
        { label: "5–12 (Medium group)", value: "B" },
        { label: "13–25 (Large group)", value: "C" },
        { label: "25+ (Grand event)", value: "D" }
      ]
    }
  ];

  const results = [
    {
      title: "The Small Gathering Specialist",
      description: "Perfect for intimate Coffee talk or \"just because\" moments for 1–4 people, featuring your classic or rich chocolate favorites in a size that ensures premium quality without waste.",
      icon: <Coffee className="w-12 h-12 text-[#8B5E3C]" />
    },
    {
      title: "The Office Hero Platter",
      description: "Ideal for meetings and corporate events for 5–10 people, focusing on crowd-pleasing soft or rich chocolate flavors that are easy to serve and guaranteed to be loved by colleagues.",
      icon: <ShieldCheck className="w-12 h-12 text-[#8B5E3C]" />
    },
    {
      title: "The Grand Celebration Collection",
      description: "Designed for big events and gifting for 10–25 guests, ensuring you have enough of your premium, affordable cakes to make a lasting impression on every single person.",
      icon: <Star className="w-12 h-12 text-[#8B5E3C]" />
    },
    {
      title: "Door Gift",
      description: "For wedding or corporate gifting.",
      icon: <Heart className="w-12 h-12 text-[#8B5E3C]" />
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const resultIndex = calculateResult(newAnswers);
      const finalResult = results[resultIndex];
      
      sessionStorage.setItem('leadMagnetCompleted', 'true');
      sessionStorage.setItem('leadMagnetTitle', 'The Celebration Flavor Profile Quiz');
      sessionStorage.setItem('leadMagnetResult', finalResult.title);
      
      setStep('result');
    }
  };

  const calculateResult = (ans: Record<number, string>) => {
    const q1 = ans[0];
    const q4 = ans[3];

    // Priority checks based on user intention
    if (q1 === 'D' || q4 === 'D') return 3; // Door Gift
    if (q4 === 'C' || q1 === 'C') return 2; // Grand Celebration
    if (q4 === 'B' || q1 === 'A') return 1; // Office Hero
    return 0; // Small Gathering
  };

  const resetQuiz = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setAnswers({});
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FCFAF7] border border-[#D4B499]/20 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5 min-h-[500px]">
            {/* Lead Magnet Content */}
            <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step === 'intro' && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <span className="text-[#8B5E3C] font-bold tracking-widest uppercase text-sm">Interactive Quiz</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D1810]">
                      The Celebration Flavor Profile Quiz
                    </h2>
                    <p className="text-xl text-[#2D1810]/70 leading-relaxed">
                      Find your perfect match. Discover which cake size and flavor best fits your specific event vibe in just 4 questions.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStep('questions')}
                      className="group flex items-center gap-3 px-10 py-5 bg-[#2D1810] text-white rounded-xl font-bold text-lg hover:bg-[#8B5E3C] transition-all"
                    >
                      Start the Quiz
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 'questions' && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#8B5E3C] font-bold text-sm tracking-wider">QUESTION {currentQuestion + 1} OF {questions.length}</span>
                      <div className="flex gap-2">
                        {questions.map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1 w-8 rounded-full transition-colors ${i <= currentQuestion ? 'bg-[#8B5E3C]' : 'bg-[#D4B499]/20'}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-[#2D1810] leading-tight">
                      {questions[currentQuestion].question}
                    </h3>

                    <div className="grid gap-4">
                      {questions[currentQuestion].options.map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleAnswer(opt.value)}
                          className="group w-full text-left p-6 bg-white border border-[#D4B499]/20 rounded-2xl hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5 transition-all flex items-center justify-between"
                        >
                          <span className="text-lg font-medium text-[#2D1810]/80 group-hover:text-[#2D1810]">{opt.label}</span>
                          <div className="w-6 h-6 rounded-full border-2 border-[#D4B499]/30 group-hover:border-[#8B5E3C] flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[#8B5E3C] scale-0 group-hover:scale-100 transition-transform" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 'result' && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 text-[#8B5E3C]">
                      {results[calculateResult(answers)].icon}
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C]/60">Your Result</span>
                        <h3 className="text-3xl font-serif font-bold text-[#2D1810]">
                          {results[calculateResult(answers)].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xl text-[#2D1810]/70 leading-relaxed border-l-4 border-[#8B5E3C] pl-6 py-2">
                      {results[calculateResult(answers)].description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                        href={CONFIG.destinationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-8 py-5 bg-[#2D1810] text-white rounded-xl font-bold text-center hover:bg-[#8B5E3C] transition-all shadow-xl shadow-[#2D1810]/10"
                      >
                        Place your orders now
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          const result = results[calculateResult(answers)].title;
                          const message = `I just took the Celebration Flavor Profile Quiz and got "${result}". Can you explain what this means specifically for my event and suggest some specific cake flavors?`;
                          // Dispatch custom event for potential AI assistant
                          window.dispatchEvent(new CustomEvent('ai_assistant_trigger', { detail: message }));
                          alert("Explaining result with the AI assistant...");
                        }}
                        className="flex-1 px-8 py-5 border-2 border-[#D4B499] text-[#2D1810] rounded-xl font-bold hover:bg-[#D4B499]/10 transition-all text-center"
                      >
                        Explain my result
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="text-[#8B5E3C] font-semibold text-sm hover:underline flex items-center gap-2 mx-auto sm:mx-0"
                    >
                      Retake the Quiz
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Visual Side */}
            <div className="md:col-span-2 hidden md:block relative overflow-hidden">
              <img 
                src="https://i.ibb.co/WvB1DR9G/FB-IMG-1777951480657.jpg" 
                alt="Heavenly Bakers Special"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF7] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <p className="text-sm font-medium leading-relaxed italic">
                  "Found the perfect cake for my kid's birthday using this quiz. The recommendation was spot on!"
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">Happy Customer</span>
                  <div className="flex text-[#D4B499]">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const categories = [
    { name: "Celebration Cakes", image: "https://i.ibb.co/DDyThkbV/FB-IMG-1777434042528.jpg" },
    { name: "Office Meetings", image: "https://i.ibb.co/Rk1pShns/FB-IMG-1777951607396.jpg" },
    { name: "Doorgifts & Favors", image: "https://i.ibb.co/W4qKX93J/FB-IMG-1777434027702.jpg" },
    { name: "Daily Treats", image: "https://i.ibb.co/v6XF9xSQ/IMG-20260209-183210-522.webp" }
  ];

  return (
    <section id="products" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#8B5E3C] uppercase mb-4 block">Our Collections</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2D1810] tracking-tight">Crafted for Every <span className="italic serif">Moment.</span></h2>
          </div>
          <a 
            href={CONFIG.destinationUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="group text-[12px] font-bold uppercase tracking-[0.2em] text-[#8B5E3C] flex items-center gap-3"
          >
            Explore Menu <div className="w-12 h-[1px] bg-[#D4B499] group-hover:w-16 transition-all"></div>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-[#D4B499]/10 group-hover:border-[#D4B499]/30 transition-colors">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#2D1810]/80 to-transparent">
                  <h3 className="text-2xl font-serif font-medium text-white tracking-wide">{cat.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "I can rely on your cakes with my eyes closed. The most delicious and everyone loves it. Quality is always maintained",
      author: "Ms Krija",
      context: "Loyal Customer"
    },
    {
      text: "This is one of the best chocolate cakes i've ever had",
      author: "Ms Shamala",
      context: "Cake Connoisseur"
    },
    {
      text: "It's really so delicious and it was a last-minute order yet you accept it and made it so nice. My office Colleagues and family really enjoyed it.",
      author: "Ms Hema",
      context: "Corporate Client"
    }
  ];

  return (
    <section className="py-40 px-8 bg-[#2D1810] text-[#FCFAF7] relative overflow-hidden">
      {/* Decorative vertical rail text */}
      <div className="absolute top-0 right-8 h-full hidden xl:flex items-center pointer-events-none">
        <div className="writing-vertical-rl rotate-180 text-[10px] font-bold uppercase tracking-[0.6em] text-[#D4B499]/20">
          The Art of Fine Baking — Since 2014
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex items-center gap-12">
          <div className="h-[1px] w-24 bg-[#D4B499]/30"></div>
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-tight">Voices of <span className="italic serif">Delight.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col h-full"
            >
              <div className="flex gap-1 mb-8 text-[#D4B499]">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-serif italic text-[#FCFAF7]/90 leading-relaxed mb-12">"{r.text}"</p>
              <div className="mt-auto">
                <p className="font-sans text-sm font-bold uppercase tracking-[0.2em]">{r.author}</p>
                <div className="h-[1px] w-12 bg-[#D4B499]/30 my-3"></div>
                <p className="text-[#D4B499]/60 text-[11px] font-bold uppercase tracking-widest">{r.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto bg-[#FCFAF7] p-16 rounded-[3rem] border border-[#D4B499]/20 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4B499]/10 rounded-full" />
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D1810]">Ready for your next celebration?</h2>
          <p className="text-xl text-[#2D1810]/70 max-w-2xl mx-auto">
            Book a call or a demo today. We accept last-minute orders and maintain the highest quality for every single cake.
          </p>
          <div className="pt-6">
            <a
              href={CONFIG.destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D1810] text-white rounded-full font-bold text-xl hover:scale-105 hover:bg-[#8B5E3C] transition-all shadow-xl shadow-[#2D1810]/20"
            >
              {CONFIG.primaryCta}
              <ChevronRight />
            </a>
          </div>
          <p className="text-sm text-[#8B5E3C] font-semibold italic">
            Trusted by loyal customers for over 10 years.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you keep prices low if you use premium ingredients?",
      answer: "We focus on the essentials: taste and quality. By keeping our decorations simple and honest, and working directly with local suppliers, we pass the savings on to you without compromising on the premium experience."
    },
    {
      question: "Do you provide delivery?",
      answer: "Yes, we offer delivery services for all our cakes and pastries! Delivery fees vary based on distance. You can inquire about delivery when placing your order inquiry."
    },
    {
      question: "How far in advance should I place my order?",
      answer: "For most standard cakes, we recommend ordering at least 2-3 days in advance. However, we are known for accepting last-minute orders when our schedule permits—just ask!"
    },
    {
      question: "Do you cater for office meetings or large events?",
      answer: "Absolutely! We specialize in packs for office meetings, doorgifts for corporate events, and large-scale celebrations. Contact us for bulk pricing and custom arrangements."
    },
    {
      question: "What makes your cakes 'Heavenly'?",
      answer: "It's our 10+ years of mastery and commitment to consistency. Every cake is baked with love and follows time-tested recipes that have made us a crowd-favorite."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#2D1810]">Frequently Asked Questions</h2>
          <p className="mt-4 text-[#2D1810]/70">Everything you need to know about our cakes and orders.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-[#D4B499]/20 rounded-2xl overflow-hidden bg-[#FCFAF7]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#D4B499]/5 transition-colors"
              >
                <span className="font-serif font-bold text-lg text-[#2D1810]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#8B5E3C]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-[#2D1810]/70 leading-relaxed border-t border-[#D4B499]/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#2D1810] text-[#D4B499]/60 px-8 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-white uppercase tracking-tight">
              <Cake size={20} className="text-[#D4B499]" />
              <span className="font-serif text-2xl font-medium">Heavenly Bakers</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-light">
              Crafting premium architectural cakes and daily delicacies with an unwavering commitment to flavor and accessibility.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/heavenly_bakers?utm_medium=copy_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-[#D4B499]"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/Heavenlybakers123/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-[#D4B499]"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Business Hours</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white text-lg font-serif">Open Daily</p>
                <p className="text-[13px] tracking-wide font-light">8:00 AM — 10:00 PM</p>
              </div>
              <p className="text-[10px] italic opacity-60 leading-relaxed">
                * Closed on selected Public Holidays unless stated otherwise.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-3 text-[13px] tracking-wide font-light">
              <li><a href="#products" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#quiz-section" className="hover:text-white transition-colors">Cake Match Quiz</a></li>
              <li><a href={CONFIG.destinationUrl} className="hover:text-white transition-colors">Order Inquiry</a></li>
            </ul>
          </div>

          <div className="space-y-6 text-right md:text-left lg:text-right">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Contact</h4>
            <div className="space-y-2">
              <p className="text-white text-lg font-serif">Halal Friendly</p>
              <p className="text-[13px] tracking-wide font-light leading-relaxed max-w-[200px] lg:ml-auto">
                Carefully sourced and prepared in accordance with halal standards.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {CONFIG.businessName}</p>
          <div className="flex gap-12 opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
          <div className="flex items-center gap-2 text-[#D4B499]">
            <ShieldCheck size={12} />
            Secure Order Process
          </div>
        </div>
      </div>
    </footer>
  );
};

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<{ role: 'assistant' | 'user'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const context = {
    businessName: "Heavenly Bakers Cakes & Pastries",
    primaryGoal: "Place your orders now",
    destinationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc6yWspccUqwY6K5uC_TT1tGDvR7mctLcC7pkBgMQtBY0v6ag/viewform",
    leadMagnetTitle: "The Celebration Flavor Profile Quiz",
    tone: "Professional, Elite, Warm, Supportive"
  };

  const getStatus = () => {
    const completed = sessionStorage.getItem('leadMagnetCompleted') === 'true';
    const result = sessionStorage.getItem('leadMagnetResult');
    return { completed, result };
  };

  useEffect(() => {
    // Teaser after 10 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowTeaser(true);
    }, 10000);

    // Listen for custom trigger from Quiz
    const handleTrigger = (e: any) => {
      setIsOpen(true);
      setShowTeaser(false);
      const userMsg = e.detail;
      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
      generateResponse(userMsg);
    };

    window.addEventListener('ai_assistant_trigger', handleTrigger);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('ai_assistant_trigger', handleTrigger);
    };
  }, [isOpen]);

  const generateResponse = async (userInput?: string) => {
    setIsTyping(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const status = getStatus();
    let responseText = "";

    if (userInput) {
      if (status.completed) {
        responseText = `As sugarbug, your personal concierge, I'm delighted to elaborate. Your result, "${status.result}", suggests you value both quality and efficiency. For your specific event, I recommend our signature Belgian Chocolate Ganache or our Light Vanilla Bean Sponge. Both are crowd favorites that maintain a premium profile while being perfectly suited for your group size. Would you like to proceed with an order inquiry?`;
      } else {
        responseText = `That's a great question. To give you the most accurate advice, I highly recommend taking our ${context.leadMagnetTitle}. It only takes a minute and will help me understand exactly what you're looking for!`;
      }
    } else {
      if (!status.completed) {
        responseText = `Welcome to Heavenly Bakers. I am sugarbug, your personal concierge. To ensure we provide the perfect selection for your upcoming occasion, may I suggest starting with our ${context.leadMagnetTitle}? It's designed to find the ideal match for your specific vibe and guest count.`;
      } else {
        responseText = `Welcome back. I see you've identified yourself as a "${status.result}". This is an excellent choice. Based on your profile, I recommend moving forward with your order inquiry to lock in your date. Our premium cakes are in high demand!`;
      }
    }

    setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
    setIsTyping(false);
  };

  const toggleAssistant = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    setShowTeaser(false);
    
    if (nextState && messages.length === 0) {
      generateResponse();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Teaser Bubble */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-4 mr-2 bg-white p-4 rounded-2xl shadow-2xl border border-[#D4B499]/20 max-w-[240px] relative"
          >
            <p className="text-sm font-medium text-[#2D1810]">
              {getStatus().completed 
                ? `Curious what ${getStatus().result} really means for you?`
                : `Want to find your perfect cake match? Our quick quiz can help.`}
            </p>
            <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-[#D4B499]/20"></div>
            <button 
              onClick={() => setShowTeaser(false)}
              className="absolute -top-2 -left-2 bg-[#2D1810] text-white rounded-full p-1 shadow-md hover:bg-red-500 transition-colors"
            >
              <X size={10} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Assistant Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-[#D4B499]/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#2D1810] p-8 flex items-center justify-between text-white border-b border-[#D4B499]/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4B499] rounded-full flex items-center justify-center p-0.5">
                  <div className="w-full h-full rounded-full border border-[#2D1810]/20 flex items-center justify-center">
                    <ShieldCheck className="text-[#2D1810]" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-xl leading-none">sugarbug</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="w-1 h-1 bg-[#D4B499] rounded-full animate-pulse"></div>
                    <p className="text-[9px] text-[#D4B499] uppercase tracking-[0.3em] font-bold">Privileged Concierge</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#FCFAF7] noise-bg">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-2xl text-[13px] leading-[1.6] shadow-sm ${
                    msg.role === 'assistant' 
                      ? 'bg-white text-[#2D1810] border border-[#D4B499]/10 font-light' 
                      : 'bg-[#2D1810] text-[#FCFAF7] font-medium'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-5 rounded-2xl border border-[#D4B499]/10 shadow-sm">
                    <div className="flex gap-1.5">
                      <div className="w-1 h-1 bg-[#D4B499] rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-[#D4B499] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1 h-1 bg-[#D4B499] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA in Chat */}
            <div className="p-6 border-t border-[#D4B499]/10 bg-white">
              <div className="flex flex-col gap-3">
                <a
                  href={context.destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-[#2D1810] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full text-center hover:bg-[#8B5E3C] transition-all"
                >
                  Place your orders now
                </a>
                {!getStatus().completed && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      const element = document.getElementById('quiz-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full px-6 py-4 border border-[#D4B499] text-[#2D1810] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#D4B499]/5 transition-all"
                  >
                    Take the Quiz
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        type="button"
        onClick={toggleAssistant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(45,24,16,0.3)] transition-all duration-700 z-50 border-4 border-white ${
          isOpen ? 'bg-[#8B5E3C] rotate-90' : 'bg-[#2D1810]'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={32} />
        ) : (
          <div className="relative">
            <Cake className="text-[#D4B499]" size={36} strokeWidth={1.5} />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4B499] rounded-full border-2 border-[#2D1810]"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] font-sans text-[#2D1810] selection:bg-[#D4B499]/30 relative">
      <title>Heavenly Bakers | Premium Affordable Cakes</title>
      <meta name="description" content="Heavenly Bakers provides premium quality cakes at affordable prices. Order for celebrations, meetings, or daily treats. Trusted for 10+ years." />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] noise-bg"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ValueProposition />
          <Products />
          <section id="quiz-section">
            <Quiz />
          </section>
          <Testimonials />
          <CTASection />
          <FAQ />
        </main>
        <Footer />
        <Assistant />
      </div>
    </div>
  );
}

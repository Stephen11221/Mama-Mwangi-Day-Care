/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Baby, 
  Sun, 
  Smile, 
  ShieldCheck, 
  BookOpen, 
  Palette, 
  Utensils, 
  Moon, 
  ArrowRight, 
  Star,
  Users
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'care' | 'routine' | 'hours' | 'contact'>('home');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<'toddlers' | 'explorers' | 'preschool'>('explorers');
  
  // Enquiry form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formAge, setFormAge] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneNumber = '0716802322';
  const whatsappNumber = '254716802322';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Mwingi+Level+IV+Hospital+Mwingi+Town+Kitui+County+Kenya';

  const createWhatsAppLink = (customText?: string) => {
    const text = customText || 'Hello Madam Hellen (Mama Mwangi), I would like to enquire about Baby Dare Care in Mwingi.';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      return;
    }

    const draft = `Hello Madam Hellen (Mama Mwangi), I would like to enquire about Baby Dare Care (Mwingi Day Care).\n\n` +
      `• Parent/Guardian: ${formName.trim()}\n` +
      `• Phone Number: ${formPhone.trim()}\n` +
      `• Child's Age: ${formAge.trim() || 'Not specified'}\n` +
      (formMessage.trim() ? `• Notes/Questions: ${formMessage.trim()}` : '');

    setFormSubmitted(true);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(draft)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string, tabName: 'home' | 'about' | 'care' | 'routine' | 'hours' | 'contact') => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dailySchedule = [
    {
      time: '6:00 AM – 8:00 AM',
      title: 'Warm Welcome & Free Play',
      desc: 'Gentle arrival, morning hugs from caregivers, and cozy free play as friends arrive.',
      icon: Sun,
      color: 'bg-[#fff3dc] text-[#d96f58]',
    },
    {
      time: '8:30 AM',
      title: 'Breakfast & Circle Time',
      desc: 'Nutritious breakfast followed by morning greetings, songs, and cheerful prayer.',
      icon: Utensils,
      color: 'bg-[#f9ead0] text-[#785c42]',
    },
    {
      time: '9:30 AM – 11:00 AM',
      title: 'Creative Learning & Phonics',
      desc: 'Early letters, counting, finger painting, coloring, and tactile sensory exploration.',
      icon: BookOpen,
      color: 'bg-[#dcebdc] text-[#344e48]',
    },
    {
      time: '11:30 AM',
      title: 'Sunny Playground Play',
      desc: 'Running, climbing, games, and fresh air to build motor skills and friendships.',
      icon: Smile,
      color: 'bg-[#fff3dc] text-[#a74f3e]',
    },
    {
      time: '12:30 PM – 2:30 PM',
      title: 'Warm Lunch & Peaceful Nap',
      desc: 'Freshly prepared wholesome meal, calming wash-up, and supervised quiet rest time.',
      icon: Moon,
      color: 'bg-[#f9ead0] text-[#172c40]',
    },
    {
      time: '3:00 PM – 6:00 PM',
      title: 'Afternoon Stories & Family Pick-Up',
      desc: 'Healthy snack, music, storytelling, and joyful reunions with parents.',
      icon: Heart,
      color: 'bg-[#dcebdc] text-[#344e48]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff9ef] text-[#172c40] font-sans selection:bg-[#f9ead0] selection:text-[#172c40]">
      {/* ================= 1. CUTE & PROFESSIONAL TOP BAR ================= */}
      <header className="sticky top-0 z-50 bg-[#fff9ef]/95 backdrop-blur-md border-b border-[#172c40]/10 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Brand Zone */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home', 'home'); }}
            className="group flex items-center gap-3 text-[#172c40] whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#f9ead0] to-[#fff3dc] border border-[#d96f58]/30 flex items-center justify-center text-[#d96f58] shadow-xs group-hover:scale-105 transition-transform">
              <Baby className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight font-display text-lg sm:text-xl text-[#172c40] leading-tight">
                Mwingi Day Care
              </span>
              <span className="text-[11px] font-medium text-[#a74f3e] tracking-wide flex items-center gap-1">
                <Heart className="w-2.5 h-2.5 fill-[#a74f3e]" />
                Mama Mwangi · Baby Dare Care
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#172c40]">
            <button 
              onClick={() => scrollToSection('home', 'home')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'home' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about', 'about')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'about' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              About Mama Mwangi
            </button>
            <button 
              onClick={() => scrollToSection('care', 'care')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'care' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Care & Learning
            </button>
            <button 
              onClick={() => scrollToSection('routine', 'routine')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'routine' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Daily Routine
            </button>
            <button 
              onClick={() => scrollToSection('hours', 'hours')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'hours' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Hours & Location
            </button>
            <button 
              onClick={() => scrollToSection('contact', 'contact')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'contact' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Quick Call & Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a 
              href={`tel:${phoneNumber}`}
              className="text-xs font-semibold text-[#172c40] hover:text-[#d96f58] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d96f58]" />
              <span>{phoneNumber}</span>
            </a>
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#172c40] text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-[#203c57] transition-all shadow-sm whitespace-nowrap shrink-0 active:scale-95"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#172c40] text-white text-xs font-bold whitespace-nowrap"
            >
              WhatsApp ↗
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#172c40] hover:bg-[#f9ead0] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#172c40]/10 bg-[#fff9ef] px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3.5 text-base font-medium">
              <button 
                onClick={() => scrollToSection('home', 'home')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about', 'about')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                About Mama Mwangi
              </button>
              <button 
                onClick={() => scrollToSection('care', 'care')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Care & Learning
              </button>
              <button 
                onClick={() => scrollToSection('routine', 'routine')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Daily Routine
              </button>
              <button 
                onClick={() => scrollToSection('hours', 'hours')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Hours & Location
              </button>
              <button 
                onClick={() => scrollToSection('contact', 'contact')}
                className="text-left py-2 hover:text-[#d96f58]"
              >
                Contact
              </button>

              <div className="pt-3 flex flex-col gap-2">
                <a 
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-xl bg-[#172c40] text-white font-bold text-sm shadow-sm"
                >
                  Chat on WhatsApp ↗
                </a>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="w-full text-center py-2.5 rounded-xl border border-[#172c40]/20 text-[#172c40] font-medium text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d96f58]" />
                  Call {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ================= 2. HERO SECTION ================= */}
        <section id="home" className="relative pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle playful background circles */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#f9ead0]/40 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-[#dcebdc]/40 blur-2xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline and Story */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Cute Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f9ead0] border border-[#a74f3e]/20 text-xs font-semibold text-[#a74f3e]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d96f58]" />
                  <span>MWINGI TOWN · CARING FOR CHILDREN SINCE 1990</span>
                </div>

                {/* Main Hero Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#172c40] leading-[1.18] font-display text-balance">
                  A loving place for big beginnings.
                </h1>

                {/* Hero Intro */}
                <p className="text-base sm:text-lg text-[#526373] leading-relaxed max-w-xl">
                  Welcome to <strong>Baby Dare Care</strong> — fondly known throughout Mwingi as <strong>Mama Mwangi Day Care</strong>. We offer a safe, warm, and joyful home away from home where your little one is cherished, nourished, and encouraged to grow.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a 
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#d96f58] text-white font-bold text-base hover:bg-[#c85e47] transition-all shadow-md active:scale-95"
                  >
                    Enquire on WhatsApp ↗
                  </a>
                  <button 
                    onClick={() => scrollToSection('about', 'about')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#172c40] font-bold text-base border border-[#172c40]/15 hover:border-[#172c40] hover:bg-[#f9ead0]/40 transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    <span>Meet Mama Mwangi</span>
                    <ArrowRight className="w-4 h-4 text-[#a74f3e]" />
                  </button>
                </div>

                {/* Reassurance pills */}
                <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#526373]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Ages 0 to 6+ Years</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mon – Sat (6 AM – 6 PM)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Near Mwingi Level IV Hospital</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Playground Picture with Cute Floaters */}
              <div className="lg:col-span-5 relative">
                
                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] bg-[#f9ead0]">
                  <img 
                    src="/images/hero_children.jpg"
                    alt="Happy smiling African children enjoying a joyful moment together at Mwingi Day Care playground."
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating cute badge 1 */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-4 sm:-left-6 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-[#172c40]/10 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fff3dc] text-[#d96f58] flex items-center justify-center shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center text-amber-500 text-xs gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs font-bold text-[#172c40] block">Loved by Parents</span>
                    <span className="text-[11px] text-[#526373]">Safe & Happy Environment</span>
                  </div>
                </div>

                {/* Floating cute badge 2 */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-[#172c40]/10 shadow-md items-center gap-2 text-xs font-bold text-[#344e48]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Enrolling All Ages</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= 3. FOUR CUTE & UNIQUE PILLARS ================= */}
        <section className="py-12 bg-white/60 border-y border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-xs space-y-3 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center text-[#344e48] shadow-xs">
                  <Heart className="w-5 h-5 fill-[#344e48]/20" />
                </div>
                <h3 className="text-lg font-semibold text-[#172c40] font-display">
                  Tender, Loving Care
                </h3>
                <p className="text-xs sm:text-sm text-[#344e48] leading-relaxed">
                  Every infant and child receives patient, motherly love and personalized attention just like at home.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 shadow-xs space-y-3 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center text-[#d96f58] shadow-xs">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#172c40] font-display">
                  Creative Play & Phonics
                </h3>
                <p className="text-xs sm:text-sm text-[#526373] leading-relaxed">
                  Fun finger painting, alphabet games, building blocks, and counting to stimulate natural curiosity.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-3xl bg-[#f9ead0] border border-[#785c42]/20 shadow-xs space-y-3 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center text-[#785c42] shadow-xs">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#172c40] font-display">
                  Meals & Sweet Naps
                </h3>
                <p className="text-xs sm:text-sm text-[#526373] leading-relaxed">
                  Healthy feeding routines, clean wash-ups, and peaceful supervised rest rooms for growing bodies.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-3xl bg-[#fff9ef] border border-[#172c40]/15 shadow-xs space-y-3 hover:translate-y-[-2px] transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#172c40] shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#172c40] font-display">
                  Safe & Accessible
                </h3>
                <p className="text-xs sm:text-sm text-[#526373] leading-relaxed">
                  Conveniently situated by Mwingi Level IV Hospital in Kiberiti Area. Safe gate with trusted staff.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 4. MEET MADAM HELLEN (MAMA MWANGI) ================= */}
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                OUR STORY & FOUNDER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Meet Madam Hellen (Mama Mwangi)
              </h2>
              <p className="text-sm sm:text-base text-[#526373]">
                Over 30 years of gentle dedication, nurturing Mwingi's children since 1990.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Permanent Real Photograph Frame */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 rounded-3xl bg-[#f9ead0] border border-[#785c42]/20 shadow-md space-y-5">
                  
                  {/* The Permanent User-Uploaded Photograph */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[460px] mx-auto w-full bg-white shadow-inner border border-[#785c42]/20">
                    <img 
                      src="/images/founder_madam_hellen.jpg"
                      alt="Madam Hellen Joseph Ndungu (Mama Mwangi), Founder of Mwingi Day Care"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Profile Details */}
                  <div className="space-y-1 text-center">
                    <span className="text-xs font-bold text-[#a74f3e] uppercase tracking-wider block">
                      Founder & Lead Caregiver
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Madam Hellen Joseph Ndungu
                    </h3>
                    <p className="text-sm font-medium text-[#785c42]">
                      Fondly known as Mama Mwangi
                    </p>
                    <p className="text-xs text-[#526373]">
                      Baby Dare Care · Mwingi Day Care
                    </p>
                  </div>

                  <a 
                    href={createWhatsAppLink("Hello Madam Hellen (Mama Mwangi), I would love to talk about care for my child.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#172c40] text-white text-sm font-bold hover:bg-[#203c57] transition-all shadow-sm active:scale-98"
                  >
                    Message Mama Mwangi ↗
                  </a>

                </div>
              </div>

              {/* Right Column: Heartfelt Story Narrative */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                    "Every child who walks through our doors is loved as our own."
                  </h3>
                  
                  <p className="text-base text-[#526373] leading-relaxed">
                    Baby Dare Care was established by <strong>Madam Hellen Joseph Ndungu</strong>, a hardworking, patient, and deeply caring childcare professional dedicated to caring for children since <strong>1990</strong>.
                  </p>
                  
                  <p className="text-base text-[#526373] leading-relaxed">
                    With over <strong>three decades of hands-on experience</strong>, she brings exceptional patience, kindness, and a steady commitment to creating a safe and loving environment. Generation after generation of Mwingi parents have entrusted their little ones to her warm care.
                  </p>
                </div>

                {/* 3 Core Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-[#172c40]/10 space-y-1">
                    <span className="block text-2xl font-bold text-[#d96f58] font-display">30+ Yrs</span>
                    <span className="text-xs text-[#526373] font-medium block">Proven Experience</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#172c40]/10 space-y-1">
                    <span className="block text-2xl font-bold text-[#a74f3e] font-display">1990</span>
                    <span className="text-xs text-[#526373] font-medium block">Founded in Mwingi</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#172c40]/10 space-y-1">
                    <span className="block text-2xl font-bold text-[#344e48] font-display">100%</span>
                    <span className="text-xs text-[#526373] font-medium block">Personal Attention</span>
                  </div>
                </div>

                {/* Values Checklist */}
                <div className="p-5 rounded-2xl bg-[#dcebdc]/60 border border-[#344e48]/15 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#344e48] block">
                    Our Founder’s Promise to Parents
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#172c40]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Unwavering safety & hygiene</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Honest, daily parent communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Patient, gentle discipline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Warm Christian values & kindness</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= 5. CARE & LEARNING BY AGE GROUPS ================= */}
        <section id="care" className="py-16 sm:py-24 bg-white/70 border-y border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                  CARE & LEARNING
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                  The little moments matter.
                </h2>
                <p className="text-sm sm:text-base text-[#526373] max-w-xl">
                  Every age has unique milestones. Our programs encourage discovery, connection, and confidence.
                </p>
              </div>

              {/* Age selection tabs */}
              <div className="flex items-center gap-1.5 p-1.5 bg-[#f9ead0] rounded-2xl border border-[#785c42]/15 self-start">
                <button
                  onClick={() => setSelectedAgeGroup('toddlers')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedAgeGroup === 'toddlers' 
                      ? 'bg-white text-[#172c40] shadow-xs' 
                      : 'text-[#785c42] hover:text-[#172c40]'
                  }`}
                >
                  Babies (0–2 yrs)
                </button>
                <button
                  onClick={() => setSelectedAgeGroup('explorers')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedAgeGroup === 'explorers' 
                      ? 'bg-white text-[#172c40] shadow-xs' 
                      : 'text-[#785c42] hover:text-[#172c40]'
                  }`}
                >
                  Explorers (2–4 yrs)
                </button>
                <button
                  onClick={() => setSelectedAgeGroup('preschool')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedAgeGroup === 'preschool' 
                      ? 'bg-white text-[#172c40] shadow-xs' 
                      : 'text-[#785c42] hover:text-[#172c40]'
                  }`}
                >
                  Pre-School (4–6+ yrs)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: African Children Learning Photo */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[16/10] bg-[#dcebdc]">
                  <img 
                    src="/images/care_learning.jpg"
                    alt="African young children happily engaged in creative play, painting, and learning with their teacher at Mwingi Day Care."
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#172c40] shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#d96f58]" />
                    <span>Creative Learning Room</span>
                  </div>
                </div>
              </div>

              {/* Right: Selected Age Group Highlights */}
              <div className="lg:col-span-5 space-y-6">
                
                {selectedAgeGroup === 'toddlers' && (
                  <div className="p-7 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 shadow-xs space-y-4 animate-in fade-in duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d96f58] block">
                      Ages 0 to 2 Years · Gentle Beginnings
                    </span>
                    <h3 className="text-xl font-semibold text-[#172c40] font-display">
                      Cuddles, Milestones & Peaceful Rhythms
                    </h3>
                    <p className="text-sm text-[#526373] leading-relaxed">
                      We mirror your home feeding and nap schedules. Soft carpets, sensory toys, and dedicated arms ensure your infant feels completely loved and secure.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#172c40] pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#d96f58]" />
                        <span>Individual feeding & nap tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#d96f58]" />
                        <span>Gentle tummy time & crawl spaces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#d96f58]" />
                        <span>Constant watchful supervision</span>
                      </li>
                    </ul>
                  </div>
                )}

                {selectedAgeGroup === 'explorers' && (
                  <div className="p-7 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-xs space-y-4 animate-in fade-in duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#344e48] block">
                      Ages 2 to 4 Years · Little Explorers
                    </span>
                    <h3 className="text-xl font-semibold text-[#172c40] font-display">
                      Words, Colors & Social Friendships
                    </h3>
                    <p className="text-sm text-[#344e48] leading-relaxed">
                      Toddlers begin developing speech, motor coordination, and curiosity. We guide them with joyful rhymes, color identification, and gentle sharing.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#172c40] pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#344e48]" />
                        <span>Finger painting, play-dough & building</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#344e48]" />
                        <span>Patient potty training partnership</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#344e48]" />
                        <span>English & Kiswahili song circle</span>
                      </li>
                    </ul>
                  </div>
                )}

                {selectedAgeGroup === 'preschool' && (
                  <div className="p-7 rounded-3xl bg-[#f9ead0] border border-[#785c42]/20 shadow-xs space-y-4 animate-in fade-in duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#a74f3e] block">
                      Ages 4 to 6+ Years · Pre-School & Kindergarten
                    </span>
                    <h3 className="text-xl font-semibold text-[#172c40] font-display">
                      Confidence, Early Phonics & Numbers
                    </h3>
                    <p className="text-sm text-[#526373] leading-relaxed">
                      Preparing young minds for primary school with foundational reading, counting, pencil grip, independence, and respectful team habits.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#172c40] pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#a74f3e]" />
                        <span>Early phonics, writing & counting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#a74f3e]" />
                        <span>Confidence, manners & teamwork</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#a74f3e]" />
                        <span>Active sports & playground games</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Quick Consultation note */}
                <div className="p-5 rounded-2xl bg-[#fff9ef] border border-[#172c40]/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-bold text-[#a74f3e] uppercase tracking-wider">Unsure which group?</span>
                    <span className="text-xs sm:text-sm text-[#172c40] font-medium">We assess every child individually.</span>
                  </div>
                  <a 
                    href={createWhatsAppLink("Hello! I would like to find out which care group is best for my child.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#d96f58] hover:underline shrink-0"
                  >
                    Ask Us ↗
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= 6. A TYPICAL JOYFUL DAY (ROUTINE TIMELINE) ================= */}
        <section id="routine" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                PEACE OF MIND FOR PARENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                A Joyful Day at Baby Dare Care
              </h2>
              <p className="text-sm sm:text-base text-[#526373]">
                Structured routines give young children stability, predictability, and freedom to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailySchedule.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-[#172c40]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-[#fff9ef] text-[#a74f3e] border border-[#a74f3e]/15">
                        {item.time}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-semibold text-[#172c40] font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#526373] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 7. OPENING HOURS & HOW TO REACH US ================= */}
        <section id="hours" className="py-16 sm:py-24 bg-white/70 border-t border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                PLAN YOUR WEEK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Opening Hours & Location
              </h2>
            </div>

            {/* Hours Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Monday to Saturday */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 shadow-xs flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d96f58] block">
                      Full Weekday Care
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Monday to Saturday
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#172c40] shadow-xs">
                    <Clock className="w-5 h-5 text-[#d96f58]" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#172c40] font-display tracking-tight">
                    6:00 AM – 6:00 PM
                  </div>
                  <p className="text-xs sm:text-sm text-[#526373] mt-2 leading-relaxed">
                    Flexible drop-off and pickup times tailored to working parents and business owners across Mwingi.
                  </p>
                </div>
              </div>

              {/* Sunday */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-xs flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#344e48] block">
                      Family Rest Day
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Sunday
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center text-[#344e48] shadow-xs">
                    <Calendar className="w-5 h-5 text-[#344e48]" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#172c40] font-display tracking-tight">
                    Closed
                  </div>
                  <p className="text-xs sm:text-sm text-[#344e48] mt-2 leading-relaxed">
                    Dedicated family time, worship, and deep facility sanitization in preparation for Monday.
                  </p>
                </div>
              </div>

            </div>

            {/* Location & Directions Banner */}
            <div className="p-7 sm:p-10 rounded-3xl bg-[#f9ead0] border border-[#785c42]/20 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a74f3e]">
                  <MapPin className="w-4 h-4 text-[#d96f58]" />
                  <span>How to Reach Us</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                  Along Mwingi Level IV Hospital, around Kiberiti Area
                </h3>
                <p className="text-sm text-[#526373]">
                  Mwingi Town, Kitui County, Kenya. Use Mwingi Level IV Hospital as your main landmark.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#d96f58] text-white font-bold text-sm hover:bg-[#c85e47] transition-all shadow-sm active:scale-95"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Maps ↗</span>
                </a>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-[#172c40] border border-[#172c40]/20 font-bold text-sm hover:bg-white/80 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#d96f58]" />
                  <span>Call {phoneNumber}</span>
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* ================= 8. ENQUIRY & WHATSAPP CHAT ================= */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                LET’S CONNECT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Let’s start a conversation.
              </h2>
              <p className="text-sm sm:text-base text-[#526373] max-w-2xl">
                Thinking about enrolling or want to schedule a visit? Reach out on WhatsApp or fill out the form below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Direct Phone & WhatsApp card */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="p-7 sm:p-8 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-sm space-y-6">
                  
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#344e48] uppercase tracking-wider block">Direct Phone Line</span>
                    <h3 className="text-xl font-semibold text-[#172c40] font-display">
                      Call Madam Hellen
                    </h3>
                    <p className="text-xs text-[#344e48]">
                      Speak with our founder directly during operating hours
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 border border-[#344e48]/15 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#526373] block">Mobile Number</span>
                      <a 
                        href={`tel:${phoneNumber}`}
                        className="text-2xl font-bold text-[#172c40] hover:text-[#d96f58] transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="p-3 rounded-full bg-[#344e48] text-white hover:bg-[#203c57] transition-colors shadow-xs"
                      aria-label="Call daycare phone"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>

                  <div>
                    <a 
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#172c40] text-white font-bold text-base hover:bg-[#203c57] transition-all shadow-md active:scale-95"
                    >
                      Chat on WhatsApp ↗
                    </a>
                  </div>

                </div>

                {/* Walk-in notice */}
                <div className="p-6 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 space-y-2">
                  <div className="flex items-center gap-2 text-[#d96f58] font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="w-4 h-4" />
                    <span>Parent Visits Always Welcome</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#526373] leading-relaxed">
                    You are very welcome to tour the classrooms, check our rest areas, and meet Madam Hellen in person before enrolling.
                  </p>
                </div>

              </div>

              {/* Right Column: Send an Enquiry Interactive Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#172c40]/10 shadow-lg space-y-6">
                  
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d96f58] block">
                      Fast Parent Enquiry
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Send an enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526373]">
                      Fill in the details below, then review and send your pre-filled message directly in WhatsApp.
                    </p>
                  </div>

                  {formSubmitted && (
                    <div className="p-4 rounded-2xl bg-[#dcebdc] border border-[#344e48]/20 text-[#344e48] text-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">WhatsApp Draft Created!</span>
                        Your message draft has opened in WhatsApp. Simply tap "Send" to deliver it to Madam Hellen.
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div>
                      <label htmlFor="parent-name" className="block text-xs font-bold text-[#172c40] uppercase tracking-wider mb-1.5">
                        Parent or guardian name <span className="text-[#d96f58]">*</span>
                      </label>
                      <input 
                        id="parent-name"
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Grace Mwende"
                        className="w-full px-4 py-3 rounded-2xl border border-[#172c40]/15 bg-[#fff9ef]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone-number" className="block text-xs font-bold text-[#172c40] uppercase tracking-wider mb-1.5">
                          Phone number <span className="text-[#d96f58]">*</span>
                        </label>
                        <input 
                          id="phone-number"
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. 0712 345 678"
                          className="w-full px-4 py-3 rounded-2xl border border-[#172c40]/15 bg-[#fff9ef]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                        />
                      </div>

                      <div>
                        <label htmlFor="child-age" className="block text-xs font-bold text-[#172c40] uppercase tracking-wider mb-1.5">
                          Child’s age
                        </label>
                        <input 
                          id="child-age"
                          type="text"
                          value={formAge}
                          onChange={(e) => setFormAge(e.target.value)}
                          placeholder="e.g. 1 year 8 months"
                          className="w-full px-4 py-3 rounded-2xl border border-[#172c40]/15 bg-[#fff9ef]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiry-message" className="block text-xs font-bold text-[#172c40] uppercase tracking-wider mb-1.5">
                        Your message or questions
                      </label>
                      <textarea 
                        id="enquiry-message"
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Tell us about your expected start date or any special care needs..."
                        className="w-full px-4 py-3 rounded-2xl border border-[#172c40]/15 bg-[#fff9ef]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-[#526373] mb-4">
                        Your details are placed in a WhatsApp draft. They are shared only when you tap Send there.
                      </p>

                      <button 
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#d96f58] text-white font-bold text-base hover:bg-[#c85e47] transition-all shadow-md active:scale-98 cursor-pointer"
                      >
                        <span>Continue to WhatsApp ↗</span>
                      </button>
                    </div>

                  </form>

                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* ================= 9. WARM & COZY FOOTER ================= */}
      <footer className="bg-[#172c40] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#172c40]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            
            {/* Brand in Footer */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f4bc59] flex items-center justify-center text-[#172c40]">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display leading-tight">
                    Mwingi Day Care
                  </h3>
                  <span className="text-xs text-[#f4bc59] font-medium block">
                    Mama Mwangi Day Care · Baby Dare Care
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-sm text-[#f9ead0]">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f4bc59] shrink-0" />
                  <span>Along Mwingi Level IV Hospital, Kiberiti Area, Mwingi Town, Kenya</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f4bc59] shrink-0" />
                  <a href={`tel:${phoneNumber}`} className="hover:underline hover:text-white transition-colors">
                    {phoneNumber}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-xs text-[#f9ead0]/70 pt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#f4bc59] shrink-0" />
                  <span>Open Monday to Saturday: 6:00 AM – 6:00 PM</span>
                </p>
              </div>
            </div>

            {/* Actions in Footer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a 
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#f4bc59] text-[#172c40] font-bold text-sm sm:text-base hover:bg-[#eab04c] transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                Chat on WhatsApp ↗
              </a>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all whitespace-nowrap"
              >
                Get Directions ↗
              </a>
            </div>

          </div>

          {/* Quick Footer Links & Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs sm:text-sm text-[#f9ead0]/80">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button onClick={() => scrollToSection('home', 'home')} className="hover:text-white transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => scrollToSection('about', 'about')} className="hover:text-white transition-colors cursor-pointer">
                About Mama Mwangi
              </button>
              <button onClick={() => scrollToSection('care', 'care')} className="hover:text-white transition-colors cursor-pointer">
                Care & Learning
              </button>
              <button onClick={() => scrollToSection('routine', 'routine')} className="hover:text-white transition-colors cursor-pointer">
                Daily Routine
              </button>
              <button onClick={() => scrollToSection('hours', 'hours')} className="hover:text-white transition-colors cursor-pointer">
                Opening Hours
              </button>
              <button onClick={() => scrollToSection('contact', 'contact')} className="hover:text-white transition-colors cursor-pointer">
                Contact
              </button>
            </div>

            <p className="text-xs text-[#f9ead0]/60">
              © {new Date().getFullYear()} Baby Dare Care · Mwingi Day Care (Mama Mwangi). Dedicated to caring for children since 1990.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

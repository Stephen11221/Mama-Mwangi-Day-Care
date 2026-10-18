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
  Baby
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'care' | 'hours' | 'contact'>('home');
  
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
      (formMessage.trim() ? `• Message: ${formMessage.trim()}` : '');

    setFormSubmitted(true);
    
    // Open WhatsApp draft in new tab
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(draft)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string, tabName: 'home' | 'about' | 'care' | 'hours' | 'contact') => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff9ef] text-[#172c40] font-sans selection:bg-[#f9ead0] selection:text-[#172c40]">
      {/* ================= TOP NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-50 bg-[#fff9ef]/95 backdrop-blur-md border-b border-[#172c40]/10 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Brand Zone */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home', 'home'); }}
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#172c40] whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#f9ead0] border border-[#d96f58]/30 flex items-center justify-center text-[#d96f58] shrink-0">
              <Baby className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight font-sans text-base sm:text-xl leading-tight">
                Mwingi Day Care
              </span>
              <span className="text-[11px] font-normal text-[#526373] tracking-normal">
                Mama Mwangi Day Care
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#172c40]">
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
              About
            </button>
            <button 
              onClick={() => scrollToSection('care', 'care')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'care' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Care & Learning
            </button>
            <button 
              onClick={() => scrollToSection('hours', 'hours')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'hours' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Opening Hours
            </button>
            <button 
              onClick={() => scrollToSection('contact', 'contact')}
              className={`hover:text-[#d96f58] transition-colors whitespace-nowrap cursor-pointer pb-1 ${activeTab === 'contact' ? 'text-[#d96f58] border-b-2 border-[#d96f58] font-semibold' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#172c40] text-white text-sm font-bold tracking-tight hover:bg-[#172c40]/90 transition-all shadow-sm whitespace-nowrap shrink-0 active:scale-95"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
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
              className="p-2 rounded-lg text-[#172c40] hover:bg-[#f9ead0] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#172c40]/10 bg-[#fff9ef] px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-medium">
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
                About
              </button>
              <button 
                onClick={() => scrollToSection('care', 'care')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Care & Learning
              </button>
              <button 
                onClick={() => scrollToSection('hours', 'hours')}
                className="text-left py-2 hover:text-[#d96f58] border-b border-[#172c40]/5"
              >
                Opening Hours
              </button>
              <button 
                onClick={() => scrollToSection('contact', 'contact')}
                className="text-left py-2 hover:text-[#d96f58]"
              >
                Contact
              </button>

              <div className="pt-2 flex flex-col gap-2">
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

      {/* Main Content Sections */}
      <main>
        {/* ================= 1. HERO SECTION ================= */}
        <section id="home" className="pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline and Actions */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Location Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                  <span>MWINGI TOWN · KITUI COUNTY · KENYA</span>
                </div>

                {/* Main Hero Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#172c40] leading-[1.18] font-display text-balance">
                  A little place for big beginnings.
                </h1>

                {/* Hero Intro */}
                <p className="text-base sm:text-lg text-[#526373] leading-relaxed max-w-xl">
                  Welcome to Baby Dare Care (also widely known as Mama Mwangi Day Care) — a caring, welcoming place for little ones and the families who love them.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a 
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d96f58] text-white font-bold text-base hover:bg-[#c85e47] transition-all shadow-sm active:scale-95"
                  >
                    Enquire on WhatsApp ↗
                  </a>
                  <button 
                    onClick={() => scrollToSection('about', 'about')}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#fff9ef] text-[#172c40] font-bold text-base border border-[#172c40]/25 hover:border-[#172c40] hover:bg-[#f9ead0]/50 transition-all active:scale-95 cursor-pointer"
                  >
                    Meet our founder
                  </button>
                </div>

                {/* Subtle trust badge */}
                <div className="pt-3 flex flex-wrap items-center gap-2 text-xs text-[#526373]">
                  <span className="w-2 h-2 rounded-full bg-[#d96f58]"></span>
                  <span>Mwingi Day Care · Mama Mwangi</span>
                  <span>·</span>
                  <span>Welcoming children ages 0 to 6+ years</span>
                  <span>·</span>
                  <span>Serving families since 1990</span>
                </div>
              </div>

              {/* Right Column: Hero Image with African Children */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] bg-[#f9ead0]">
                  <img 
                    src="/images/hero_children.jpg"
                    alt="Two smiling African children enjoying a joyful moment together outdoors at Mwingi Day Care playground in Kenya."
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 2. WELCOME IN / PHILOSOPHY ================= */}
        <section className="py-14 sm:py-20 bg-white/70 border-y border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                  WELCOME IN
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#172c40] font-display">
                  Care with heart, rooted in Mwingi.
                </h2>
                <p className="text-[#526373] text-base leading-relaxed max-w-2xl">
                  Choosing care for your child is personal. We welcome your questions and would love to start a conversation about what matters to your family.
                </p>
              </div>

              {/* Feature highlight card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-[#dcebdc] border border-[#344e48]/15 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#344e48]">
                    <Heart className="w-5 h-5 fill-[#344e48]/20" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#172c40] font-display">
                    A thoughtful welcome
                  </h3>
                  <p className="text-[#344e48] text-base leading-relaxed">
                    A caring, welcoming, nurturing and child-focused approach.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 3. ABOUT / OUR STORY SECTION ================= */}
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-10 space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                OUR STORY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Meet Madam Hellen (Mama Mwangi).
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Story Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <p className="text-base sm:text-lg text-[#526373] leading-relaxed">
                  Baby Dare Care — fondly known throughout Mwingi Town as <strong>Mama Mwangi Day Care</strong> — was founded by Madam Hellen Joseph Ndungu, a hardworking and caring child-care professional dedicated to caring for children since 1990.
                </p>
                <p className="text-base sm:text-lg text-[#526373] leading-relaxed">
                  With over 30 years of experience working with children, she brings patience, kindness and a deep commitment to a nurturing environment where every child can feel cared for, supported and encouraged to grow.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#fff9ef] border border-[#172c40]/10">
                    <span className="block text-2xl font-bold text-[#a74f3e] font-display">30+ Years</span>
                    <span className="text-xs sm:text-sm text-[#526373]">Child Care Experience</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#fff9ef] border border-[#172c40]/10">
                    <span className="block text-2xl font-bold text-[#a74f3e] font-display">Since 1990</span>
                    <span className="text-xs sm:text-sm text-[#526373]">Nurturing Mwingi Families</span>
                  </div>
                </div>
              </div>

              {/* Founder Profile Card with Hellen's Photo */}
              <div className="lg:col-span-5">
                <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#f9ead0] border border-[#785c42]/15 shadow-sm flex flex-col justify-between space-y-6">
                  
                  {/* Founder photo (Permanent 3:4 Portrait Frame) */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[460px] mx-auto w-full bg-white/70 border border-[#785c42]/20 shadow-sm">
                    <img 
                      src="/images/founder_madam_hellen.jpg"
                      alt="Madam Hellen Joseph Ndungu (Mama Mwangi), Founder of Mwingi Day Care"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#a74f3e] tracking-wide uppercase">
                      Founder, Baby Dare Care · Mwingi Day Care
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Madam Hellen Joseph Ndungu
                    </h3>
                    <p className="text-sm font-medium text-[#785c42]">
                      Also known as Mama Mwangi
                    </p>
                    <p className="text-xs text-[#526373]">
                      Dedicated educator & caregiver · Founder profile
                    </p>
                  </div>

                  <div className="pt-1">
                    <a 
                      href={createWhatsAppLink("Hello Madam Hellen (Mama Mwangi), I would love to connect and learn more about Baby Dare Care.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#172c40] text-white text-sm font-bold hover:bg-[#172c40]/90 transition-colors shadow-sm active:scale-98"
                    >
                      Connect with Madam Hellen ↗
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= 4. CARE & LEARNING SECTION ================= */}
        <section id="care" className="py-16 sm:py-24 bg-white/70 border-y border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-10 space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                CARE & LEARNING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                The little moments matter.
              </h2>
              <p className="text-base sm:text-lg text-[#526373] max-w-2xl leading-relaxed">
                Childhood is full of discovery, connection and play. We’re happy to talk with you about care and learning at Baby Dare Care and answer your questions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Classroom / Play Image with African Children */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[16/10] bg-[#dcebdc]">
                  <img 
                    src="/images/care_learning.jpg"
                    alt="African children and toddlers in a preschool daycare classroom in Kenya happily engaged in creative play, painting, and learning with their caring teacher."
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Note and routine card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-7 sm:p-8 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-[#344e48] font-semibold text-sm">
                    <Sparkles className="w-4 h-4 text-[#d96f58]" />
                    <span>Everyday Care Note</span>
                  </div>
                  <p className="text-base sm:text-lg text-[#172c40] font-medium leading-relaxed">
                    Ask us about everyday routines or anything you would like to know before visiting.
                  </p>
                  <p className="text-xs text-[#344e48] leading-relaxed">
                    We adapt to children’s natural sleep, feeding, and creative exploration rhythms with patient, attentive care in an environment that feels just like home.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fff9ef] border border-[#172c40]/10 flex items-center justify-between">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#a74f3e] font-semibold">Have a question?</span>
                    <span className="text-sm text-[#172c40] font-medium">We are ready to assist.</span>
                  </div>
                  <a 
                    href={createWhatsAppLink("Hello Madam Hellen! I have a question regarding daily routines at Baby Dare Care.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#d96f58] hover:underline"
                  >
                    Ask on WhatsApp ↗
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= 5. OPENING HOURS & HOW TO REACH US ================= */}
        <section id="hours" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                PLAN YOUR WEEK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Opening Hours
              </h2>
            </div>

            {/* Opening Hours Outer Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 shadow-sm space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Monday to Saturday Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#172c40]/10 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172c40] font-display">
                      Monday to Saturday
                    </h3>
                    <span className="p-2 rounded-lg bg-[#fff3dc] text-[#172c40]">
                      <Clock className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#172c40] tracking-tight">
                      6:00 AM – 6:00 PM
                    </div>
                    <span className="text-xs text-[#526373] mt-1 block">Full-day and flexible schedule options</span>
                  </div>
                </div>

                {/* Sunday Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#dcebdc] border border-[#344e48]/15 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#172c40] font-display">
                      Sunday
                    </h3>
                    <span className="p-2 rounded-lg bg-white/70 text-[#344e48]">
                      <Calendar className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#172c40] tracking-tight">
                      Closed
                    </div>
                    <span className="text-xs text-[#344e48] mt-1 block">Family rest and facility preparation</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Location & How to Reach Us Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#fff3dc] border border-[#f4bc59]/25 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#d96f58]" />
                    How to Reach Us
                  </h3>
                  <p className="text-sm sm:text-base text-[#172c40] font-medium">
                    Along Mwingi Level IV Hospital, around Kiberi Area, Mwingi Town, Kitui County, Kenya.
                  </p>
                </div>

                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#d96f58] text-white font-bold text-sm hover:bg-[#c85e47] transition-all whitespace-nowrap shadow-sm shrink-0 active:scale-95"
                >
                  Get Directions ↗
                </a>
              </div>

              {/* Location details on request placeholder card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#fff9ef] border border-[#172c40]/10 space-y-2">
                <h4 className="text-base font-semibold text-[#172c40]">
                  Location details on request
                </h4>
                <p className="text-sm sm:text-base text-[#526373] leading-relaxed">
                  Use Mwingi Level IV Hospital as the main landmark, then ask for Baby Dare Care (Mama Mwangi Day Care) around Kiberi Area.
                </p>
                <div className="pt-2 text-xs text-[#526373]">
                  Need real-time navigation or guidance over the phone? Call <a href={`tel:${phoneNumber}`} className="text-[#172c40] font-bold hover:underline">{phoneNumber}</a> anytime during operating hours.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= 6. LET'S CONNECT & ENQUIRY ================= */}
        <section id="contact" className="py-16 sm:py-24 bg-white/70 border-t border-[#172c40]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-10">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#a74f3e] uppercase">
                LET’S CONNECT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#172c40] font-display">
                Let’s start a conversation.
              </h2>
              <p className="text-base sm:text-lg text-[#526373] max-w-2xl leading-relaxed">
                Questions or thinking about a visit? Reach out on WhatsApp to ask for directions or discuss your child’s needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Direct Phone & WhatsApp Card */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="p-7 sm:p-8 rounded-3xl bg-[#dcebdc] border border-[#344e48]/15 shadow-sm space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#172c40] font-display">
                      Call or message
                    </h3>
                    <p className="text-xs text-[#344e48]">
                      Madam Hellen (Mama Mwangi) and our team are happy to assist you
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 border border-[#344e48]/15 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#526373] block">Phone / Mobile</span>
                      <a 
                        href={`tel:${phoneNumber}`}
                        className="text-2xl font-bold text-[#172c40] hover:text-[#d96f58] transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="p-3 rounded-full bg-[#344e48] text-white hover:bg-[#344e48]/90 transition-colors"
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#172c40] text-white font-bold text-base hover:bg-[#172c40]/90 transition-all shadow-sm active:scale-95"
                    >
                      Chat on WhatsApp ↗
                    </a>
                  </div>

                </div>

                {/* Helpful note card */}
                <div className="p-6 rounded-2xl bg-[#fff9ef] border border-[#172c40]/10 space-y-2">
                  <h4 className="text-sm font-semibold text-[#172c40]">Parent Visits & Walk-ins</h4>
                  <p className="text-xs text-[#526373] leading-relaxed">
                    You are very welcome to tour the facility, see the learning and rest environments, and meet Madam Hellen in person before enrolling.
                  </p>
                </div>

              </div>

              {/* Interactive Enquiry Form Card */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#172c40]/10 shadow-lg space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#172c40] font-display">
                      Send an enquiry
                    </h3>
                    <p className="text-sm sm:text-base text-[#526373]">
                      Fill in the details below, then review and send your message in WhatsApp.
                    </p>
                  </div>

                  {formSubmitted && (
                    <div className="p-4 rounded-xl bg-[#dcebdc] border border-[#344e48]/20 text-[#344e48] text-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block">WhatsApp Draft Created!</span>
                        Your message has opened in WhatsApp. Please press "Send" in WhatsApp to deliver it to Madam Hellen.
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div>
                      <label htmlFor="parent-name" className="block text-sm font-medium text-[#172c40] mb-1.5">
                        Parent or guardian name <span className="text-[#d96f58]">*</span>
                      </label>
                      <input 
                        id="parent-name"
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Grace Mwende"
                        className="w-full px-4 py-3 rounded-xl border border-[#172c40]/20 bg-[#fff9ef]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone-number" className="block text-sm font-medium text-[#172c40] mb-1.5">
                          Phone number <span className="text-[#d96f58]">*</span>
                        </label>
                        <input 
                          id="phone-number"
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. 0712 345 678"
                          className="w-full px-4 py-3 rounded-xl border border-[#172c40]/20 bg-[#fff9ef]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                        />
                      </div>

                      <div>
                        <label htmlFor="child-age" className="block text-sm font-medium text-[#172c40] mb-1.5">
                          Child’s age
                        </label>
                        <input 
                          id="child-age"
                          type="text"
                          value={formAge}
                          onChange={(e) => setFormAge(e.target.value)}
                          placeholder="e.g. 1 year 6 months"
                          className="w-full px-4 py-3 rounded-xl border border-[#172c40]/20 bg-[#fff9ef]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiry-message" className="block text-sm font-medium text-[#172c40] mb-1.5">
                        Your message
                      </label>
                      <textarea 
                        id="enquiry-message"
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Tell us any questions or when you would like to visit..."
                        className="w-full px-4 py-3 rounded-xl border border-[#172c40]/20 bg-[#fff9ef]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d96f58] focus:border-transparent transition-all text-sm text-[#172c40] resize-none"
                      />
                    </div>

                    <div className="pt-1">
                      <p className="text-xs text-[#526373] mb-4">
                        Your details are placed in a WhatsApp draft. They are shared only when you tap Send there.
                      </p>

                      <button 
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#d96f58] text-white font-bold text-base hover:bg-[#c85e47] transition-all shadow-md active:scale-98 cursor-pointer"
                      >
                        Continue to WhatsApp ↗
                      </button>
                    </div>

                  </form>

                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* ================= 7. FOOTER ================= */}
      <footer className="bg-[#172c40] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#172c40]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            
            {/* Footer Brand & Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f4bc59] flex items-center justify-center text-[#172c40]">
                  <Baby className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans leading-tight">
                    Mwingi Day Care
                  </h3>
                  <span className="text-xs text-[#f4bc59] block">
                    Mama Mwangi Day Care
                  </span>
                </div>
              </div>
              <div className="space-y-1 text-sm sm:text-base text-[#f9ead0]">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f4bc59] shrink-0" />
                  <span>Mwingi Town, Kitui County, Kenya</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f4bc59] shrink-0" />
                  <a href={`tel:${phoneNumber}`} className="hover:underline hover:text-white transition-colors">
                    {phoneNumber}
                  </a>
                </p>
              </div>
            </div>

            {/* Footer WhatsApp Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a 
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f4bc59] text-[#172c40] font-bold text-base hover:bg-[#eab04c] transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                Chat on WhatsApp ↗
              </a>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all whitespace-nowrap"
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
                About
              </button>
              <button onClick={() => scrollToSection('care', 'care')} className="hover:text-white transition-colors cursor-pointer">
                Care & Learning
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

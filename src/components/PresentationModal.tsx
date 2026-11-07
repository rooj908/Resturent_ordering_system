/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SPICE DISTRICT - UNIVERSITY PROJECT PRESENTATION SLIDE DECK
 * Student: Anfal Khursheed | Set Number: 23252059
 * 
 * 12 Professional Slides with Dark Restaurant Theme, Code Snippets, Flowcharts, 
 * Animated Slide Transitions, and Full Speaker Notes for each slide.
 */

import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Printer, Mic, Sparkles, Code2, Layers, Cpu, CheckCircle2,
  Utensils, ShoppingBag, ShieldCheck, ArrowRight, BookOpen,
  Boxes, GitBranch, Terminal, Award, Download
} from 'lucide-react';
import { downloadSpiceDistrictPptx } from '../utils/pptxExport';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDownloadingPptx, setIsDownloadingPptx] = useState(false);

  const handleDownloadPptx = async () => {
    try {
      setIsDownloadingPptx(true);
      await downloadSpiceDistrictPptx();
    } catch (err) {
      console.error('Failed to download presentation:', err);
    } finally {
      setIsDownloadingPptx(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, 11));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalSlides = 12;

  // Slide Data Definition
  const slides = [
    // --- SLIDE 1: Title Slide ---
    {
      id: 1,
      badge: 'Academic Project Presentation',
      title: 'Spice District',
      subtitle: 'Online Restaurant Ordering System with Object-Oriented Programming (OOP)',
      renderContent: () => (
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#f3c64c] to-[#997316] p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full bg-[#081a10] rounded-[14px] flex items-center justify-center">
              <Utensils className="w-10 h-10 text-[#d4af37]" />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
              اسپائس ڈسٹرکٹ • Authentic Pakistani Cuisine
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-heading mt-2">
              Spice District
            </h1>
            <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#fce293] via-[#d4af37] to-[#e5a93c] font-semibold mt-1">
              Online Restaurant Ordering Website
            </p>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-2" />

          {/* Student & Course Credentials */}
          <div className="bg-[#0a2316]/90 border border-[#d4af37]/40 rounded-2xl p-5 max-w-md w-full shadow-xl">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#e7dfca]/60 font-semibold">Student Name</p>
                <p className="text-base font-bold text-white">Anfal Khursheed</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#e7dfca]/60 font-semibold">Set Number</p>
                <p className="text-base font-bold text-[#f3c64c] font-mono">23252059</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-[#d4af37]/20">
                <p className="text-[11px] uppercase tracking-wider text-[#e7dfca]/60 font-semibold">Subject & Project Scope</p>
                <p className="text-xs font-medium text-[#e7dfca]">
                  Object-Oriented Programming (OOP) in React & TypeScript
                </p>
              </div>
              <div className="col-span-2 pt-2">
                <button
                  onClick={handleDownloadPptx}
                  disabled={isDownloadingPptx}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3c64c] to-[#b3861c] text-[#07190f] text-xs font-extrabold hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-lg disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>{isDownloadingPptx ? 'Generating Presentation File...' : 'Download PowerPoint (.pptx) Presentation'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'Respected teacher and classmates, my name is Anfal Khursheed (Set Number: 23252059). Today I am presenting my web application project: "Spice District – Online Restaurant Ordering Website". This project demonstrates how modern web development using React and TypeScript is combined with robust Object-Oriented Programming (OOP) architecture to solve real-world restaurant ordering problems.'
    },

    // --- SLIDE 2: Project Introduction ---
    {
      id: 2,
      badge: 'Project Background & Purpose',
      title: 'Project Introduction',
      subtitle: 'Why Spice District was built & the problem it solves',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4">
          <div className="space-y-4 text-left">
            <div className="bg-[#0d2a1c] p-4 rounded-2xl border border-[#d4af37]/25">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-1">
                <span>⚠️</span> Traditional Ordering Problems
              </h4>
              <p className="text-xs text-[#e7dfca]/80 leading-relaxed">
                Traditional phone orders suffer from misplaced food customization, lack of price transparency, confusion over spice levels, and arithmetic errors in delivery calculations.
              </p>
            </div>

            <div className="bg-[#0d2a1c] p-4 rounded-2xl border border-[#d4af37]/25">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-1">
                <span>✨</span> The Spice District Solution
              </h4>
              <p className="text-xs text-[#e7dfca]/80 leading-relaxed">
                A streamlined web ordering system tailored for authentic Pakistani cuisine (Karachi Dum Biryanis, Lahori Shinwari Karahis, Royal Nalli Nihari, and Charcoal BBQ) with live PKR calculations.
              </p>
            </div>

            <div className="bg-[#0d2a1c] p-4 rounded-2xl border border-[#d4af37]/25">
              <h4 className="text-sm font-bold text-[#f7e29b] flex items-center gap-2 mb-1">
                <span>🏗️</span> Engineering Goal
              </h4>
              <p className="text-xs text-[#e7dfca]/80 leading-relaxed">
                Replace unorganized procedural script code with genuine Object-Oriented models (`FoodItem`, `Cart`, `Customer`, `Order`, `PaymentMethod`), keeping business logic strictly separated from UI rendering.
              </p>
            </div>
          </div>

          <div className="bg-[#0a2316] p-6 rounded-3xl border-2 border-[#d4af37]/35 shadow-2xl space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-[#16402d] text-[#d4af37] mx-auto">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Core System Value</h3>
            <ul className="text-xs text-left space-y-2.5 text-[#e7dfca]/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Zero ordering mistakes through visual spice customization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Automated bill calculation (Subtotal, Delivery, Tax, Packaging)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Synchronized city and town validation preventing delivery errors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Persistent cart saved in browser local storage</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      speakerNotes: 'In this slide, I highlight the purpose of Spice District. Phone-based restaurant ordering is prone to misheard orders and calculation errors. Spice District solves this by giving Pakistani food lovers a visual, interactive ordering platform. More importantly, as a software engineering project, its purpose is to demonstrate clean Object-Oriented principles where restaurant business logic is encapsulated in well-structured TypeScript classes.'
    },

    // --- SLIDE 3: Project Objectives ---
    {
      id: 3,
      badge: 'Goals & Requirements',
      title: 'Project Objectives',
      subtitle: 'The 4 fundamental operational stages of the ordering website',
      renderContent: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          <div className="bg-[#092115] p-5 rounded-2xl border border-[#d4af37]/30 flex flex-col justify-between text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-base">
              01
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Food Browsing</h4>
              <p className="text-xs text-[#e7dfca]/75 mt-1">
                Explore Pakistani categories (Biryani, Karahi, Nihari, BBQ, Breads) with instant real-time search, Urdu names, and spicy indicators.
              </p>
            </div>
            <span className="text-[10px] text-amber-300 font-semibold bg-[#07190f] p-1.5 rounded border border-[#d4af37]/20">
              ✓ Menu Model & Search
            </span>
          </div>

          <div className="bg-[#092115] p-5 rounded-2xl border border-[#d4af37]/30 flex flex-col justify-between text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-base">
              02
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Cart Management</h4>
              <p className="text-xs text-[#e7dfca]/75 mt-1">
                Add, update quantities, remove items, customize spiciness, apply voucher codes, and auto-calculate free delivery over Rs. 2,500.
              </p>
            </div>
            <span className="text-[10px] text-amber-300 font-semibold bg-[#07190f] p-1.5 rounded border border-[#d4af37]/20">
              ✓ OOP Cart Class
            </span>
          </div>

          <div className="bg-[#092115] p-5 rounded-2xl border border-[#d4af37]/30 flex flex-col justify-between text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-base">
              03
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Customer Checkout</h4>
              <p className="text-xs text-[#e7dfca]/75 mt-1">
                Collect verified customer details, Pakistani phone formatting (03XX), city-specific areas, and on-delivery payment options.
              </p>
            </div>
            <span className="text-[10px] text-amber-300 font-semibold bg-[#07190f] p-1.5 rounded border border-[#d4af37]/20">
              ✓ Customer Validation
            </span>
          </div>

          <div className="bg-[#092115] p-5 rounded-2xl border border-[#d4af37]/30 flex flex-col justify-between text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-base">
              04
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Order Confirmation</h4>
              <p className="text-xs text-[#e7dfca]/75 mt-1">
                Display unique Order ID (SD-PK-XXXXX), 35-45 min delivery countdown, live 4-stage cooking tracker, and printable receipt.
              </p>
            </div>
            <span className="text-[10px] text-amber-300 font-semibold bg-[#07190f] p-1.5 rounded border border-[#d4af37]/20">
              ✓ Order Receipt & Stepper
            </span>
          </div>
        </div>
      ),
      speakerNotes: 'Our project was built around four clear operational objectives: first, an intuitive food browsing experience with realistic Pakistani imagery; second, shopping cart management driven by an encapsulated Cart class; third, robust checkout validation for Pakistani customer addresses; and fourth, transparent order confirmation with live timeline tracking and receipt printing.'
    },

    // --- SLIDE 4: Website Features ---
    {
      id: 4,
      badge: 'Core Functionality',
      title: 'Website Features',
      subtitle: 'Complete feature breakdown of the Spice District system',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 text-left">
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Sparkles className="w-4 h-4" /> Categorized Menu
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Filter dishes across Biryani, Karahi, Nihari, Haleem, Charcoal BBQ, Tandoori Naan, and Desi Desserts with instant keyword search.
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Boxes className="w-4 h-4" /> Food Customization
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Customers choose customized spice ratings (Mild, Medium, Hot, Desi Fiery) and enter special cooking notes (e.g. extra ginger, crispy naan).
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <ShoppingBag className="w-4 h-4" /> Interactive Cart Drawer
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Slide-over cart with live +/- quantity adjustment, item removal, free delivery progress bar, and instant PKR subtotal recalculation.
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <ShieldCheck className="w-4 h-4" /> Voucher Discount Engine
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Supports real promo vouchers: <code className="text-amber-300 font-mono">SPICE10</code> (10% discount) and <code className="text-amber-300 font-mono">FEAST250</code> (Rs. 250 off).
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <GitBranch className="w-4 h-4" /> Dynamic City-Area Sync
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              When Karachi is selected, only Karachi areas appear (Clifton, DHA, Gulshan). Selecting Lahore dynamically shows Lahore towns (Gulberg, Johar Town).
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Award className="w-4 h-4" /> Payment on Delivery
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Provides transparent on-delivery instructions for Cash on Delivery (COD), Mobile Wallet QR (JazzCash/EasyPaisa), and Wireless POS Card terminal.
            </p>
          </div>
        </div>
      ),
      speakerNotes: 'Slide 4 showcases the real features of Spice District. Notice our voucher engine supporting codes like SPICE10, our free delivery progress bar, our dynamic city-area synchronization that prevents cross-city location errors, and our realistic on-delivery payment options that give riders and customers clear instructions.'
    },

    // --- SLIDE 5: Technologies Used ---
    {
      id: 5,
      badge: 'Software Architecture & Tools',
      title: 'Technologies Used',
      subtitle: 'Modern frontend stack and development tools',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 text-left">
          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded border border-sky-800">
              Frontend Framework
            </span>
            <h4 className="text-lg font-bold text-white">React 19 (SPA)</h4>
            <p className="text-xs text-[#e7dfca]/75">
              Functional components, custom hooks (`useState`, `useEffect`, `useMemo`), single-page seamless transitions without full page reloads.
            </p>
          </div>

          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800">
              Programming Language
            </span>
            <h4 className="text-lg font-bold text-white">TypeScript 5+</h4>
            <p className="text-xs text-[#e7dfca]/75">
              Strict static typing, object-oriented classes, abstract classes, access modifiers (`private`/`protected`), and multi-interface contracts.
            </p>
          </div>

          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800">
              Styling & Design
            </span>
            <h4 className="text-lg font-bold text-white">Tailwind CSS v4</h4>
            <p className="text-xs text-[#e7dfca]/75">
              Custom emerald green (`#081a10`), cream, and gold (`#d4af37`) palette, luxury typography (`Cinzel` & `Plus Jakarta Sans`), and mobile responsiveness.
            </p>
          </div>

          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
              Data Storage
            </span>
            <h4 className="text-lg font-bold text-white">Web LocalStorage</h4>
            <p className="text-xs text-[#e7dfca]/75">
              Client-side persistence for cart items and quantities, serialized and deserialized via `Cart.toJSON()` to preserve data across page refreshes.
            </p>
          </div>

          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800">
              Icons & UI Polish
            </span>
            <h4 className="text-lg font-bold text-white">Lucide React Icons</h4>
            <p className="text-xs text-[#e7dfca]/75">
              Lightweight SVG vector iconography for food cutlery, flame spice badges, shopping bags, and timeline status checkpoints.
            </p>
          </div>

          <div className="bg-[#092115] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded border border-rose-800">
              Build Tooling
            </span>
            <h4 className="text-lg font-bold text-white">Vite 8.3 & TSX</h4>
            <p className="text-xs text-[#e7dfca]/75">
              High-speed development bundling, instant HMR, optimized production builds generating minified and gzip-compressed production assets.
            </p>
          </div>
        </div>
      ),
      speakerNotes: 'For technology, we used React 19 and TypeScript. TypeScript was our choice because it gives us strict compile-time checking for our OOP classes. We used Tailwind CSS for our regal Pakistani restaurant theme, and HTML5 Web LocalStorage so that a customer’s cart is never lost if they accidentally refresh the browser.'
    },

    // --- SLIDE 6: Website Workflow Flowchart ---
    {
      id: 6,
      badge: 'System Architecture & Flow',
      title: 'Website Workflow Flowchart',
      subtitle: 'Complete path from menu selection to receipt generation',
      renderContent: () => (
        <div className="py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            {/* Step 1 */}
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30 flex-1 w-full">
              <span className="w-6 h-6 rounded-full bg-[#16402d] text-[#d4af37] text-xs font-bold inline-flex items-center justify-center mb-1">1</span>
              <h5 className="font-bold text-xs text-white">Browse Menu</h5>
              <p className="text-[10px] text-[#e7dfca]/70 mt-0.5">Filter by category or search dish</p>
            </div>

            <ArrowRight className="w-5 h-5 text-[#d4af37] hidden md:block flex-shrink-0" />

            {/* Step 2 */}
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30 flex-1 w-full">
              <span className="w-6 h-6 rounded-full bg-[#16402d] text-[#d4af37] text-xs font-bold inline-flex items-center justify-center mb-1">2</span>
              <h5 className="font-bold text-xs text-white">Customize Dish</h5>
              <p className="text-[10px] text-[#e7dfca]/70 mt-0.5">Pick spice level & cooking notes</p>
            </div>

            <ArrowRight className="w-5 h-5 text-[#d4af37] hidden md:block flex-shrink-0" />

            {/* Step 3 */}
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30 flex-1 w-full">
              <span className="w-6 h-6 rounded-full bg-[#16402d] text-[#d4af37] text-xs font-bold inline-flex items-center justify-center mb-1">3</span>
              <h5 className="font-bold text-xs text-white">Cart Management</h5>
              <p className="text-[10px] text-[#e7dfca]/70 mt-0.5">Apply coupon & review total bill</p>
            </div>

            <ArrowRight className="w-5 h-5 text-[#d4af37] hidden md:block flex-shrink-0" />

            {/* Step 4 */}
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30 flex-1 w-full">
              <span className="w-6 h-6 rounded-full bg-[#16402d] text-[#d4af37] text-xs font-bold inline-flex items-center justify-center mb-1">4</span>
              <h5 className="font-bold text-xs text-white">Checkout Form</h5>
              <p className="text-[10px] text-[#e7dfca]/70 mt-0.5">Select city, area & payment</p>
            </div>

            <ArrowRight className="w-5 h-5 text-[#d4af37] hidden md:block flex-shrink-0" />

            {/* Step 5 */}
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30 flex-1 w-full">
              <span className="w-6 h-6 rounded-full bg-[#d4af37] text-[#07190f] text-xs font-bold inline-flex items-center justify-center mb-1">5</span>
              <h5 className="font-bold text-xs text-white">Order Receipt</h5>
              <p className="text-[10px] text-[#e7dfca]/70 mt-0.5">Live tracking & print confirmation</p>
            </div>
          </div>

          {/* Architecture Mapping Box */}
          <div className="mt-6 bg-[#07190f] p-4 rounded-2xl border border-[#d4af37]/20 text-left">
            <h4 className="text-xs font-bold text-[#f7e29b] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#d4af37]" />
              <span>Internal OOP Data Flow</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#e7dfca]/80">
              <div className="bg-[#0d2a1c] p-2.5 rounded-xl border border-[#d4af37]/15">
                <span className="font-bold text-white block">1. Cart Model</span>
                <span>`cartModel.addItem()` updates items & computes subtotal, free delivery threshold, and vouchers.</span>
              </div>
              <div className="bg-[#0d2a1c] p-2.5 rounded-xl border border-[#d4af37]/15">
                <span className="font-bold text-white block">2. Customer Validation</span>
                <span>`customer.validate()` cleans phone, address, and city before order creation.</span>
              </div>
              <div className="bg-[#0d2a1c] p-2.5 rounded-xl border border-[#d4af37]/15">
                <span className="font-bold text-white block">3. Order Instantiation</span>
                <span>`new RestaurantOrder()` binds customer, items, and polymorphic `PaymentMethod`.</span>
              </div>
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'This flowchart illustrates the complete user journey through Spice District. From browsing the menu, to customizing spiciness, to adjusting items in the cart, filling out the city-synchronized checkout form, and finally receiving a verified order confirmation. Behind this UI, our OOP classes handle each stage: the Cart class calculates totals, the Customer class validates input, and the RestaurantOrder class packages the final order.'
    },

    // --- SLIDE 7: Introduction to OOP ---
    {
      id: 7,
      badge: 'Core Software Paradigm',
      title: 'Introduction to OOP',
      subtitle: 'What Object-Oriented Programming is & why it was applied',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4 text-left">
          <div className="space-y-4">
            <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25">
              <h4 className="text-sm font-bold text-white mb-1">What is OOP?</h4>
              <p className="text-xs text-[#e7dfca]/80 leading-relaxed">
                Object-Oriented Programming (OOP) is a software paradigm centered around <strong>Objects</strong> rather than standalone functions. Objects bundle both <strong>State (Data)</strong> and <strong>Behavior (Methods)</strong> into cohesive entities.
              </p>
            </div>

            <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/25">
              <h4 className="text-sm font-bold text-white mb-1">Why OOP in Spice District?</h4>
              <ul className="text-xs text-[#e7dfca]/80 space-y-1.5 list-disc list-inside">
                <li>Eliminated duplicated math for delivery fees and vouchers across components.</li>
                <li>Encapsulated Pakistani customer address and phone validation rules.</li>
                <li>Made payment method extensibility seamless through polymorphism.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#07190f] p-5 rounded-2xl border border-[#d4af37]/30 space-y-3 font-mono text-xs">
            <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider font-sans border-b border-[#d4af37]/20 pb-1">
              OOP vs Procedural in Restaurant Apps
            </div>
            <div className="space-y-2 text-[#e7dfca]/80">
              <p className="text-rose-300">
                ❌ <strong>Procedural Approach:</strong> Loose variables everywhere (`cartItems`, `subtotal`, `fee`), requiring duplicate calculation logic across 4 different UI components.
              </p>
              <p className="text-emerald-300">
                ✅ <strong>OOP Approach (Our Project):</strong> A single `Cart` class instance with private fields and public getters (`subtotal`, `deliveryFee`, `grandTotal`). Clean, safe, and bug-free.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'On this slide, I explain why we applied Object-Oriented Programming to Spice District. Without OOP, restaurant calculations like delivery fees, promo discounts, and order subtotals end up duplicated in multiple React components. By using OOP, we bundle data and methods together inside dedicated classes like Cart and Customer, achieving clean separation of concerns and maintainable code.'
    },

    // --- SLIDE 8: Classes and Objects ---
    {
      id: 8,
      badge: 'Domain Modeling',
      title: 'Classes and Objects',
      subtitle: 'Real domain classes implemented in the Spice District codebase',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 text-left">
          <div className="space-y-3">
            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f3c64c]">class FoodItem</span>
                <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">Menu Model</span>
              </div>
              <p className="text-xs text-[#e7dfca]/80 mt-1">
                Represents Pakistani menu dishes (Biryani, Karahi, Nihari, Kebabs). Features encapsulated pricing, formatted PKR strings, and serving details.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f3c64c]">class Cart</span>
                <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">Business Engine</span>
              </div>
              <p className="text-xs text-[#e7dfca]/80 mt-1">
                Maintains selected dishes, quantity increments, promo vouchers, and enforces the Rs. 2,500 Free Delivery business threshold.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f3c64c]">class Customer</span>
                <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">Profile & Destination</span>
              </div>
              <p className="text-xs text-[#e7dfca]/80 mt-1">
                Encapsulates client details with automatic Pakistani phone validation, address sanitization, and delivery notes.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3.5 rounded-2xl border border-[#d4af37]/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#f3c64c]">class RestaurantOrder</span>
                <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">Order Fulfillment</span>
              </div>
              <p className="text-xs text-[#e7dfca]/80 mt-1">
                Packages the entire confirmed order with a unique order ID, 4-stage tracking status, and printable receipt formatting.
              </p>
            </div>
          </div>

          {/* Actual Code Snippet Box */}
          <div className="bg-[#06120b] p-4 rounded-2xl border border-[#d4af37]/30 font-mono text-[11px] text-[#e7dfca] overflow-x-auto space-y-2">
            <div className="text-xs text-[#d4af37] font-bold font-sans border-b border-white/10 pb-1.5 flex items-center justify-between">
              <span>Code Snippet: Object Instantiation</span>
              <span className="text-[10px] text-stone-400">/src/models/</span>
            </div>
            <pre className="text-emerald-300 leading-relaxed">
{`// 1. Instantiating a Customer Object
const customer = new Customer(
  "Anfal Khursheed",
  "0300-1234567",
  "Lahore",
  "Gulberg III",
  "House #14, Street 2",
  "Near Packages Mall",
  "Cash on Delivery"
);

// 2. Instantiating a FoodItem Object
const biryani = new DesiSpecialtyFoodItem(
  "sindhi-biryani",
  "Sindhi Royal Mutton Biryani",
  "سندھی شاہی مٹن بریانی",
  "biryani",
  1650,
  "Aromatic saffron basmati...",
  "https://...",
  "Hot",
  "Serves 1-2 Persons",
  "25 mins"
);`}
            </pre>
          </div>
        </div>
      ),
      speakerNotes: 'Slide 8 presents the actual domain classes in our project. FoodItem models our Pakistani dishes. Cart handles cart items and business policies like free delivery over 2,500 PKR. Customer encapsulates user details and validates Pakistani phone numbers. And RestaurantOrder bundles the items, customer, and payments into a confirmed order. The code on the right shows actual object instantiation.'
    },

    // --- SLIDE 9: The Four Pillars of OOP ---
    {
      id: 9,
      badge: 'Core OOP Foundations',
      title: 'The Four Pillars of OOP',
      subtitle: 'How Encapsulation, Inheritance, Polymorphism, and Abstraction are implemented',
      renderContent: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 text-left">
          {/* Pillar 1: Encapsulation */}
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Layers className="w-4 h-4" /> 1. Encapsulation
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Private state (`private _items`, `private _phone`) protected from external tampering. Exposed solely via getters/setters and methods.
            </p>
            <div className="bg-[#06120b] p-2 rounded-xl text-[10px] font-mono text-emerald-300">
              {`public get deliveryFee(): number {
  return this.subtotal >= 2500 ? 0 : 200;
}`}
            </div>
          </div>

          {/* Pillar 2: Inheritance */}
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <GitBranch className="w-4 h-4" /> 2. Inheritance
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Child classes extend base classes using <code className="text-amber-300">extends</code> to reuse attributes and add specialized functionality.
            </p>
            <div className="bg-[#06120b] p-2 rounded-xl text-[10px] font-mono text-emerald-300">
              {`class DesiSpecialtyFoodItem extends FoodItem
class RestaurantOrder extends BaseOrder`}
            </div>
          </div>

          {/* Pillar 3: Polymorphism */}
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Cpu className="w-4 h-4" /> 3. Polymorphism
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Uniform method interface with multiple behaviors at runtime. Calling `.getInstructions(amount)` executes the specific payment class logic.
            </p>
            <div className="bg-[#06120b] p-2 rounded-xl text-[10px] font-mono text-emerald-300">
              {`// CashOnDelivery, JazzCash, CardPayment
paymentMethod.getInstructions(grandTotal);`}
            </div>
          </div>

          {/* Pillar 4: Abstraction */}
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="flex items-center gap-2 text-[#f3c64c] font-bold text-sm">
              <Code2 className="w-4 h-4" /> 4. Abstraction
            </div>
            <p className="text-xs text-[#e7dfca]/80">
              Abstract classes define mandatory contracts with <code className="text-amber-300">abstract</code> methods that child classes must implement.
            </p>
            <div className="bg-[#06120b] p-2 rounded-xl text-[10px] font-mono text-emerald-300">
              {`abstract class PaymentMethod {
  abstract processPayment(amount: number): PaymentResult;
}`}
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'Slide 9 covers the Four Pillars of OOP. First, Encapsulation: our Cart hides private items and computes delivery fees through public getters. Second, Inheritance: DesiSpecialtyFoodItem extends FoodItem. Third, Polymorphism: our payment methods (Cash, JazzCash, Card) all implement getInstructions() differently, so the UI calls it without any if/else checks. Fourth, Abstraction: PaymentMethod and BaseOrder are abstract classes defining strict rules for child classes.'
    },

    // --- SLIDE 10: Additional OOP Concepts ---
    {
      id: 10,
      badge: 'Advanced Language Features',
      title: 'Additional OOP Concepts',
      subtitle: 'Constructors, Getters/Setters, Method Overriding, Interfaces, and super()',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 text-left">
          <div className="space-y-3">
            <div className="bg-[#0a2316] p-3 rounded-2xl border border-[#d4af37]/25">
              <h5 className="font-bold text-xs text-white">1. Constructor & super()</h5>
              <p className="text-xs text-[#e7dfca]/75">
                Constructors initialize object fields, and child classes invoke <code className="text-amber-300">super(...)</code> to pass parameters to the parent class constructor.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3 rounded-2xl border border-[#d4af37]/25">
              <h5 className="font-bold text-xs text-white">2. Getters & Setters</h5>
              <p className="text-xs text-[#e7dfca]/75">
                Safe data reading and mutation with validation, such as <code className="text-amber-300">get formattedPrice()</code> and <code className="text-amber-300">set price()</code> preventing negative values.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3 rounded-2xl border border-[#d4af37]/25">
              <h5 className="font-bold text-xs text-white">3. Method Overriding</h5>
              <p className="text-xs text-[#e7dfca]/75">
                Child classes provide specialized logic for parent methods. <code className="text-amber-300">DesiSpecialtyFoodItem</code> overrides <code className="text-amber-300">getServingDescription()</code>.
              </p>
            </div>

            <div className="bg-[#0a2316] p-3 rounded-2xl border border-[#d4af37]/25">
              <h5 className="font-bold text-xs text-white">4. Multiple Inheritance in TypeScript (Interfaces)</h5>
              <p className="text-xs text-[#e7dfca]/75">
                Since TypeScript does not allow multiple class inheritance, we implemented multiple interfaces (<code className="text-amber-300">IHalalStandard</code> & <code className="text-amber-300">IClaypotCooked</code>) on a single class.
              </p>
            </div>
          </div>

          {/* Real Code Snippet */}
          <div className="bg-[#06120b] p-4 rounded-2xl border border-[#d4af37]/30 font-mono text-[11px] text-[#e7dfca] overflow-x-auto space-y-2">
            <div className="text-xs text-[#d4af37] font-bold font-sans border-b border-white/10 pb-1.5 flex items-center justify-between">
              <span>Code: Method Overriding & Multiple Interfaces</span>
            </div>
            <pre className="text-emerald-300 leading-relaxed">
{`// Multiple Interfaces (Multiple Inheritance)
export class DesiSpecialtyFoodItem 
  extends FoodItem 
  implements IHalalStandard, IClaypotCooked {

  constructor(...) {
    // Calling parent constructor
    super(id, name, urduName, price, ...);
  }

  // Method Overriding with super.method()
  public override getServingDescription(): string {
    const parentText = super.getServingDescription();
    return \`\${parentText} • Heritage \${this.cookingTechnique}\`;
  }
}`}
            </pre>
          </div>
        </div>
      ),
      speakerNotes: 'Slide 10 highlights additional concepts required in our curriculum. We demonstrate constructors with default parameters, getters and setters with validation, and method overriding. Most notably, because TypeScript does not allow multiple class inheritance, we demonstrated this concept through multiple interfaces: DesiSpecialtyFoodItem implements both IHalalStandard and IClaypotCooked, showing how TypeScript safely achieves multiple behavior contracts.'
    },

    // --- SLIDE 11: Project Demonstration ---
    {
      id: 11,
      badge: 'Live Application Walkthrough',
      title: 'Project Demonstration',
      subtitle: 'How customers order their Pakistani feast on Spice District',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 text-left">
          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-xs">
              A
            </div>
            <h4 className="text-sm font-bold text-white">Menu & Customization</h4>
            <p className="text-xs text-[#e7dfca]/80">
              User views high-resolution dishes (Sindhi Dum Biryani, Shinwari Karahi, Nalli Nihari). Clicks any card to choose spiciness (Mild to Desi Fiery) and enter cooking instructions.
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-xs">
              B
            </div>
            <h4 className="text-sm font-bold text-white">Cart & Discounts</h4>
            <p className="text-xs text-[#e7dfca]/80">
              The slide-over cart drawer recalculates totals. Applying promo code <code className="text-amber-300 font-mono">SPICE10</code> deducts 10%. Crossing Rs. 2,500 unlocks FREE city delivery.
            </p>
          </div>

          <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#16402d] text-[#d4af37] flex items-center justify-center font-bold text-xs">
              C
            </div>
            <h4 className="text-sm font-bold text-white">Checkout & Receipt</h4>
            <p className="text-xs text-[#e7dfca]/80">
              Customer enters phone & address. Picks Cash on Delivery, JazzCash QR, or Card on Delivery. Receives an instant receipt with order tracking (Confirmed $\rightarrow$ In Tandoor $\rightarrow$ Packed $\rightarrow$ On The Way).
            </p>
          </div>

          {/* Verification Bar */}
          <div className="col-span-1 md:col-span-3 bg-[#07190f] p-4 rounded-2xl border border-emerald-500/30 flex items-center justify-between text-xs text-[#e7dfca]">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong>Live Verification:</strong> All calculations, buttons, local storage persistence, and receipt print dialog are 100% functional.
            </span>
            <span className="text-emerald-300 font-bold font-mono">Build Status: Passing ✓</span>
          </div>
        </div>
      ),
      speakerNotes: 'Slide 11 walks through the live customer experience. First, browsing with our Pakistani spice customization modal. Second, the slide-over cart drawer that calculates discounts and free delivery in real-time. Third, the checkout modal with dynamic city-area synchronization and payment options. And finally, the celebratory confirmation screen with live timeline tracking and printable receipt.'
    },

    // --- SLIDE 12: Conclusion ---
    {
      id: 12,
      badge: 'Summary & Outcomes',
      title: 'Conclusion & Learning Outcomes',
      subtitle: 'Project evaluation and future roadmap',
      renderContent: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4 text-left">
          <div className="space-y-4">
            <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-1">
                <span>🎯</span> What Was Accomplished
              </h4>
              <ul className="text-xs text-[#e7dfca]/85 space-y-1.5 list-disc list-inside">
                <li>Built a complete, high-performance Pakistani restaurant ordering system.</li>
                <li>Successfully integrated all 9 required OOP concepts in TypeScript.</li>
                <li>Preserved modern UI/UX design with dark green, cream, and gold palette.</li>
                <li>Zero compile errors and clean production build.</li>
              </ul>
            </div>

            <div className="bg-[#0a2316] p-4 rounded-2xl border border-[#d4af37]/30">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-1">
                <span>🚀</span> Future Enhancements
              </h4>
              <ul className="text-xs text-[#e7dfca]/85 space-y-1.5 list-disc list-inside">
                <li>Backend REST / GraphQL API with database persistence (PostgreSQL / MongoDB).</li>
                <li>Live SMS notification gateway for delivery rider status.</li>
                <li>Table reservation module using an OOP `Reservation` model.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0d2a1c] to-[#07190f] p-6 rounded-3xl border-2 border-[#d4af37]/40 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#16402d] text-[#d4af37] mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Thank You!</h3>
            <p className="text-xs text-[#e7dfca]/80">
              Presented by <strong>Anfal Khursheed</strong> (Set No. 23252059)
            </p>
            <div className="pt-2 text-xs text-[#d4af37] font-semibold border-t border-[#d4af37]/20">
              Questions & Feedback are warmly welcome!
            </div>
          </div>
        </div>
      ),
      speakerNotes: 'In conclusion, Spice District successfully proves that React web applications can be architected with strict, professional Object-Oriented Programming in TypeScript. All required OOP concepts—from classes, encapsulation, inheritance, polymorphism, and abstraction to interfaces and method overriding—work harmoniously with React state. Thank you for your time and guidance, and I welcome any questions!'
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className={`relative w-full ${isFullscreen ? 'h-full max-w-none' : 'max-w-5xl h-[92vh]'} bg-[#07190f] border-2 border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl text-[#fdfaf3] flex flex-col justify-between transition-all duration-300`}>
        
        {/* Top Control Bar */}
        <div className="bg-[#0a2316] p-4 border-b border-[#d4af37]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#16402d] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Spice District — PPT Slide Deck</span>
                <span className="text-[11px] font-mono text-[#f3c64c] bg-[#07190f] px-2 py-0.5 rounded border border-[#d4af37]/30">
                  Slide {currentSlide + 1} of {totalSlides}
                </span>
              </h2>
              <p className="text-[10px] text-[#e7dfca]/60 hidden sm:block">
                Presenter: Anfal Khursheed • Set: 23252059
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPptx}
              disabled={isDownloadingPptx}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#d4af37] via-[#f3c64c] to-[#b3861c] text-[#07190f] shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              title="Download PowerPoint (.pptx) file for university submission"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isDownloadingPptx ? 'Exporting...' : 'Download .pptx'}</span>
              <span className="sm:hidden">PPTX</span>
            </button>

            <button
              onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                showSpeakerNotes
                  ? 'bg-[#16402d] text-[#f7e29b] border-[#d4af37]/50'
                  : 'bg-[#07190f] text-[#e7dfca]/70 border-white/10 hover:text-white'
              }`}
              title="Toggle Speaker Notes"
            >
              <Mic className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Speaker Notes</span>
            </button>

            <button
              onClick={() => window.print()}
              className="w-8 h-8 rounded-xl bg-[#07190f] hover:bg-[#16402d] text-stone-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              title="Print Slides"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-8 h-8 rounded-xl bg-[#07190f] hover:bg-[#16402d] text-stone-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-[#16402d] hover:bg-rose-900 text-stone-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer ml-1"
              title="Close Presentation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#05110a] h-1.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#d4af37] via-[#f3c64c] to-amber-500 h-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Slide Stage Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Slide Header */}
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#16402d] text-[#f7e29b] border border-[#d4af37]/30 mb-2">
                {currentSlideData.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {currentSlideData.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#e7dfca]/80 mt-1">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Slide Custom Content */}
            <div className="max-w-4xl mx-auto">
              {currentSlideData.renderContent()}
            </div>
          </div>

          {/* Speaker Notes Drawer */}
          {showSpeakerNotes && (
            <div className="mt-6 max-w-4xl mx-auto w-full bg-[#0a2316]/95 border border-[#d4af37]/30 rounded-2xl p-4 shadow-lg text-left animate-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f3c64c] uppercase tracking-wider mb-1.5">
                <Mic className="w-3.5 h-3.5" />
                <span>Presenter Speech Script (What to say for this slide):</span>
              </div>
              <p className="text-xs text-[#e7dfca] leading-relaxed italic">
                "{currentSlideData.speakerNotes}"
              </p>
            </div>
          )}
        </div>

        {/* Bottom Navigation Toolbar */}
        <div className="bg-[#0a2316] p-4 border-t border-[#d4af37]/25 flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[200px] sm:max-w-md">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                  currentSlide === idx
                    ? 'bg-[#d4af37] text-[#07190f] shadow-md scale-105'
                    : 'bg-[#07190f] text-[#e7dfca]/60 hover:text-white border border-white/5'
                }`}
                title={`Go to slide ${s.id}: ${s.title}`}
              >
                {s.id}
              </button>
            ))}
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#07190f] hover:bg-[#16402d] text-white text-xs font-bold border border-[#d4af37]/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={() => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b3861c] text-[#07190f] text-xs font-extrabold shadow-md hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

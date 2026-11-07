/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * SPICE DISTRICT - POWERPOINT (.PPTX) GENERATOR
 * Generates an authentic, professional 12-slide Microsoft PowerPoint (.pptx) file.
 * Student: Anfal Khursheed | Set Number: 23252059
 */

import pptxgen from 'pptxgenjs';

export async function createSpiceDistrictPresentation(): Promise<pptxgen> {
  const pres = new pptxgen();

  // Configure Presentation Metadata & 16:9 Widescreen Layout
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Spice District – Online Restaurant Ordering Website';
  pres.subject = 'Object-Oriented Programming (OOP) in TypeScript Project Presentation';
  pres.author = 'Anfal Khursheed (Set Number: 23252059)';
  pres.company = 'Spice District - Authentic Pakistani Restaurant';

  // Palette Constants
  const BG_COLOR = '081A10';       // Deep Royal Emerald Green
  const CARD_BG = '0D2A1C';        // Card surface
  const DARK_BOX = '05120B';       // Deep contrast box
  const GOLD = 'D4AF37';           // Royal Gold
  const GOLD_LIGHT = 'F3C64C';     // Bright Amber Gold
  const TEXT_WHITE = 'FFFFFF';
  const TEXT_MUTED = 'E7DFCA';     // Warm Cream
  const ACCENT_EMERALD = '10B981';

  const defaultSlideBg = { color: BG_COLOR };

  // Helper to add standard slide header
  const addSlideHeader = (
    slide: any,
    badgeText: string,
    titleText: string,
    subtitleText: string
  ) => {
    // Top badge
    slide.addText(badgeText.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 8.0,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: GOLD_LIGHT,
      fontFace: 'Arial'
    });

    // Main Title
    slide.addText(titleText, {
      x: 0.8,
      y: 0.7,
      w: 11.5,
      h: 0.55,
      fontSize: 22,
      bold: true,
      color: TEXT_WHITE,
      fontFace: 'Georgia'
    });

    // Subtitle
    slide.addText(subtitleText, {
      x: 0.8,
      y: 1.25,
      w: 11.5,
      h: 0.35,
      fontSize: 12,
      color: TEXT_MUTED,
      fontFace: 'Arial'
    });

    // Subtle divider line
    slide.addShape(pres.ShapeType.line, {
      x: 0.8,
      y: 1.65,
      w: 11.7,
      h: 0,
      line: { color: GOLD, width: 1.5, transparency: 60 }
    });

    // Footer credentials on all slides
    slide.addText('Spice District • Anfal Khursheed (Set: 23252059) • OOP in React & TypeScript', {
      x: 0.8,
      y: 7.1,
      w: 10.0,
      h: 0.3,
      fontSize: 9,
      color: GOLD,
      fontFace: 'Arial'
    });
  };

  // ==========================================
  // SLIDE 1: TITLE SLIDE
  // ==========================================
  const slide1 = pres.addSlide();
  slide1.background = defaultSlideBg;

  // Gold emblem box
  slide1.addShape(pres.ShapeType.roundRect, {
    x: 5.66,
    y: 0.9,
    w: 2.0,
    h: 0.8,
    rectRadius: 0.15,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 2 }
  });
  slide1.addText('🌶️ SPICE DISTRICT', {
    x: 5.66,
    y: 0.9,
    w: 2.0,
    h: 0.8,
    align: 'center',
    fontSize: 11,
    bold: true,
    color: GOLD_LIGHT
  });

  slide1.addText('Spice District', {
    x: 1.0,
    y: 1.9,
    w: 11.33,
    h: 0.9,
    align: 'center',
    fontSize: 38,
    bold: true,
    color: TEXT_WHITE,
    fontFace: 'Georgia'
  });

  slide1.addText('Online Restaurant Ordering System with Object-Oriented Programming (OOP)', {
    x: 1.0,
    y: 2.8,
    w: 11.33,
    h: 0.5,
    align: 'center',
    fontSize: 15,
    bold: true,
    color: GOLD_LIGHT,
    fontFace: 'Arial'
  });

  slide1.addText('Authentic Pakistani Cuisine • React 19 • TypeScript • Tailwind CSS • LocalStorage', {
    x: 1.0,
    y: 3.35,
    w: 11.33,
    h: 0.4,
    align: 'center',
    fontSize: 12,
    color: TEXT_MUTED,
    fontFace: 'Arial'
  });

  // Student credentials card
  slide1.addShape(pres.ShapeType.roundRect, {
    x: 3.66,
    y: 4.1,
    w: 6.0,
    h: 2.3,
    rectRadius: 0.15,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 2 }
  });

  slide1.addText([
    { text: 'ACADEMIC PRESENTATION CREDENTIALS\n', options: { fontSize: 10, bold: true, color: GOLD_LIGHT } },
    { text: 'Student Name: ', options: { fontSize: 13, bold: true, color: TEXT_WHITE } },
    { text: 'Anfal Khursheed\n', options: { fontSize: 13, bold: true, color: GOLD_LIGHT } },
    { text: 'Set Number: ', options: { fontSize: 13, bold: true, color: TEXT_WHITE } },
    { text: '23252059\n', options: { fontSize: 13, bold: true, color: GOLD_LIGHT } },
    { text: 'Project Domain: ', options: { fontSize: 11, bold: false, color: TEXT_MUTED } },
    { text: 'Full-Stack Pakistani Restaurant Ordering Application\n', options: { fontSize: 11, color: TEXT_WHITE } },
    { text: 'Core Curriculum: ', options: { fontSize: 11, bold: false, color: TEXT_MUTED } },
    { text: 'Object-Oriented Programming (OOP) in TypeScript', options: { fontSize: 11, color: TEXT_WHITE } }
  ], {
    x: 3.86,
    y: 4.25,
    w: 5.6,
    h: 2.0,
    align: 'center',
    fontFace: 'Arial'
  });

  slide1.addNotes('Respected teacher and colleagues, my name is Anfal Khursheed, Set Number 23252059. Today I am presenting my semester project: "Spice District – Online Restaurant Ordering Website". This application delivers a modern digital ordering platform for authentic Pakistani food while demonstrating complete Object-Oriented Programming principles implemented in TypeScript.');

  // ==========================================
  // SLIDE 2: PROJECT INTRODUCTION
  // ==========================================
  const slide2 = pres.addSlide();
  slide2.background = defaultSlideBg;
  addSlideHeader(slide2, 'Project Background & Purpose', 'Project Introduction', 'Why Spice District was built and the operational problems it solves');

  // Left column: Problems
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: CARD_BG },
    line: { color: '991B1B', width: 1.5 }
  });

  slide2.addText('⚠️ TRADITIONAL ORDERING PROBLEMS', {
    x: 1.1,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: 'F87171'
  });

  slide2.addText([
    { text: '• Order Misplacement: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Phone orders frequently result in incorrect spice choices and missing side orders.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Inaccurate Billing: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Manual calculations lead to arithmetic errors in delivery fees and discounts.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Poor Customization: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Pakistani cuisine requires precise spice options (Mild to Desi Fiery) rarely handled accurately over calls.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Unstructured Code: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Many entry-level restaurant sites use messy procedural code without reusable data models.', options: { color: TEXT_MUTED } }
  ], {
    x: 1.1,
    y: 2.55,
    w: 5.0,
    h: 4.0,
    fontSize: 11,
    fontFace: 'Arial'
  });

  // Right column: Solution
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 6.9,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 1.5 }
  });

  slide2.addText('✨ THE SPICE DISTRICT SOLUTION', {
    x: 7.2,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: GOLD_LIGHT
  });

  slide2.addText([
    { text: '• Dedicated Pakistani Menu: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Authentic categories: Dum Biryani, Shinwari Karahi, Nalli Nihari, Haleem, BBQ, Breads & Desserts.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Real-Time PKR Bill Engine: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Instant subtotal, packaging, voucher discounts, and free delivery threshold over Rs. 2,500.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Dynamic City-Area Sync: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'City-specific area dropdowns preventing cross-city delivery errors between Lahore and Karachi.\n\n', options: { color: TEXT_MUTED } },
    { text: '• Enterprise OOP Architecture: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Clean separation of business logic through encapsulated TypeScript classes.', options: { color: TEXT_MUTED } }
  ], {
    x: 7.2,
    y: 2.55,
    w: 5.0,
    h: 4.0,
    fontSize: 11,
    fontFace: 'Arial'
  });

  slide2.addNotes('In this slide, I explain the purpose of Spice District. Traditional phone orders lead to misheard food items and arithmetic mistakes. Spice District provides Pakistani food lovers with an intuitive digital menu and automated bill calculation. Most importantly, it implements professional Object-Oriented software engineering to keep business rules clean and maintainable.');

  // ==========================================
  // SLIDE 3: PROJECT OBJECTIVES
  // ==========================================
  const slide3 = pres.addSlide();
  slide3.background = defaultSlideBg;
  addSlideHeader(slide3, 'System Requirements & Goals', 'Project Objectives', 'Four core operational stages of the Spice District ordering system');

  const objCards = [
    {
      num: '01',
      title: 'Food Browsing',
      desc: 'Browse authentic Pakistani categories with real-time search, Urdu dish names, spice badges, and appetizing photography.',
      tech: 'Menu Model & Search Engine'
    },
    {
      num: '02',
      title: 'Cart Management',
      desc: 'Increment/decrement quantities, remove dishes, apply discount vouchers (SPICE10), and view free delivery progress bar.',
      tech: 'OOP Cart Business Model'
    },
    {
      num: '03',
      title: 'Customer Checkout',
      desc: 'Form validation for Pakistani phone numbers (03XX), synchronized city/area selector, and on-delivery payment options.',
      tech: 'Customer Model Validation'
    },
    {
      num: '04',
      title: 'Order Confirmation',
      desc: 'Generate unique Order ID (SD-PK-XXXXX), 35-45 min delivery countdown, 4-stage tracking status, and printable receipt.',
      tech: 'RestaurantOrder & Receipt'
    }
  ];

  objCards.forEach((c, i) => {
    const xPos = 0.8 + i * 2.95;
    slide3.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 1.9,
      w: 2.8,
      h: 4.9,
      rectRadius: 0.12,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.5 }
    });

    slide3.addText(c.num, {
      x: xPos + 0.2,
      y: 2.1,
      w: 0.7,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: GOLD_LIGHT
    });

    slide3.addText(c.title, {
      x: xPos + 0.2,
      y: 2.6,
      w: 2.4,
      h: 0.5,
      fontSize: 14,
      bold: true,
      color: TEXT_WHITE,
      fontFace: 'Georgia'
    });

    slide3.addText(c.desc, {
      x: xPos + 0.2,
      y: 3.2,
      w: 2.4,
      h: 2.6,
      fontSize: 10.5,
      color: TEXT_MUTED,
      fontFace: 'Arial'
    });

    slide3.addShape(pres.ShapeType.roundRect, {
      x: xPos + 0.2,
      y: 5.95,
      w: 2.4,
      h: 0.6,
      rectRadius: 0.08,
      fill: { color: DARK_BOX },
      line: { color: GOLD, width: 1, transparency: 50 }
    });

    slide3.addText(`✓ ${c.tech}`, {
      x: xPos + 0.25,
      y: 6.05,
      w: 2.3,
      h: 0.4,
      fontSize: 9.5,
      bold: true,
      color: GOLD_LIGHT,
      align: 'center'
    });
  });

  slide3.addNotes('Our project fulfills four core objectives: first, an interactive menu with authentic Pakistani categories; second, an encapsulated Cart management class that calculates pricing and free delivery thresholds; third, checkout validation specialized for Pakistani addresses; and fourth, transparent order confirmation with receipt printing.');

  // ==========================================
  // SLIDE 4: WEBSITE FEATURES
  // ==========================================
  const slide4 = pres.addSlide();
  slide4.background = defaultSlideBg;
  addSlideHeader(slide4, 'Functional Capabilities', 'Website Features', 'Comprehensive feature breakdown of the Spice District system');

  const features = [
    { title: 'Authentic Categorized Menu', desc: 'Biryani, Karahi, Nihari, Haleem, BBQ, Breads & Desserts with instant category tabs and live text search.' },
    { title: 'Food Customization Modal', desc: 'Allows customers to select spice ratings (Mild, Medium, Hot, Desi Fiery) and provide custom chef cooking instructions.' },
    { title: 'Slide-Over Shopping Cart', desc: 'Real-time quantity adjustments (+/-), item removal, cart badge indicator, and auto subtotal recalculation.' },
    { title: 'Promotional Voucher Engine', desc: 'Supports promo vouchers including SPICE10 (10% discount) and FEAST250 (Rs. 250 off) with instant validation.' },
    { title: 'Dynamic City-Area Synchronization', desc: 'Selecting Karachi restricts areas to Clifton, DHA, Gulshan; selecting Lahore restricts to Gulberg, Johar Town.' },
    { title: 'Transparent Payment on Delivery', desc: 'Clear payment instructions for Cash on Delivery, Mobile QR (JazzCash/EasyPaisa), and Wireless Card POS terminals.' }
  ];

  features.forEach((f, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const xPos = 0.8 + col * 3.95;
    const yPos = 1.9 + row * 2.45;

    slide4.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 3.8,
      h: 2.25,
      rectRadius: 0.12,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.2 }
    });

    slide4.addText(`★ ${f.title}`, {
      x: xPos + 0.2,
      y: yPos + 0.18,
      w: 3.4,
      h: 0.45,
      fontSize: 12,
      bold: true,
      color: GOLD_LIGHT
    });

    slide4.addText(f.desc, {
      x: xPos + 0.2,
      y: yPos + 0.65,
      w: 3.4,
      h: 1.45,
      fontSize: 10.5,
      color: TEXT_MUTED,
      fontFace: 'Arial'
    });
  });

  slide4.addNotes('Slide 4 details the key functional features. Notice how we handle food customization with spice levels, provide a live coupon engine, enforce city-area dropdown synchronization to prevent delivery mistakes, and offer clear on-delivery payment options without inventing unverified credentials.');

  // ==========================================
  // SLIDE 5: TECHNOLOGIES USED
  // ==========================================
  const slide5 = pres.addSlide();
  slide5.background = defaultSlideBg;
  addSlideHeader(slide5, 'Software Stack & Engineering Tools', 'Technologies Used', 'Modern frontend technologies and build toolchain utilized in development');

  const techStack = [
    { tag: 'Frontend Framework', name: 'React 19 (SPA)', desc: 'Component-driven user interface with hooks (useState, useEffect, useMemo) for smooth single-page responsiveness.' },
    { tag: 'Language & OOP', name: 'TypeScript 5+', desc: 'Strict static type checking, abstract classes, access modifiers (private/protected), interfaces, and inheritance.' },
    { tag: 'Styling & Theming', name: 'Tailwind CSS v4', desc: 'Custom dark emerald (#081a10) and gold (#d4af37) palette, responsive grid layouts, and elegant typography.' },
    { tag: 'Data Persistence', name: 'Web LocalStorage', desc: 'Encapsulated in Cart.toJSON() to preserve customer dishes and quantities across browser reloads.' },
    { tag: 'Iconography', name: 'Lucide React', desc: 'Lightweight, modern vector icons for restaurant cutlery, spice flames, shopping bag, and order checkpoints.' },
    { tag: 'Bundler & Dev', name: 'Vite 8.3 & TSX', desc: 'Ultra-fast HMR development server, TypeScript execution, and optimized production build generation.' }
  ];

  techStack.forEach((t, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const xPos = 0.8 + col * 3.95;
    const yPos = 1.9 + row * 2.45;

    slide5.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 3.8,
      h: 2.25,
      rectRadius: 0.12,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.2 }
    });

    slide5.addText(t.tag.toUpperCase(), {
      x: xPos + 0.2,
      y: yPos + 0.15,
      w: 3.4,
      h: 0.25,
      fontSize: 8.5,
      bold: true,
      color: GOLD_LIGHT
    });

    slide5.addText(t.name, {
      x: xPos + 0.2,
      y: yPos + 0.42,
      w: 3.4,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: TEXT_WHITE,
      fontFace: 'Georgia'
    });

    slide5.addText(t.desc, {
      x: xPos + 0.2,
      y: yPos + 0.85,
      w: 3.4,
      h: 1.25,
      fontSize: 10,
      color: TEXT_MUTED,
      fontFace: 'Arial'
    });
  });

  slide5.addNotes('For technologies, we selected React 19 for modular component rendering and TypeScript for strict Object-Oriented compilation. Tailwind CSS provides our royal Pakistani restaurant aesthetic, while LocalStorage ensures seamless cart recovery if the customer refreshes their browser.');

  // ==========================================
  // SLIDE 6: WEBSITE WORKFLOW FLOWCHART
  // ==========================================
  const slide6 = pres.addSlide();
  slide6.background = defaultSlideBg;
  addSlideHeader(slide6, 'System Architecture & Data Flow', 'Website Workflow Flowchart', 'End-to-end user journey and internal Object-Oriented data processing');

  const steps = [
    { num: 'Step 1', title: 'Browse Menu', desc: 'Select category (Biryani, Karahi, etc.) or search dishes.' },
    { num: 'Step 2', title: 'Customize Dish', desc: 'Pick spice level & special chef instructions.' },
    { num: 'Step 3', title: 'Cart Management', desc: 'Update qty, apply vouchers (SPICE10), review subtotal.' },
    { num: 'Step 4', title: 'Checkout Form', desc: 'Enter phone (03XX), select city & area, choose payment.' },
    { num: 'Step 5', title: 'Order Receipt', desc: 'Get verified Order ID, live tracker & print receipt.' }
  ];

  steps.forEach((s, i) => {
    const xPos = 0.8 + i * 2.38;
    slide6.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 1.9,
      w: 2.15,
      h: 2.4,
      rectRadius: 0.1,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.5 }
    });

    slide6.addText(s.num, {
      x: xPos + 0.1,
      y: 2.05,
      w: 1.95,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: GOLD_LIGHT,
      align: 'center'
    });

    slide6.addText(s.title, {
      x: xPos + 0.1,
      y: 2.4,
      w: 1.95,
      h: 0.4,
      fontSize: 12,
      bold: true,
      color: TEXT_WHITE,
      align: 'center'
    });

    slide6.addText(s.desc, {
      x: xPos + 0.1,
      y: 2.85,
      w: 1.95,
      h: 1.35,
      fontSize: 9.5,
      color: TEXT_MUTED,
      align: 'center'
    });

    // Arrow to next step
    if (i < steps.length - 1) {
      slide6.addText('➔', {
        x: xPos + 2.1,
        y: 2.8,
        w: 0.3,
        h: 0.4,
        fontSize: 14,
        bold: true,
        color: GOLD,
        align: 'center'
      });
    }
  });

  // Bottom Box: Internal OOP Data Flow
  slide6.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 4.6,
    w: 11.7,
    h: 2.2,
    rectRadius: 0.12,
    fill: { color: DARK_BOX },
    line: { color: GOLD, width: 1.5 }
  });

  slide6.addText('INTERNAL OOP DATA PROCESSING FLOW', {
    x: 1.1,
    y: 4.75,
    w: 11.0,
    h: 0.3,
    fontSize: 11,
    bold: true,
    color: GOLD_LIGHT
  });

  slide6.addText([
    { text: '1. Cart Execution: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'cart.addItem() handles item state, validates quantity bounds, and recalculates subtotal and packaging fee.\n', options: { color: TEXT_MUTED } },
    { text: '2. Customer Validation: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'customer.validate() verifies Pakistani phone pattern /^03[0-9]{2}-?[0-9]{7}$/ and sanitizes address data.\n', options: { color: TEXT_MUTED } },
    { text: '3. Polymorphic Payment: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'PaymentMethodFactory.create(method) returns the appropriate instance (CashOnDelivery, JazzCash, CardPayment).\n', options: { color: TEXT_MUTED } },
    { text: '4. Order Creation: ', options: { bold: true, color: TEXT_WHITE } },
    { text: 'new RestaurantOrder(...) binds customer, cart items, payment method, and generates unique order receipts.', options: { color: TEXT_MUTED } }
  ], {
    x: 1.1,
    y: 5.1,
    w: 11.0,
    h: 1.6,
    fontSize: 10.5,
    fontFace: 'Arial'
  });

  slide6.addNotes('This flowchart outlines the customer journey alongside the internal OOP data flow. As the customer moves through browsing, cart, and checkout, our OOP classes execute: Cart computes bill rules, Customer validates Pakistani inputs, PaymentMethod handles polymorphic options, and RestaurantOrder issues the final confirmed order.');

  // ==========================================
  // SLIDE 7: INTRODUCTION TO OOP
  // ==========================================
  const slide7 = pres.addSlide();
  slide7.background = defaultSlideBg;
  addSlideHeader(slide7, 'Core Programming Paradigm', 'Introduction to OOP', 'What Object-Oriented Programming is and why it was applied in Spice District');

  slide7.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 1.5 }
  });

  slide7.addText('CORE PRINCIPLES OF OOP', {
    x: 1.1,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: GOLD_LIGHT
  });

  slide7.addText([
    { text: 'What is OOP?\n', options: { bold: true, color: TEXT_WHITE } },
    { text: 'Object-Oriented Programming (OOP) is a software design paradigm that structures code around Objects containing both Data (State/Fields) and Behavior (Methods).\n\n', options: { color: TEXT_MUTED } },
    { text: 'Why use OOP in Spice District?\n', options: { bold: true, color: TEXT_WHITE } },
    { text: '• Prevents code duplication for order calculations.\n• Ensures consistent business rules (e.g. Free Delivery > Rs. 2,500).\n• Centralizes input validation for Pakistani addresses and phone numbers.\n• Simplifies payment method extensibility without modifying existing code.', options: { color: TEXT_MUTED } }
  ], {
    x: 1.1,
    y: 2.55,
    w: 5.0,
    h: 4.0,
    fontSize: 11,
    fontFace: 'Arial'
  });

  // Right column: Comparison
  slide7.addShape(pres.ShapeType.roundRect, {
    x: 6.9,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: DARK_BOX },
    line: { color: GOLD, width: 1.5 }
  });

  slide7.addText('PROCEDURAL VS OBJECT-ORIENTED', {
    x: 7.2,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: GOLD_LIGHT
  });

  slide7.addText([
    { text: '❌ Procedural Approach (Without OOP):\n', options: { bold: true, color: 'F87171' } },
    { text: '• Loose global variables everywhere (cartItems, subtotal, deliveryFee).\n• Math logic copied into multiple React components.\n• Changing delivery fee requires editing 5 separate files.\n• High risk of bugs when state mutates unexpectedly.\n\n', options: { color: TEXT_MUTED } },
    { text: '✅ OOP Approach (Spice District Implementation):\n', options: { bold: true, color: ACCENT_EMERALD } },
    { text: '• Single encapsulated Cart class instance.\n• Private properties with public getters (subtotal, deliveryFee, grandTotal).\n• Adding a new payment method requires just one class without changing UI code.\n• Strict TypeScript compile-time safety.', options: { color: TEXT_MUTED } }
  ], {
    x: 7.2,
    y: 2.55,
    w: 5.0,
    h: 4.0,
    fontSize: 10.5,
    fontFace: 'Arial'
  });

  slide7.addNotes('On Slide 7, I explain why OOP is vital for restaurant systems. In procedural programming, pricing calculations and delivery fees are scattered across multiple components. In Spice District, the Cart class encapsulates all calculation logic in one place, guaranteeing that every component always sees the correct subtotal, discount, and grand total.');

  // ==========================================
  // SLIDE 8: CLASSES AND OBJECTS
  // ==========================================
  const slide8 = pres.addSlide();
  slide8.background = defaultSlideBg;
  addSlideHeader(slide8, 'Domain Modeling', 'Classes and Objects', 'Real domain classes and object instantiation in the Spice District codebase');

  // Left column: 4 Domain Classes
  const domainClasses = [
    { name: 'class FoodItem', role: 'Menu Model', desc: 'Represents Pakistani dishes (Biryani, Karahi, Nihari, BBQ) with encapsulated prices and formatted PKR strings.' },
    { name: 'class Cart', role: 'Business Engine', desc: 'Maintains dishes, quantities, discounts, and enforces the Rs. 2,500 Free Delivery business threshold.' },
    { name: 'class Customer', role: 'Customer Profile', desc: 'Encapsulates client details with automatic Pakistani phone validation, address sanitization, and delivery notes.' },
    { name: 'class RestaurantOrder', role: 'Order Fulfillment', desc: 'Packages confirmed orders with a unique order ID, 4-stage tracking status, and printable receipt formatting.' }
  ];

  domainClasses.forEach((dc, i) => {
    const yPos = 1.9 + i * 1.22;
    slide8.addShape(pres.ShapeType.roundRect, {
      x: 0.8,
      y: yPos,
      w: 5.5,
      h: 1.1,
      rectRadius: 0.1,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.2 }
    });

    slide8.addText(`${dc.name}  [${dc.role}]`, {
      x: 1.0,
      y: yPos + 0.1,
      w: 5.1,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: GOLD_LIGHT
    });

    slide8.addText(dc.desc, {
      x: 1.0,
      y: yPos + 0.42,
      w: 5.1,
      h: 0.6,
      fontSize: 9.5,
      color: TEXT_MUTED
    });
  });

  // Right column: Code Box
  slide8.addShape(pres.ShapeType.roundRect, {
    x: 6.8,
    y: 1.9,
    w: 5.7,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: DARK_BOX },
    line: { color: GOLD, width: 1.5 }
  });

  slide8.addText('TYPESCRIPT CODE: OBJECT INSTANTIATION', {
    x: 7.1,
    y: 2.1,
    w: 5.1,
    h: 0.35,
    fontSize: 11,
    bold: true,
    color: GOLD_LIGHT
  });

  const codeSnippet = `// 1. Instantiating a Customer Object
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
  "sindhi-mutton-biryani",
  "Sindhi Royal Mutton Biryani",
  "سندھی شاہی مٹن بریانی",
  "biryani",
  1650,
  "Aromatic saffron basmati rice with mutton",
  "/images/food/sindhi-mutton-biryani.jpg",
  "Hot",
  "Claypot Dum Cooking",
  "Serves 1-2 Persons",
  "25-30 mins"
);

// 3. Adding to Cart & Calculating Grand Total
const cart = new Cart();
cart.addItem(biryani, 2, "Hot");
console.log(cart.grandTotal); // Auto calculated`;

  slide8.addText(codeSnippet, {
    x: 7.1,
    y: 2.5,
    w: 5.1,
    h: 4.1,
    fontSize: 9,
    color: ACCENT_EMERALD,
    fontFace: 'Courier New'
  });

  slide8.addNotes('Slide 8 displays our actual domain classes. FoodItem models Pakistani dishes; Cart manages items and calculates bills; Customer validates Pakistani phone and address inputs; and RestaurantOrder packages the final order. The code sample on the right shows how objects are instantiated and utilized.');

  // ==========================================
  // SLIDE 9: THE FOUR PILLARS OF OOP
  // ==========================================
  const slide9 = pres.addSlide();
  slide9.background = defaultSlideBg;
  addSlideHeader(slide9, 'Core OOP Architecture', 'The Four Pillars of OOP', 'How Encapsulation, Inheritance, Polymorphism, and Abstraction are implemented');

  const pillars = [
    {
      name: '1. Encapsulation',
      desc: 'Private internal properties (e.g. private _items, private _phone) protected from outside interference. Access is strictly controlled through public getters and validation setters.',
      code: `public get deliveryFee(): number {\n  return this.subtotal >= 2500 ? 0 : 200;\n}`
    },
    {
      name: '2. Inheritance',
      desc: 'Child classes inherit state and methods from parent classes using extends, avoiding repeated code while adding specialized features.',
      code: `class DesiSpecialtyFoodItem extends FoodItem {\n  // Specialized Pakistani claypot attributes\n}`
    },
    {
      name: '3. Polymorphism',
      desc: 'Same method interface exhibiting different behaviors at runtime. Calling payment.getInstructions() returns the specific instructions for Cash, JazzCash, or Card.',
      code: `// Polymorphic payment execution\npaymentInstance.getInstructions(grandTotal);`
    },
    {
      name: '4. Abstraction',
      desc: 'Abstract classes define core architectural blueprints with abstract methods that derived classes must implement.',
      code: `abstract class PaymentMethod {\n  abstract processPayment(amt: number): Result;\n}`
    }
  ];

  pillars.forEach((p, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const xPos = 0.8 + col * 5.95;
    const yPos = 1.9 + row * 2.5;

    slide9.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 5.75,
      h: 2.35,
      rectRadius: 0.12,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.3 }
    });

    slide9.addText(p.name, {
      x: xPos + 0.2,
      y: yPos + 0.15,
      w: 5.35,
      h: 0.35,
      fontSize: 12,
      bold: true,
      color: GOLD_LIGHT
    });

    slide9.addText(p.desc, {
      x: xPos + 0.2,
      y: yPos + 0.52,
      w: 5.35,
      h: 0.95,
      fontSize: 10,
      color: TEXT_MUTED
    });

    slide9.addShape(pres.ShapeType.roundRect, {
      x: xPos + 0.2,
      y: yPos + 1.5,
      w: 5.35,
      h: 0.7,
      rectRadius: 0.08,
      fill: { color: DARK_BOX }
    });

    slide9.addText(p.code, {
      x: xPos + 0.3,
      y: yPos + 1.55,
      w: 5.15,
      h: 0.6,
      fontSize: 8.5,
      color: ACCENT_EMERALD,
      fontFace: 'Courier New'
    });
  });

  slide9.addNotes('Slide 9 explains the Four Pillars of OOP in Spice District. Encapsulation protects private cart items and phone numbers; Inheritance allows DesiSpecialtyFoodItem to extend FoodItem; Polymorphism lets us treat CashOnDelivery, JazzCashPayment, and CardPayment uniformly; and Abstraction enforces method contracts via abstract classes.');

  // ==========================================
  // SLIDE 10: ADDITIONAL OOP CONCEPTS
  // ==========================================
  const slide10 = pres.addSlide();
  slide10.background = defaultSlideBg;
  addSlideHeader(slide10, 'Advanced Language Concepts', 'Additional OOP Concepts', 'Constructors, Getters/Setters, Method Overriding, Interfaces, and super()');

  const advancedConcepts = [
    {
      title: 'Constructors & super()',
      desc: 'Constructors initialize object properties with default parameters. Child classes invoke super(...) to execute the parent class constructor before adding subclass fields.'
    },
    {
      title: 'Getters and Setters',
      desc: 'Controlled data access: get formattedPrice() returns "Rs. 1,650", and set price() validates that food prices cannot be negative numbers.'
    },
    {
      title: 'Method Overriding',
      desc: 'Subclasses customize parent behaviors. DesiSpecialtyFoodItem overrides getServingDescription() using super.getServingDescription() plus cooking heritage.'
    },
    {
      title: 'Multiple Inheritance in TypeScript (Interfaces)',
      desc: 'TypeScript prohibits multiple class inheritance. We demonstrate this concept by implementing multiple interfaces (IHalalStandard & IClaypotCooked) on a single class.'
    }
  ];

  advancedConcepts.forEach((ac, i) => {
    const yPos = 1.9 + i * 1.22;
    slide10.addShape(pres.ShapeType.roundRect, {
      x: 0.8,
      y: yPos,
      w: 5.6,
      h: 1.1,
      rectRadius: 0.1,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.2 }
    });

    slide10.addText(ac.title, {
      x: 1.0,
      y: yPos + 0.1,
      w: 5.2,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: GOLD_LIGHT
    });

    slide10.addText(ac.desc, {
      x: 1.0,
      y: yPos + 0.42,
      w: 5.2,
      h: 0.6,
      fontSize: 9.5,
      color: TEXT_MUTED
    });
  });

  // Right column: Code Box
  slide10.addShape(pres.ShapeType.roundRect, {
    x: 6.9,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: DARK_BOX },
    line: { color: GOLD, width: 1.5 }
  });

  slide10.addText('TYPESCRIPT: OVERRIDING & MULTIPLE INTERFACES', {
    x: 7.2,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 10.5,
    bold: true,
    color: GOLD_LIGHT
  });

  const advSnippet = `// Multiple Interfaces (Multiple Inheritance in TS)
export class DesiSpecialtyFoodItem 
  extends FoodItem 
  implements IHalalStandard, IClaypotCooked {

  constructor(
    id: string,
    name: string,
    urduName: string,
    price: number,
    public cookingTechnique: string
  ) {
    // Calling Parent Constructor
    super(id, name, urduName, "desi-specialty", price);
  }

  // Method Overriding with super.method()
  public override getServingDescription(): string {
    const baseText = super.getServingDescription();
    return \`\${baseText} • Heritage \${this.cookingTechnique}\`;
  }
}`;

  slide10.addText(advSnippet, {
    x: 7.2,
    y: 2.5,
    w: 5.0,
    h: 4.1,
    fontSize: 9,
    color: ACCENT_EMERALD,
    fontFace: 'Courier New'
  });

  slide10.addNotes('Slide 10 details our advanced OOP concepts. We demonstrate constructors, getters and setters, method overriding, and the super() keyword. Since TypeScript does not support multiple class inheritance, we properly demonstrated this concept through multiple interfaces: DesiSpecialtyFoodItem implements both IHalalStandard and IClaypotCooked.');

  // ==========================================
  // SLIDE 11: PROJECT DEMONSTRATION
  // ==========================================
  const slide11 = pres.addSlide();
  slide11.background = defaultSlideBg;
  addSlideHeader(slide11, 'System Verification & Walkthrough', 'Project Demonstration', 'Live application walkthrough from food selection to verified receipt issuance');

  const demoSteps = [
    { step: 'Step A: Menu & Customization', desc: 'User browses Pakistani dishes, selects spiciness (Mild to Desi Fiery) and adds chef cooking notes.' },
    { step: 'Step B: Cart & Discount Engine', desc: 'Slide-over cart recalculates totals, applies promo codes (SPICE10) and unlocks free delivery when subtotal reaches Rs. 2,500.' },
    { step: 'Step C: Verified Checkout', desc: 'Customer enters verified Pakistani phone (03XX), picks city and synchronized area, and chooses on-delivery payment.' },
    { step: 'Step D: Receipt & Order Tracking', desc: 'Generates verified order receipt with unique ID, 35-45 min delivery estimate, live status tracker, and print option.' }
  ];

  demoSteps.forEach((ds, i) => {
    const xPos = 0.8 + i * 2.95;
    slide11.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 1.9,
      w: 2.8,
      h: 3.4,
      rectRadius: 0.12,
      fill: { color: CARD_BG },
      line: { color: GOLD, width: 1.3 }
    });

    slide11.addText(ds.step, {
      x: xPos + 0.15,
      y: 2.1,
      w: 2.5,
      h: 0.45,
      fontSize: 11,
      bold: true,
      color: GOLD_LIGHT
    });

    slide11.addText(ds.desc, {
      x: xPos + 0.15,
      y: 2.65,
      w: 2.5,
      h: 2.5,
      fontSize: 10,
      color: TEXT_MUTED
    });
  });

  // Verification Results Banner
  slide11.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 5.5,
    w: 11.7,
    h: 1.35,
    rectRadius: 0.12,
    fill: { color: DARK_BOX },
    line: { color: ACCENT_EMERALD, width: 1.5 }
  });

  slide11.addText('SYSTEM VERIFICATION & PRODUCTION BUILD STATUS', {
    x: 1.1,
    y: 5.65,
    w: 11.0,
    h: 0.25,
    fontSize: 10,
    bold: true,
    color: ACCENT_EMERALD
  });

  slide11.addText('✓ TypeScript Compilation (tsc --noEmit): PASSED with 0 errors\n✓ Vite Production Build (npm run build): PASSED successfully\n✓ LocalStorage State Persistence: Verified across page reloads\n✓ Responsive Layout: Fully optimized for Mobile, Tablet, and Desktop', {
    x: 1.1,
    y: 5.95,
    w: 11.0,
    h: 0.8,
    fontSize: 9.5,
    color: TEXT_WHITE,
    fontFace: 'Arial'
  });

  slide11.addNotes('Slide 11 reviews the live verification of Spice District. Every phase—from spice customization to checkout and receipt printing—has been verified. Both the TypeScript compiler and Vite production build pass cleanly with zero errors.');

  // ==========================================
  // SLIDE 12: CONCLUSION & FUTURE SCOPE
  // ==========================================
  const slide12 = pres.addSlide();
  slide12.background = defaultSlideBg;
  addSlideHeader(slide12, 'Summary & Future Scope', 'Conclusion & Learning Outcomes', 'Project evaluation, key academic takeaways, and future roadmap');

  slide12.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 1.5 }
  });

  slide12.addText('🎯 WHAT WAS ACCOMPLISHED', {
    x: 1.1,
    y: 2.1,
    w: 5.0,
    h: 0.35,
    fontSize: 12,
    bold: true,
    color: GOLD_LIGHT
  });

  slide12.addText([
    { text: '• Built a complete, production-grade Pakistani restaurant ordering system.\n\n', options: { color: TEXT_WHITE } },
    { text: '• Successfully implemented all required OOP concepts in TypeScript without breaking the existing UI or styling.\n\n', options: { color: TEXT_WHITE } },
    { text: '• Achieved complete separation of concerns between React presentation and domain business logic.\n\n', options: { color: TEXT_WHITE } },
    { text: '• Delivered clean verification with zero build errors and zero runtime bugs.', options: { color: TEXT_WHITE } }
  ], {
    x: 1.1,
    y: 2.55,
    w: 5.0,
    h: 4.0,
    fontSize: 11,
    fontFace: 'Arial'
  });

  // Right column: Student credentials & Q&A
  slide12.addShape(pres.ShapeType.roundRect, {
    x: 6.9,
    y: 1.9,
    w: 5.6,
    h: 4.9,
    rectRadius: 0.12,
    fill: { color: CARD_BG },
    line: { color: GOLD, width: 1.5 }
  });

  slide12.addText('THANK YOU!', {
    x: 7.2,
    y: 2.2,
    w: 5.0,
    h: 0.6,
    fontSize: 26,
    bold: true,
    color: GOLD_LIGHT,
    align: 'center',
    fontFace: 'Georgia'
  });

  slide12.addText([
    { text: 'Project: ', options: { bold: true, color: TEXT_MUTED } },
    { text: 'Spice District Restaurant Ordering Website\n', options: { color: TEXT_WHITE } },
    { text: 'Student Name: ', options: { bold: true, color: TEXT_MUTED } },
    { text: 'Anfal Khursheed\n', options: { bold: true, color: GOLD_LIGHT } },
    { text: 'Set Number: ', options: { bold: true, color: TEXT_MUTED } },
    { text: '23252059\n\n', options: { bold: true, color: GOLD_LIGHT } },
    { text: 'Future Roadmap:\n', options: { bold: true, color: TEXT_WHITE } },
    { text: '• PostgreSQL backend integration for multi-branch orders\n• Rider GPS tracking and SMS alerts\n• Table reservation module using an OOP Reservation class\n\n', options: { color: TEXT_MUTED } },
    { text: 'Questions and feedback are warmly welcome!', options: { bold: true, color: GOLD_LIGHT } }
  ], {
    x: 7.2,
    y: 2.85,
    w: 5.0,
    h: 3.8,
    fontSize: 11,
    align: 'center',
    fontFace: 'Arial'
  });

  slide12.addNotes('In conclusion, Spice District demonstrates how modern web applications can be built with strict, professional Object-Oriented Programming in TypeScript while preserving an authentic, regal Pakistani restaurant brand. Thank you very much for your time and guidance. I welcome any questions!');

  return pres;
}

/**
 * Downloads the PPTX file directly in the browser
 */
export async function downloadSpiceDistrictPptx(): Promise<void> {
  const pres = await createSpiceDistrictPresentation();
  await pres.writeFile({ fileName: 'Spice_District_Presentation.pptx' });
}

# EZ Labs Frontend Assignment

A responsive single-page web application built with **React + Vite** and **Tailwind CSS**, featuring a professional home page with a fully functional contact form.

> **Assignment Submission** for EZ Labs Frontend Developer Position

## 🖼️ Live Preview https://ezlabs.netlify.app/

![Desktop View](./screenshots/desktop.png)
*Desktop View - Home Page*

![Mobile View](./screenshots/mobile.png)
*Mobile Responsive Design*

![Contact Form](./screenshots/contact-form.png)
*Contact Form with Validation*

## ✨ Key Features

- ✅ **Pixel-Perfect Responsive Design** (Mobile-first approach)
- ✅ **Modern UI/UX** with smooth animations and transitions
- ✅ **Contact Form** with client-side validation
- ✅ **API Integration** - Form submits to backend endpoint
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Clean Code** - Modular components, custom hooks

## 🛠️ Tech Stack

- **React 18** - Component-based UI
- **Vite 5** - Fast build tool
- **Tailwind CSS 3** - Utility-first styling
- **Custom Hooks** - Form validation logic

## 📦 Quick Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

Clone the repository
git clone https://github.com/YOUR-USERNAME/ez-labs-assignment.git
cd ez-labs-assignment

Install dependencies
npm install

Run development server
npm run dev

text

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx # Responsive navigation
│ ├── Hero.jsx # Landing section
│ ├── ContactForm.jsx # Form with validation
│ └── Footer.jsx # Footer section
├── hooks/
│ └── useFormValidation.js # Custom validation hook
├── App.jsx # Main component
└── index.css # Tailwind & global styles

text

## 🎯 Assignment Requirements Completed

### ✅ Home Page Implementation
- Responsive header with mobile menu
- Hero section with call-to-action
- Professional footer

### ✅ Contact Form Features
- **API Endpoint:** `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method:** POST
- **Validation Rules:**
  - Name: 2-100 characters (required)
  - Email: Valid format (required)
  - Phone: 7-15 digits with optional + prefix (required)
  - Message: 10-1000 characters (required)
- Real-time validation on blur
- Loading state during submission
- Success/Error message display
- Accessible with ARIA attributes

### ✅ Code Quality
- Modular component architecture
- Custom React hooks for state management
- Clean, readable code with comments
- Semantic HTML5
- Responsive breakpoints (mobile, tablet, desktop)

## 🏗️ Build for Production

npm run build

text

Output will be in the `dist/` folder.

## 📱 Responsive Design

| Device | Breakpoint | Status |
|--------|-----------|--------|
| Mobile | < 768px | ✅ Optimized |
| Tablet | 768px - 1024px | ✅ Optimized |
| Desktop | > 1024px | ✅ Optimized |

## 🔧 Technologies Used

- **Framework:** React with Vite
- **Styling:** Tailwind CSS
- **Form Handling:** Custom hooks
- **API Calls:** Native Fetch API
- **Version Control:** Git

### 📝 Assignment Details

**Company:** EZ Labs  
**Position:** Frontend Developer  
**Submission Date:** November 2025  
**Tech Requirements:** React (Vite) + Tailwind CSS ✅

**Assignment Scope:**
- Home page implementation from Figma design
- Responsive layout (mobile + desktop)
- Contact form with validation and API integration
- Clean, modular code structure

---

Made with ❤️ for EZ Labs Technical Assessment

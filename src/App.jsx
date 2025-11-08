import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

// import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/primary" element={<PrimaryBooks />} />
          <Route path="/highschool" element={<HighSchoolBooks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

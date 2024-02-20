import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import "./App.css";
import Header from './Component/Header/Header';
import ContactForm from './Component/ContactForm/ContactForm';


function App() {
  return (
    <div>
      <Navbar />
      <main >

      <Header />
      <ContactForm />
      </main>
    </div>
  )
}

export default App
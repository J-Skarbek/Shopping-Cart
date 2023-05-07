import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
// import MailingListSignUp from './components/MailingListSignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Homepage />
    <Footer />

    </>
  )
}

export default App

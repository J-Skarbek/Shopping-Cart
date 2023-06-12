import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import RouteSwitch from '../RouteSwitch';
// import MailingListSignUp from './components/MailingListSignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
    <Header />
    <RouteSwitch />
    {/* <Homepage /> */}
    <Footer />

    </div>
  )
}

export default App;

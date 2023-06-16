import React from "react";
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import RouteSwitch from '../RouteSwitch';
// import MailingListSignUp from './components/MailingListSignUp';

function App() {
  const [count, setCount] = React.useState(0);

  const [cartContents, setCartContents] = React.useState([]);

  return (
    <div className="page">
    <Header 
      cartContents = {cartContents}
      setCartContents = {setCartContents} 
    />
    <RouteSwitch 
      cartContents = {cartContents}
      setCartContents = {setCartContents} 
    />
    {/* <Homepage /> */}
    <Footer />

    </div>
  )
}

export default App;

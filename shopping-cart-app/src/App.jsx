import React from "react";
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Root from '../RouteSwitch';
// import MailingListSignUp from './components/MailingListSignUp';

function App() {
  const [count, setCount] = React.useState(0);

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);

  return (
    <div className="page">
    <Header 
      cartContents = {cartContents}
      setCartContents = {setCartContents} 
    />
    <Root
      cartContents = {cartContents}
      setCartContents = {setCartContents} 
    />
    {/* <Homepage /> */}
    <Footer />

    </div>
  )
}

export default App;
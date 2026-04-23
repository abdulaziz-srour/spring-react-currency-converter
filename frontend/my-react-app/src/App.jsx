import { useState } from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import './App.css'

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="background">
      <div className="appdiv">
        <Header step = {step} />
        <Body step = {step} setStep = {setStep} />
        <Footer />
      </div>
    </div>
  );
}

export default App

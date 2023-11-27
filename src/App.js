import React from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Registation from "./components/Register/Registation";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import LegalDis from "./components/LegalDis/LegalDis";
import Terms from "./components/Terms&Condition/Terms_condition";
// import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import CreditCard from "./components/Credit/Credit";
import PrepaidCard from "./components/Prepaid/Prepaid";
import DebitCard from "./components/Debit/Debit";
import FixedDeposit from "./components/Fixed/Fixed";
import Receipt from "./components/Receipt/Receipt";
import NetBanking from "./components/Netbanking/Netbanking";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
       {/* <Routes> */}
        {/* <Route path="/" element={<PrivateRouter element={<Home/>}/>}/>  */}
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/legaldis" element={<LegalDis/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/credit" element={<CreditCard />}/>
        <Route path="/prepaid" element={<PrepaidCard />}/>
        <Route path="/debit" element={<DebitCard />}/>
        <Route path="/fixed" element={<FixedDeposit />}/>
        <Route path="/receipt" element={<Receipt />}/>
        <Route path="/netbanking" element={<NetBanking />}/>
       </Routes> */}
       <AnimatedRoutes />
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
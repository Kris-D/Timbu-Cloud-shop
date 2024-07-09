import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { AccountCreation, Cart, ConfirmOrder, PaymentMethod, Productlist, SuccessfullyOrder } from "./pages";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes> 
     <Route path="/" element={<Productlist/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/accountCreation" element={<AccountCreation/>} />
     <Route path="/paymentMethod" element={<PaymentMethod/>} />
     <Route path="/confirmOrder" element={<ConfirmOrder/>} />
     <Route path="/successfullyOrder" element={<SuccessfullyOrder/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

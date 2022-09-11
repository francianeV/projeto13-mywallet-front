import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import { useState } from "react";
import LoginScreen from "./Login/LoginScreen";
import SignUp from "./Login/SigunUp";
import MyContext from "./Context/MyContext";
import RecordsScreen from "./Registros/RecordsScreen";
import CashIn from "./Registros/CashIn";
import CashOut from "./Registros/CashOut";

export default function App() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');

  return (
    <MyContext.Provider value={{token, setToken, name, setName}}>
    <GlobalStyle />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/registros" element={<RecordsScreen />} />
            <Route path="/cashIn" element={<CashIn />} />
            <Route path="/cashOut" element={<CashOut />} />
        </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

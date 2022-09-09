import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import LoginScreen from "./Login/LoginScreen";
import SignUp from "./Login/SigunUp";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastro" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import  { Layout }  from './components/Layout';
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/reset" element={<Reset />} />
          <Route  path="/dashboard" element={<Layout />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
    
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="home-page">
      <Header />
      
       <Portfolio />

      <Footer /> 
    </div>


  );
}

export default App;

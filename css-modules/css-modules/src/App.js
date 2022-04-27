import logo from './logo.svg';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Arrow } from './components/Arrow';
import { Footer } from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Arrow/>
      <Footer />
    </div>
  );
}

export default App;

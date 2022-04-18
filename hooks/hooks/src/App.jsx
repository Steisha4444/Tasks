
import HooksTimer from './components/HooksTimer';
import { ToDo } from './components/ToDo';
import './App.css';
import {ThemeContext, themes} from './components/Theme';


function App() {
  
  return (
    <div>
     <ThemeContext.Provider value={themes.dark}>
     <HooksTimer/>
     <ToDo />
     </ThemeContext.Provider>
    </div>
  );
}

export default App;

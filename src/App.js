import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recipe from './components/Recipe';


function App() {
  return (
    <div className="App">
       <Navbar/>
        <Hero/>
        <Recipe/>
    </div>
  );
}

export default App;

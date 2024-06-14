import logo from './logo.svg';
import "./index.css";
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HeroBanner from './componentes/HeroBanner';
import Button from './componentes/Button';
import SitterBanner from './componentes/SitterBanner';

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <SitterBanner/>
      <Footer/>
    </div>
  );
}

export default App;

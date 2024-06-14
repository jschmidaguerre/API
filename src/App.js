import logo from './logo.svg';
import "./index.css";
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HeroBanner from './componentes/HeroBanner';
import Button from './componentes/Button';
import SitterBanner from './componentes/SitterBanner';
import SearchBar from './componentes/SearchBar';
import ModalLogin from './componentes/ModalLogin';
import React from 'react';
import FilterBar from './componentes/FilterBar';

function App() {
  const [showModal, setShowModal] = React.useState(true);

    const handleClose = () => {
        setShowModal(false);
    };
  
  return (
    <div className="App">
      <HeroBanner/>
      <FilterBar/>
      <SitterBanner/>
      <Footer/>
      <SearchBar/>

      <div>
            {showModal && <ModalLogin onClose={handleClose} />}
        </div>
    </div>
  );
}

export default App;

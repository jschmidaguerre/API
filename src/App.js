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
import Card from './componentes/Card';
import RestablecerContrasena from './componentes/RestablecerContrasena'
import ProfileBanner from './componentes/ProfileBanner';

function App() {
  const [showModal, setShowModal] = React.useState(true);

    const handleClose = () => {
        setShowModal(false);
    };
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    const handleOpen = () => {
        setIsModalOpen(true);
    };
  
  return (
    <div className="App">
      <Header/>
      <HeroBanner/>
      <ProfileBanner/>
      <FilterBar/>
      <Card nombre="Juan Pinzón" categoria="Perros" duracion="10" costo="9990" descripcion="hola" estrellas="3" imagen="/images/elon.png"/>
      <SitterBanner/>

      <div class="flex justify-center m-10">
        <SearchBar/>

      </div>
      <div class="flex justify-center m-10">
        <Button onClick={handleOpen} text="Restablecer Contraseña"></Button>
        {isModalOpen && <RestablecerContrasena onClose={handleCloseModal} />}    
      </div>


      <Footer/>

    </div>
  );
}

export default App;

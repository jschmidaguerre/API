import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HeroBanner from './componentes/HeroBanner';
import Button from './componentes/Button';
import SitterBanner from './componentes/SitterBanner';
import SearchBar from './componentes/SearchBar';
import ModalLogin from './componentes/ModalLogin';
import FilterBar from './componentes/FilterBar';
import Card from './componentes/Card';
import RestablecerContrasena from './componentes/RestablecerContrasena'
import ProfileBanner from './componentes/ProfileBanner';
import ReviewBox from "./componentes/ReviewBox";
import Reviews from "./componentes/Reviews";

function App() {
  const [modals, setModals] = React.useState({
    restablecerContrasena: false,
    reviews: false,
  });

  // Función para abrir un modal específico
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  // Función para cerrar un modal específico
  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  };

  // Datos de ejemplo para las reseñas
  const reviewsData = [
    { name: 'Ana Gomez', date: '2024-06-18', image: 'images/elon.png', rating: 5, comment: 'Producto excepcional.' },
    { name: 'Roberto Diaz', date: '2024-06-19', image: 'images/elon.png', rating: 4, comment: 'Muy buen servicio.' },
    { name: 'Carlos Gonzalez', date: '2024-06-19', image: 'images/elon.png', rating: 4, comment: 'Un servicio inigualable.' }

  ];

  return (
    <div className="App">
      <Header/>
      <HeroBanner/>
      <ProfileBanner/>
      <FilterBar/>
      <Card nombre="Juan Pinzón" categoria="Perros" duracion="10" costo="9990" descripcion="hola" estrellas="3" imagen="/images/elon.png"/>
      <SitterBanner/>
      <div className="flex justify-center m-10">
        <SearchBar/>
      </div>
      <div className="flex justify-center m-10">
        <Button onClick={() => openModal('restablecerContrasena')} text="Restablecer Contraseña"/>
        {modals.restablecerContrasena && <RestablecerContrasena onClose={() => closeModal('restablecerContrasena')} />}    
      </div>
      
      <ReviewBox name="Juan Pinzón" date="24/04/2024" image="images/elon.png" rating="3" comment="Increíble servicio"/>
      <div className="container mx-auto px-4">
        <button onClick={() => openModal('reviews')} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Mostrar Reseñas
        </button>
        {modals.reviews && (
          <Reviews 
            isOpen={modals.reviews}
            onClose={() => closeModal('reviews')}
            reviews={reviewsData}
          />
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
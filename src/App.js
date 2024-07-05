import React, { useState } from 'react';import Header from './componentes/header/Header';
import Footer from './componentes/Footer';
import HeroBanner from './componentes/HeroBanner';
import Button from './componentes/Button';
import SitterBanner from './componentes/SitterBanner';
import SearchBar from './componentes/header/SearchBar';
import ModalLogin from './componentes/ModalLogin';
import FilterBar from './componentes/FilterBar';
import Card from './componentes/Card';
import RestablecerContrasena from './componentes/RestablecerContrasena'
import ProfileBanner from './componentes/ProfileBanner';
import ReviewBox from "./componentes/ReviewBox";
import Reviews from "./componentes/Reviews";
import SelectService from './componentes/SelectService';
import ModalContratar from './componentes/ModalContratar';
import PerfilCreado from './componentes/perfilCreado/PerfilCreado';
import MyReservations from './componentes/MyReservations';
import MyPets from './componentes/MyPets';
import PetModal from './componentes/PetModal';
import CreateService from './componentes/CreateService';
import ProfileCard from './componentes/ProfileCard';
import ServiceList from './componentes/ServiceList';
import RegisterModal from './componentes/RegisterModal'
import MyServices from './componentes/MyServices';


import { FilterProvider } from './FilterContext'; // Asegúrate de importar el FilterProvider
import ReservationCard from './componentes/ReservationCard';
import ContractsList from './componentes/ContractsList';



function App() {
  
  const [activeComponent, setActiveComponent] = useState('');
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 'MyPets':
      return (
        <>
          <MyPets />
          <div className="flex justify-center mt-10">
            <button
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => openModal('PetModal')}
            >
              Agregar mascota
            </button>
            {modals.PetModal && (
              <PetModal onClose={() => closeModal('PetModal')} onSubmit={handleSubmit} />
            )}
          </div>
        </>
      );
      case 'MyReservations':
        return <MyReservations reservations={reservationsData} />;
      case 'ProfileCard':
        return <ProfileCard />;
        case 'MyServices':
          return (
            <>
              <MyServices />
              <div className="flex justify-center mt-10">
                <button
                  className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => openModal('CreateService')}
                >
                  Crear servicio
                </button>
                {modals.CreateService && <CreateService onClose={() => closeModal('CreateService')} />}
              </div>
            </>
          );
      case 'Reviews':
        return (
          <>
            <ReviewBox name="Juan Pinzón" date="24/04/2024" image="images/elon.png" rating="3" comment="Increíble servicio"/>
            <div className="container flex justify-center mx-auto px-4">
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
          </>
        );
        case 'MyRequests':
        return (
          <>
            <ContractsList/>
          </>
        );
      default:
        return null; // Componente por defecto o página de inicio
    }
  };

  const handleSubmit = () => {
    // Lógica para refrescar los datos o realizar otras acciones necesarias
    console.log('New pet added');
    // Aquí podrías actualizar la lista de mascotas si fuera necesario
  };
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
    { name: 'Ana Gomez', date: '2024-06-18', image: 'images/trump.png', rating: 5, comment: 'Producto excepcional.' },
    { name: 'Roberto Diaz', date: '2024-06-19', image: 'images/elon.png', rating: 4, comment: 'Muy buen servicio.' },
    { name: 'Carlos Gonzalez', date: '2024-06-19', image: 'images/charly.jpeg', rating: 4, comment: 'Un servicio inigualable.' }

  ];
  const petsData = [
    {
      name: "Max",
      petType: "Cachorro",
      breed: "Labrador",
      gender: "Masculino",
      neutered: false,
      age: "3 meses",
      weight: "8kg"
    },
    {
      name: "Bella",
      petType: "Gato",
      breed: "Persa",
      gender: "Femenino",
      neutered: true,
      age: "2 años",
      weight: "4kg"
    }
  ];
  

  const reservationsData = [
    {
      photo: "images/elon.png",
      name: "Juan Pinzón",
      serviceType: "Visitas a casa",
      date: "04/06/2024",
      cost: "10000",
      status: "Aceptada"
    },
    {
      photo: "images/charly.jpeg",
      name: "Ana García",
      serviceType: "Consulta en línea",
      date: "05/06/2024",
      cost: "15000",
      status: "Pendiente"
    },
    {
      photo: "images/trump.png",
      name: "Carlos Pérez",
      serviceType: "Visitas a casa",
      date: "06/06/2024",
      cost: "12000",
      status: "Aceptada"
    },
    {
      photo: "images/migue.jpg",
      name: "Luisa Martínez",
      serviceType: "Consulta en línea",
      date: "07/06/2024",
      cost: "13000",
      status: "Cancelada"
    }
  ];
  


  return (
    <div className="App">
      {/* ///////////////////Header/////////////////// */}
      <Header onLoginClick={() => openModal('ModalLogin')} onCreateUserClick={() => openModal('registerModal')} />
      {/* ///////////////////PerfilCreado/////////////////// */}
      <PerfilCreado/>

      {/* ///////////////////Banner/////////////////// */}
      
      <HeroBanner/>
      <FilterBar/>
      <ServiceList/>
      <ProfileBanner setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <SitterBanner/>

      
      <div className="flex justify-center m-10">
            
            {modals.restablecerContrasena && <RestablecerContrasena onClose={() => closeModal('restablecerContrasena')} />}
        </div>

      <div className="container mx-auto px-4">
        
        {modals.reviews && (
          <Reviews 
            isOpen={modals.reviews}
            onClose={() => closeModal('reviews')}
            reviews={reviewsData}
          />
        )}
      </div>
      <div className="flex justify-center">
      
            {modals.ModalLogin && <ModalLogin isOpen={modals.ModalLogin} onClose={() => closeModal('ModalLogin')} />}        </div>

      <div className="flex justify-center mt-10">
            
            {modals.SelectService && <SelectService onClose={() => closeModal('SelectService')} />}
        </div>

      <div className="flex justify-center mt-10">
            
            {modals.ModalContratar && <ModalContratar onClose={() => closeModal('ModalContratar')} />}
        </div>


      <div className="flex justify-center items-center">
      </div>

      <div className="flex justify-center mt-10">
      
      {modals.PetModal && (
        <PetModal onClose={() => closeModal('PetModal')} onSubmit={handleSubmit} />
      )}
    </div>

      <div className="flex justify-center mt-10">
            
            {modals.CreateService && <CreateService onClose={() => closeModal('CreateService')} />}
        </div>



      <div className="flex justify-center mt-10">
                
                {modals.registerModal && <RegisterModal isOpen={modals.registerModal} onClose={() => closeModal('registerModal')} />}
            </div>



      

      <Footer/>
      

    </div>
  );
}

export default App;
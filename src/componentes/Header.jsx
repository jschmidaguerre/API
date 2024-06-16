import React from 'react';
import Logo from './Logo';
import Nav from './Nav'

const Header = () => {
  return (
    <header className='bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between'>
        
        <Logo/>
        <Nav/>
        Header  
    </header>

  );
};

export default Header;

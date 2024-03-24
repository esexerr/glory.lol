import React, { useState } from 'react';
import logo from './images/moon.ico';
import example from './images/right.png';
import examplephone from './images/see.png';
import arrow from './images/arrow.svg';
import './home.css';

function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openRegister = () => {
    closeLoginModal(); // Close the login modal if it's open
    openRegisterModal(); // Open the register modal
  };

  return (
    <>
      <nav className='navbar'></nav>
      
      <a href='#' className='login' onClick={openLoginModal}>Login</a>
      <a href='#' className='register' onClick={openRegisterModal}>Register</a>
  
      <a href='#' className='discord'>Discord</a>
  
      <h1 className='header'>shdw.site, linking you to the world, one click at a time!</h1>
      <p className='p1'>Say goodbye to scattered social media links and hello to streamlined accessibility. Our platform empowers you to centralize your online presence effortlessly.</p>
      
      <a href='#' className='learnmore' onClick={openRegister}>Get Started</a>
      
  
      
      <a href='/'>
        <img src={logo} alt="" className='logo'/>
      </a>
  
      <a href='/'>
        <h1 className='logo-text'>shdw site</h1>
      </a>
      <h1 className='logo-dot'>. </h1>
          
      <img src={example} alt='' className='example' />
      <img src={examplephone} alt='' className='example1' />
          
      <img src={arrow} alt='' className='arrow' />
  
      {/* Login Modal */}
      <div className={`modal ${loginModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeLoginModal}>&times;</span>
          <p className='modal-title'>Login to your shdw.site account</p>
          <input type="email"  placeholder='Email' className='email' required></input>
          <input type="password"  placeholder='Password' className='password' required></input>
          <button className='submit' type="submit">Login</button>
        </div>
      </div>
      
      {/* Register Modal */}
      <div className={`modal ${registerModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeRegisterModal}>&times;</span>
          <p className='modal-title'>Register a shdw.site account</p>
          <input type="email"  placeholder='Email' className='email' required></input>
          <input type="password"  placeholder='Password' className='password' required></input>
          <button className='submit' type="submit">Register</button>
        </div>
      </div>
    </>
  );
}

export default Home;

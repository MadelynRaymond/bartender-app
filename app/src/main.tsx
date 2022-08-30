import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Modal from 'react-modal';
import ModalProvider from './context/modal';
import CartProvider from './context/cartContext';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalProvider>
    <CartProvider>
      <App></App>
    </CartProvider>    
  </ModalProvider>
)

import React, { createContext, useState } from 'react';
import Modal from '../component/Modal';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [credential, setCredential] = useState(
    JSON.parse(localStorage.getItem("credential"))
  );

  const updateCredential = (newMessage) => {
    setCredential(newMessage);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <MyContext.Provider value={{ credential, updateCredential, openModal }}>
    <div>
      <Modal isOpen={isModalOpen} close={closeModal} />
    </div>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

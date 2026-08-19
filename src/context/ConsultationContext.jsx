import React, { createContext, useContext, useState } from 'react';

const ConsultationContext = createContext();

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

export const ConsultationProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConsultationModal = () => setIsModalOpen(true);
  const closeConsultationModal = () => setIsModalOpen(false);

  return (
    <ConsultationContext.Provider value={{ isModalOpen, openConsultationModal, closeConsultationModal }}>
      {children}
    </ConsultationContext.Provider>
  );
};

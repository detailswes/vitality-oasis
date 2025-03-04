import React from 'react';
import {  type JSX } from "react";
interface Program {
  image: JSX.Element;
  text: string;
  description: string;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, program }) => {
  if (!isOpen || !program) return null; 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-bold">{program.text}</h2>
        <img src={program.image.props.src} alt={program.text} className="mt-4 w-full h-auto max-w-xs" 
 />
        <p className="mt-2">{program.description}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
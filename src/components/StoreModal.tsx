import React from 'react';
import { Store } from '../data/stores';

interface StoreModalProps {
  store: Store;
  onClose: () => void;
}

export function StoreModal({ store, onClose }: StoreModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{store.name}</h2>
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-48 object-cover rounded mb-4"
          data-image-request="store detailed image with advertisement visuals"
        />
        <p className="text-gray-700 mb-4">{store.advertisement}</p>
        <button
          onClick={onClose}
          className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}
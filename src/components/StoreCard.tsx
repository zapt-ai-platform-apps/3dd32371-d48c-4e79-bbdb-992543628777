import React from 'react';
import { Store } from '../data/stores';

interface StoreCardProps {
  store: Store;
  onClick: (store: Store) => void;
}

export function StoreCard({ store, onClick }: StoreCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={() => onClick(store)}
    >
      <img
        src={store.image}
        alt={store.name}
        className="w-full h-40 object-cover"
        data-image-request="store image with vibrant market scene"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{store.name}</h2>
        <p className="text-gray-600">{store.description}</p>
      </div>
    </div>
  );
}
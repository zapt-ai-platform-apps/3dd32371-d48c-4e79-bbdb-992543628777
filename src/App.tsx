import React, { useState } from 'react';
import { stores, Store } from './data/stores';
import { StoreCard } from './components/StoreCard';
import { StoreModal } from './components/StoreModal';
import { ZaptBadge } from './components/ZaptBadge';
import { createEvent } from './supabaseClient';
import './index.css';

export default function App() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStoreClick = async (store: Store) => {
    if (isProcessing) return;
    setIsProcessing(true);
    console.log('Store selected:', store.name);
    try {
      await createEvent('store_ad_click', { storeId: store.id });
      console.log('Event recorded for store:', store.id);
    } catch (error) {
      console.error('Failed to record event:', error);
    }
    setSelectedStore(store);
    setIsProcessing(false);
  };

  const closeModal = () => {
    setSelectedStore(null);
  };

  return (
    <div className="min-h-screen h-full flex flex-col bg-gradient-to-r from-green-100 to-blue-100 text-gray-900">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center">Stores & Markets Explorer</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} onClick={handleStoreClick} />
          ))}
        </div>
      </main>
      <footer className="p-4 bg-white text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Stores & Markets Explorer
      </footer>
      {selectedStore && <StoreModal store={selectedStore} onClose={closeModal} />}
      <ZaptBadge />
    </div>
  );
}
"use client";

import { useEffect, useState } from 'react';

const PWAUpdateNotification = () => {
  const [updateReady, setUpdateReady] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.ready.then((registration) => {
      // écoute un nouveau service worker qui s’installe
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // nouvelle version prête
            setUpdateReady(true);
          }
        });
      });
    });
  }, []);

  if (!updateReady) return null;

  const handleReload = () => {
    // demander au service worker d’activer la nouvelle version puis recharger
    navigator.serviceWorker.ready.then(reg => {
      reg.waiting?.postMessage({ type: 'SKIP_WAITING' });
      reg.waiting?.addEventListener('statechange', (e) => {
        if ((e.target as ServiceWorker).state === 'activated') {
          window.location.reload();
        }
      });
    });
  };

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded shadow-lg z-50">
      <p>A new version of this app is available.</p>
      <button
        onClick={handleReload}
        className="mt-2 px-4 py-2 bg-white text-blue-600 font-bold rounded hover:bg-gray-100"
      >
        Reload
      </button>
    </div>
  );
};

export default PWAUpdateNotification;

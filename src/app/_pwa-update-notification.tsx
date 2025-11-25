"use client";

import { Button, Paragraph } from '@/components/page-flow';
import cn from '@/util/function/cn';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const PWAUpdateNotification = () => {

    const [updateReady, setUpdateReady] = useState(false);

    useEffect(() => {

        if (!('serviceWorker' in navigator)) return;

        let registration: ServiceWorkerRegistration | null = null;
        let worker: ServiceWorker | null = null;
        let onStateChange: ((this: ServiceWorker, ev?: Event) => void) | null = null;
        let onUpdateFound: ((this: ServiceWorkerRegistration, ev?: Event) => void) | null = null;

        navigator.serviceWorker.ready.then((reg: ServiceWorkerRegistration) => {
            registration = reg;
            // listening new service worker installation
            onUpdateFound = () => {
                worker = registration?.installing as ServiceWorker | null;
                if (!worker) return;
                onStateChange = () => {
                    if (worker && worker.state === 'installed' && navigator.serviceWorker.controller) {
                        setTimeout(() => setUpdateReady(true), 1000);
                    }
                };
                worker.addEventListener('statechange', onStateChange);
            };
            registration.addEventListener('updatefound', onUpdateFound);
        });
        
        return () => {
            if (worker && onStateChange) {
                worker.removeEventListener('statechange', onStateChange);
            }
            if (registration && onUpdateFound) {
                registration.removeEventListener('updatefound', onUpdateFound);
            }
        };

    }, []);

    if (!updateReady) return null;

    const handleReload = () => {
        // ask the service worker to activate the new version and then reload
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
        <>
            <div id='update-modal' className={cn(
                "fixed max-xs:m-auto max-xs:inset-0 w-fit h-fit xs:bottom-4 xs:right-4",
                "bg-[blanchedalmond]/90 text-black p-4 pr-14 rounded z-50",
                !updateReady && "translate-x-[120%]",
                updateReady && "translate-x-0",
                "transform transition-transform duration-300 ease-in-out"
            )}>
                <Paragraph className='!m-0'>
                    A new version of this content is available.
                    <IoClose className="absolute top-3 right-3 text-[1.7em] cursor-pointer hover:text-gray-500 transition-colors" onClick={() => setUpdateReady(false)} />
                </Paragraph>
                <Button
                    onClick={handleReload}
                    className="mt-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-100"
                >
                    Reload
                </Button>
            </div>
        </>
    );
};

export default PWAUpdateNotification;

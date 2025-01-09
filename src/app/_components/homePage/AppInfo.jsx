import React from 'react';

export default function AppInfo() {
  return (
        <section className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:items-center sm:w-1/2 sm:text-center mx-24 space-y-4">
                <h1 className="text-4xl font-extrabold mb-4" style={{color:'#002855'}}>Toi Toi Toi, Zack Zack !</h1>
                <p className="text-lg mb-4" style={{color:'#002855'}}>
                 Bestelle deine Lieblingsprodukte bequem per App. Jetzt <strong><i> fynova</i></strong> App downloaden.
                </p>
                
                <a
                    href="https://apps.apple.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="/fotos/AppleIcon.svg"
                    alt="appleicon"
                    className="h-12 w-64"
                    />
                </a>
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="/fotos/PlayStore.png"
                    alt="playstoreapp"
                    className="h-12 w-36"
                    />
                </a>
                
            </div>

            <div className="sm:w-1/2  flex justify-end my-20 mx-20">
                <img src="/fotos/20.jpg" alt="app" className="max-w-full rounded-lg" />
            </div>
        </section>
    );
}

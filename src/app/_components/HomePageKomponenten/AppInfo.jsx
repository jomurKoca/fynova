import React from 'react';

export default function AppInfo() {
  return (
        <section className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:items-center sm:w-1/2 sm:text-center mx-8 space-y-4">
                <div>
                    <h1 className="sm:text-4xl text-2xl text-center font-extrabold mb-4" style={{color:'#002855'}}>Toi Toi Toi, Zack Zack!</h1>
                    <p className="text-lg mb-4" style={{color:'#002855'}}>
                    Bestelle deine Lieblingsprodukte bequem per App. Jetzt <strong><i> fynova</i></strong> App downloaden.
                    </p>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 ml-10">
                    <div className="mb-4">
                        <a
                            href="https://apps.apple.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src="/fotos/AppleIcon.svg"
                            alt="appleicon"
                            className="h-12 max-w-64"
                            />
                        </a>
                    </div>
                    <div>
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
                </div>
                
            </div>

            <div className="sm:w-1/2  flex justify-end my-20 mx-20">
                <img src="/fotos/20.jpg" alt="app" className="max-w-full rounded-lg" />
            </div>
        </section>
    );
}

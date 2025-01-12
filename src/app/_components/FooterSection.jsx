import React from 'react'
import { Facebook , Instagram , Linkedin } from 'lucide-react';

export default function FooterSection() {
return (
    <section>
            <div className="my-10 sm:mx-10 mx-4 mr-40 gap-8 flex flex-col md:flex-row sm:justify-between">
                <h1 className="text-4xl font-bold text-[#e2186f]"><i>Fynova</i></h1>
                <div className="text-[#002855]">
                        <h1 className="font-extrabold text-2xl">About</h1>
                        <p>Jobs</p>
                        <p>FAQ</p>
                </div>
                <div className="text-[#002855]">
                        <h1 className="font-extrabold text-2xl">Social</h1>
                        <div className="flex space-x-4">
                                <a alt="Facebook" href="/privacy">
                                        <Facebook />
                                </a>
                                <a alt="Instagram" href="/Privacy">
                                        <Instagram />
                                </a>
                                <a alt="Linkedin" href="/Privacy">
                                        <Linkedin />
                                </a>
                        </div>
                </div>
                <div className="mr-32">
                    <h1 className="font-extrabold text-2xl text-[#002855]">Apps</h1>
                    <a
                            href="https://apps.apple.com/store"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                    src="/fotos/AppleIcon.svg"
                                    alt="appleicon"
                                    className="h-12 max-w-64"
                            />
                    </a>
                    <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                    src="/fotos/PlayStore.png"
                                    alt="playstoreapp"
                                    className="h-12 max-w-36"
                            />
                    </a>
                </div>
            </div>
    </section>
);
}

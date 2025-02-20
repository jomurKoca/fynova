import React from 'react'
import { Facebook , Instagram , Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function FooterSection() {
        return (
                <section>
                        <div className="my-10 sm:mx-10 mx-4 mr-40 gap-8 flex flex-col md:flex-row sm:justify-between">
                                <h1 className="text-4xl font-bold text-[#e2186f]"><i>Fynova</i></h1>
                                <div className="text-[#002855]">
                                        <h1 className="font-extrabold text-2xl">About</h1>
                                        <Link target='_blank' href="https://github.com/jomurKoca" className="hover:underline"> <p>Jobs</p></Link>
                                        <Link href="https://www.linkedin.com/in/omurkoca/"  className="hover:underline"><p>FAQ</p></Link>
                                </div>
                                <div className="text-[#002855]">
                                        <h1 className="font-extrabold text-2xl mb-4">Social</h1>
                                        <div className="flex space-x-4">
                                                <a alt="Facebook" href="https://github.com/jomurKoca">
                                                        <Facebook />
                                                </a>
                                                <a alt="Instagram" href="https://www.linkedin.com/in/omurkoca/">
                                                        <Instagram />
                                                </a>
                                                <a alt="Linkedin" href="https://www.linkedin.com/in/omurkoca/">
                                                        <Linkedin />
                                                </a>
                                        </div>
                                </div>
                                <div className="mr-32">
                                        <h1 className="font-extrabold text-2xl mb-4 text-[#002855]">Apps</h1>
                                        <a
                                                href="https://apps.apple.com/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img
                                                        src="/fotos/AppleIcon.svg"
                                                        alt="appleicon"
                                                        className="h-12 max-w-36 mb-4"
                                                />
                                        </a>
                                        <a
                                                href="https://play.google.com/store"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img
                                                        src="/fotos/PlayStore.png"
                                                        alt="playstoreapp"
                                                        className="h-12 max-w-36 rounded-lg"
                                                />
                                        </a>
                                </div>
                        </div>
                </section>
        );
}
{/*
1- In der FooterSection-Komponente wird der Footer-Bereich der Website erstellt.
2- import Link wird verwendet um die Links zu erstellen.
3- _blank ist ein Attribut, das angibt, dass der Link in einem neuen Fenster geöffnet wird.
4- nopenner verhindert, dass der Link auf die Seite zugreift, die ihn geöffnet hat.
5- noreferrer verhindert, dass der Browser den Referrer-Header anfordert.
*/}
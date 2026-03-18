import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navlinks = [
        {
            href: "/#creations",
            text: "Creations",
        },
        {
            href: "/#about",
            text: "About",
        },
        {
            href: "/#testimonials",
            text: "Testimonials",
        },
        {
            href: "/#contact",
            text: "Contact",
        },
    ];

    return (
        <>
            <Motion.nav className="sticky top-0 z-50 flex h-18 w-full items-center justify-between px-6 backdrop-blur md:px-16 lg:px-24 xl:px-32"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to="/">
                    <img className="h-9 w-auto" src="/assets/logo.svg" width={138} height={36} alt="Agentix logo" />
                </Link>

                <div className="hidden items-center gap-8 transition duration-500 lg:flex">
                    {navlinks.map((link) => (
                        <a key={link.href} href={link.href} className="transition hover:text-slate-300">
                            {link.text}
                        </a>
                    ))}
                </div>

                <div className="hidden space-x-3 lg:block">
                    <button className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700 active:scale-95">
                        Get started
                    </button>
                    <button className="rounded-md border border-slate-400 px-6 py-2 transition hover:bg-slate-300/20 active:scale-95">
                        Login
                    </button>
                </div>
                <button onClick={() => setIsMenuOpen(true)} className="transition active:scale-90 lg:hidden">
                    <MenuIcon className="size-6.5" />
                </button>
            </Motion.nav>
            <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-black/60 text-lg backdrop-blur transition-transform duration-400 lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {link.text}
                    </a>
                ))}
                <button onClick={() => setIsMenuOpen(false)} className="flex size-10 items-center justify-center rounded-md bg-slate-100 p-1 text-black transition hover:bg-slate-200 active:ring-3 active:ring-white">
                    <XIcon />
                </button>
            </div>
        </>
    );
}

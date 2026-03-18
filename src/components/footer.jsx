import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Motion.footer className="mt-40 w-full px-6 text-sm text-slate-400 md:px-16 lg:px-24 xl:px-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
                <div className="sm:col-span-2 lg:col-span-1">
                    <Link to="/">
                        <img className="h-9 w-auto" src="/assets/logo.svg" width={138} height={36} alt="Agentix logo" />
                    </Link>
                    <p className="mt-6 text-sm/7">
                        Agentix helps modern teams manage customer communications, email automation, sender trust, and lifecycle campaigns from one reliable platform.
                    </p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col space-y-2.5 text-sm">
                        <h2 className="mb-5 font-semibold text-white">Company</h2>
                        <a className="transition hover:text-slate-500" href="/#about">About us</a>
                        <a className="transition hover:text-slate-500" href="/#contact">Contact us</a>
                        <Link className="transition hover:text-slate-500" to="/privacy-policy">Privacy policy</Link>
                        <Link className="transition hover:text-slate-500" to="/terms-of-service">Terms of service</Link>
                    </div>
                </div>
                <div>
                    <h2 className="mb-5 font-semibold text-white">Subscribe to our newsletter</h2>
                    <div className="max-w-sm space-y-6 text-sm">
                        <p>The latest product updates, deliverability guidance, and messaging resources sent to your inbox weekly.</p>
                        <div className="flex items-center justify-center gap-2 rounded-md bg-slate-900 p-2">
                            <input className="w-full max-w-64 rounded px-2 py-2 outline-none" type="email" placeholder="Enter your email" />
                            <button className="rounded bg-indigo-600 px-4 py-2 text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 border-t border-slate-700 py-4 text-center">
                Copyright 2026 © Agentix • Built for modern email software teams • All rights reserved.
            </p>
        </Motion.footer>
    );
}

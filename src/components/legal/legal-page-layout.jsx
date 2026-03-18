import { Link } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

function LegalSection({ title, children }) {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:p-8 shadow-[0_0_0_1px_rgba(99,102,241,0.06)]">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">{children}</div>
        </section>
    );
}

export default function LegalPageLayout({ eyebrow, title, intro, effectiveDate, sections }) {
    return (
        <>
            <Navbar />
            <main className="px-6 pb-20 md:px-16 lg:px-24 xl:px-32">
                <section className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-slate-800 bg-gradient-to-br from-indigo-600/10 via-slate-950 to-slate-950 px-6 py-10 md:px-10 md:py-14">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-300">{eyebrow}</p>
                    <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">{title}</h1>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{intro}</p>
                    <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                        <p>Effective date: {effectiveDate}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link className="text-indigo-300 transition hover:text-indigo-200" to="/privacy-policy">
                                Privacy Policy
                            </Link>
                            <Link className="text-indigo-300 transition hover:text-indigo-200" to="/terms-of-service">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="mx-auto mt-10 grid max-w-5xl gap-6">
                    {sections.map((section) => (
                        <LegalSection key={section.title} title={section.title}>
                            {section.content}
                        </LegalSection>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

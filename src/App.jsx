import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import AboutOurApps from "./sections/about-our-apps";
import GetInTouch from "./sections/get-in-touch";
import HeroSection from "./sections/hero-section";
import OurLatestCreation from "./sections/our-latest-creation";
import OurTestimonials from "./sections/our-testimonials";
import SubscribeNewsletter from "./sections/subscribe-newsletter";
import TrustedCompanies from "./sections/trusted-companies";
import PrivacyPolicyPage from "./pages/privacy-policy-page";
import TermsOfServicePage from "./pages/terms-of-service-page";

function HomePage() {
    return (
        <>
            <Navbar />
            <main className="px-6 md:px-16 lg:px-24 xl:px-32">
                <HeroSection />
                <OurLatestCreation />
                <AboutOurApps />
                <OurTestimonials />
                <TrustedCompanies />
                <GetInTouch />
                <SubscribeNewsletter />
            </main>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <>
            <LenisScroll />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
        </>
    );
}

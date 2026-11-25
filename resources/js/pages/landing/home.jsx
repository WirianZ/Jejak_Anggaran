import { Head } from '@inertiajs/react';
import Navbar from '../../components/navbar';
import HeroSection from './sections/herosection/hero';
import InfoStrip from './sections/herosection/infostrip';
import ECatalogSection from "./sections/catalogsection/catalogsection";
import TransparencySection from './sections/transsection/transsection';
import Radarsection from './sections/radarsection/radarsection';
import IntegritySection from "./sections/bawahsection/Integrity";
import FaqSection from "./sections/bawahsection/Faq";
import FooterSection from "./sections/bawahsection/fotter";

export default function Home({ title }) {
    return (
        <>
            <Head title={title} />

            <Navbar />
            <main>
                <HeroSection />
                <InfoStrip />            
                <ECatalogSection />
                <TransparencySection />
                <Radarsection />
                <IntegritySection />
                <FaqSection />
            </main>
            <FooterSection />
        </>
    );
}
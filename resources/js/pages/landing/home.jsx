import { Head } from '@inertiajs/react';
import Navbar from '../../components/navbar';
import HeroSection from './sections/herosection/hero';
import InfoStrip from './sections/herosection/infostrip';
import ECatalogSection from "./sections/catalogsection/catalogsection";


export default function Home({ title }) {
    return (
        <>
            <Head title={title} />

            <Navbar />
            <main>
                <HeroSection />
                <InfoStrip />            
                <ECatalogSection />
            </main>
        </>
    );
}
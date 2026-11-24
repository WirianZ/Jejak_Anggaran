import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import ECatalogSection from '../ECatalog/ECatalogSection';

export default function Home({ title }) {
    return (
        <>
            <Head title={title} />

            <Navbar />
            <main>
                <Hero />
                <ECatalogSection />
            </main>
        </>
    );
}
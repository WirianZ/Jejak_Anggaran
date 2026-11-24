import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

export default function Home({ title }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <Hero />
        </>
    );
}
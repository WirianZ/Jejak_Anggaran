// import Navbar from '../Components/Navbar/Navbar';       ← section teman
import ECatalogSection from '../ECatalog/ECatalogSection'; // ← section 2 (kamu)
// import Footer from '../Components/Footer/Footer';       ← section teman

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <main>
                {/* <HeroSection /> */}
                <ECatalogSection />
                {/* <SectionLain /> */}
            </main>
            {/* <Footer /> */}
        </>
    );
}
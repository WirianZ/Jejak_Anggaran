import CatalogHeader from './CatalogHeader';
import CatalogCard from './CatalogCard';
import { letterServices } from './catalogData';

export default function ECatalogSection() {
    const handleSubmit = (data) => {
        // data = { id, title, nama }
        // TODO: kirim ke backend, mis. router.post('/surat/ajukan', data)
        console.log('Pengajuan surat:', data);
    };

    return (
        <section
            id="e-catalog"
            aria-labelledby="e-catalog-title"
            className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <CatalogHeader />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                    {letterServices.map((service) => (
                        <CatalogCard key={service.id} {...service} onSubmit={handleSubmit} />
                    ))}
                </div>
            </div>
        </section>
    );
}
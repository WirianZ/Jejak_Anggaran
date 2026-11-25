import CatalogHeader from './catalogheader';
import CatalogCard from './catalogcard';
import { letterServices } from './catalogdata';

export default function ECatalogSection() {
    const handleSubmit = (data) => {
        // data = { id, title }
        // TODO: arahkan ke form pengajuan, mis. router.visit(`/surat/ajukan/${data.id}`)
        console.log('Ajukan surat:', data);
    };

    return (
        <section
            id="layanan-surat"
            aria-labelledby="e-catalog-title"
            className="relative -mt-px overflow-hidden bg-gradient-to-b from-white via-white to-surface py-16 sm:py-20 lg:py-24"
        >
            {/* dekorasi pucat, senada dengan hero */}
            <div aria-hidden="true" className="absolute -left-[140px] top-[120px] h-[460px] w-[460px] rounded-full bg-soft/70" />
            <div aria-hidden="true" className="absolute -right-[120px] bottom-[-80px] h-[380px] w-[380px] rounded-full bg-soft/60" />

            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-10">
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
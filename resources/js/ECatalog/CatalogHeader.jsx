import { FileText } from 'lucide-react';

export default function CatalogHeader() {
    return (
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DBEAFE] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3B82F6] shadow-sm">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Layanan Digital Desa
            </span>

            <h2
                id="e-catalog-title"
                className="mt-5 text-3xl font-bold tracking-tight text-[#172554] sm:text-4xl lg:text-5xl"
            >
                E-Catalog <span className="text-[#3B82F6]">Surat</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg">
                Ajukan berbagai kebutuhan surat administrasi desa secara online
                dengan mudah, cepat, dan praktis.
            </p>
        </header>
    );
}
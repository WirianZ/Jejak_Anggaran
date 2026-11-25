import { Clock, Send, Tag } from 'lucide-react';

export default function CatalogCard({
    id,
    title,
    description,
    badge,
    price,
    estimate,
    onSubmit,
}) {
    const handleSubmit = () => {
        // Hubungkan ke backend di sini (misal router.visit dari Inertia)
        if (onSubmit) onSubmit({ id, title });
    };

    return (
        <article className="group relative flex h-full flex-col rounded-[20px] border border-line bg-white p-6 shadow-[0_2px_8px_rgba(24,50,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-20px_rgba(24,50,75,0.35),0_2px_6px_rgba(24,50,75,0.06)]">
            {/* Baris atas: badge harga (kiri) dan badge kategori (kanan) */}
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-navy">
                    {badge}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold tracking-[0.04em] text-navy">
                    <Tag className="h-3 w-3 text-primary-dark" aria-hidden="true" />
                    {price}
                </span>
            </div>

            {/* Teks */}
            <h3 className="mt-5 text-lg font-bold leading-snug tracking-[-0.01em] text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>

            {/* Estimasi waktu */}
            <div className="mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-body">
                <Clock className="h-3.5 w-3.5 text-primary-dark" aria-hidden="true" />
                Estimasi proses: <span className="text-navy">{estimate}</span>
            </div>

            {/* Tombol memanjang ke samping, menempel di bawah kartu */}
            <button
                type="button"
                onClick={handleSubmit}
                className="mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#18324B] bg-[#18324B] text-sm font-semibold text-white transition-colors hover:border-[#0F2438] hover:bg-[#0F2438] focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[#18324B]/40 focus-visible:ring-offset-2"
            >
                <Send className="h-4 w-4" aria-hidden="true" />
                Ajukan Surat Sekarang
            </button>
        </article>
    );
}
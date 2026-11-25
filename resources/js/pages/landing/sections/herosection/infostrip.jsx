import { Clock, BadgeCheck, Landmark, HardHat } from 'lucide-react';

// Data contoh. Ganti dengan data asli, atau kirim lewat props `items` dari Laravel (props Inertia).
const DEFAULT_ITEMS = [
    {
        id: 'waktu-pelayanan',
        label: 'Waktu Pelayanan',
        value: '<30 menit',
        note: 'Rata-rata proses sejak berkas lengkap',
        icon: Clock,
    },
    {
        id: 'tarif-resmi',
        label: 'Tarif Resmi',
        value: 'Rp 0',
        note: 'Sesuai ketentuan layanan desa',
        icon: BadgeCheck,
    },
    {
        id: 'pagu-apbdes',
        label: 'Pagu APBDes',
        value: 'Rp 1,2 M',
        note: 'Total anggaran desa tahun berjalan',
        icon: Landmark,
    },
    {
        id: 'proyek-fisik',
        label: 'Proyek Fisik Aktif',
        value: '7 proyek',
        note: 'Dapat dipantau langsung oleh warga',
        icon: HardHat,
    },
];

function InfoCard({ label, value, note, icon: Icon }) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-line bg-white px-4 py-4 shadow-[0_2px_8px_rgba(24,50,75,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_18px_36px_-18px_rgba(24,50,75,0.3),0_2px_6px_rgba(24,50,75,0.06)]">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-body">
                    {label}
                </h3>
                <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-soft text-primary-dark"
                    aria-hidden="true"
                >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
            </div>

            <p className="mt-3 text-[clamp(20px,1.9vw,26px)] font-extrabold leading-none tracking-[-0.03em] text-navy tabular-nums">
                {value}
            </p>
            <p className="mt-2 text-xs leading-snug text-body">{note}</p>
        </article>
    );
}

export default function InfoStrip({ items = DEFAULT_ITEMS }) {
    return (
        <section aria-label="Informasi layanan dan anggaran desa" className="bg-white pb-8 pt-12">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item) => (
                        <InfoCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
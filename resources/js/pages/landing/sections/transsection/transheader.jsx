import { Download, FileText } from 'lucide-react';

const btnPrimary =
    'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-cta bg-cta px-5 text-sm font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

const btnSecondary =
    'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:bg-surface focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

export default function TransparencyHeader({ year, termin, apbdesPdfUrl, terminPdfUrl }) {
    return (
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Kiri: headline + penjelasan */}
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-[9px] rounded-full border border-[#D5E5F4] bg-soft px-3.5 py-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-primary-dark" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-[0.08em] text-navy">TRANSPARANSI DANA DESA</span>
                </div>

                <h2
                    id="transparansi-title"
                    className="mt-[22px] text-balance text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-navy"
                >
                    Anggaran Desa yang <span className="text-primary-dark">Terbuka</span> untuk Semua Warga
                </h2>

                <p className="mt-4 max-w-xl text-base leading-[1.65] text-body">
                    Pantau total pendapatan, realisasi belanja, dan sisa kas desa secara berkala.
                    Setiap rupiah dilaporkan per bidang, sehingga warga dapat melihat langsung
                    ke mana dana desa digunakan.
                </p>
            </div>

            {/* Kanan: tombol unduh, sejajar dengan penjelasan */}
            <div className="flex flex-wrap gap-3 lg:shrink-0 lg:justify-end">
                <a href={apbdesPdfUrl} download className={btnPrimary}>
                    <Download className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                    Unduh PDF APBDes
                </a>
                <a href={terminPdfUrl} download className={btnSecondary}>
                    <FileText className="h-4 w-4 text-primary-dark" strokeWidth={2} aria-hidden="true" />
                    T.A {year} {termin}
                </a>
            </div>
        </header>
    );
}

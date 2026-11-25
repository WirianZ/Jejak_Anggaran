import { Camera, MapPinned, ImagePlus } from 'lucide-react';

const btnPrimary =
    'inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-cta bg-cta px-5 text-sm font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

function StatChip({ icon: Icon, value, label }) {
    return (
        <div className="flex min-w-[150px] flex-1 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_2px_8px_rgba(24,50,75,0.06)]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark" aria-hidden="true">
                <Icon className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <div>
                <p className="text-xl font-extrabold leading-none tracking-[-0.02em] text-navy tabular-nums">{value}</p>
                <p className="mt-1 text-[11px] font-semibold text-body">{label}</p>
            </div>
        </div>
    );
}

export default function RadarHeader({ projectCount, photoCount, onUploadClick }) {
    return (
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-xl">
                <div className="inline-flex items-center gap-[9px] rounded-full border border-[#D5E5F4] bg-soft px-3.5 py-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-primary-dark" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-[0.08em] text-navy">RADAR PEMBANGUNAN</span>
                </div>

                <h2
                    id="radar-title"
                    className="mt-[22px] text-balance text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-navy"
                >
                    Pantau Pembangunan <span className="text-primary-dark">Langsung dari Lokasinya</span>
                </h2>

                <p className="mt-4 text-base leading-[1.65] text-body">
                    Lihat titik proyek yang sedang dikerjakan di peta desa, cek kemajuan dan serapan
                    anggarannya, lalu bantu awasi dengan mengunggah foto kondisi di lapangan.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch lg:shrink-0">
                <div className="flex gap-3">
                    <StatChip icon={MapPinned} value={projectCount} label="Titik Pembangunan" />
                    <StatChip icon={Camera} value={photoCount} label="Foto Audit Warga" />
                </div>
                <button type="button" onClick={onUploadClick} className={btnPrimary}>
                    <ImagePlus className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                    Unggah Temuan Foto
                </button>
            </div>
        </header>
    );
}

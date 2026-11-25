import { Banknote, CalendarRange, HardHat, MapPin, Ruler, Wallet, Camera } from 'lucide-react';
import PhotoCard from './photocard';
import { STATUS_META, formatPct, formatRange, formatRp } from './radardata';

function Tile({ icon: Icon, label, children, sub }) {
    return (
        <div className="rounded-xl bg-surface px-4 py-3.5">
            <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-body">
                <Icon className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2} aria-hidden="true" />
                {label}
            </dt>
            <dd className="mt-1.5 text-sm font-extrabold leading-snug tracking-[-0.01em] text-navy">{children}</dd>
            {sub && <p className="mt-0.5 text-[11px] font-semibold text-body tabular-nums">{sub}</p>}
        </div>
    );
}

function SpecItem({ icon: Icon, label, children }) {
    return (
        <div className="flex items-start gap-3 rounded-xl border border-line px-4 py-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-soft text-primary-dark" aria-hidden="true">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-body">{label}</dt>
                <dd className="mt-1 text-[13px] font-semibold leading-snug text-navy">{children}</dd>
            </div>
        </div>
    );
}

export default function ProjectDetail({ project, photos }) {
    if (!project) {
        return (
            <section className="rounded-[20px] border border-dashed border-line bg-white px-6 py-14 text-center text-sm text-body">
                Pilih proyek di peta atau daftar untuk melihat rinciannya.
            </section>
        );
    }

    const meta = STATUS_META[project.status];
    const absorbedPct = (project.absorbed / project.pagu) * 100;

    return (
        <section
            aria-labelledby="detail-proyek-title"
            className="rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] sm:p-7"
        >
            {/* Judul */}
            <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-navy">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} aria-hidden="true" />
                    {meta.label}
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-body">
                    {project.category}
                </span>
            </div>
            <h3 id="detail-proyek-title" className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.02em] text-navy">
                {project.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">{project.description}</p>

            {/* Pagu, dana terserap, pelaksana */}
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Tile icon={Banknote} label="Pagu Anggaran">
                    <span className="tabular-nums">{formatRp(project.pagu)}</span>
                </Tile>
                <Tile icon={Wallet} label="Dana Terserap" sub={`${formatPct(absorbedPct)} dari pagu`}>
                    <span className="tabular-nums">{formatRp(project.absorbed)}</span>
                </Tile>
                <Tile icon={HardHat} label="Pelaksana Kerja">
                    {project.contractor}
                </Tile>
            </dl>

            {/* Spesifikasi */}
            <h4 className="mt-7 text-sm font-bold text-navy">Spesifikasi Proyek</h4>
            <dl className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                <SpecItem icon={Ruler} label="Volume Fisik">{project.volume}</SpecItem>
                <SpecItem icon={MapPin} label="Lokasi / Dusun">{project.location}</SpecItem>
                <SpecItem icon={CalendarRange} label="Masa Pelaksanaan">
                    <span className="tabular-nums">{formatRange(project.startDate, project.endDate)}</span>
                </SpecItem>
            </dl>

            {/* Kemajuan fisik */}
            <div className="mt-7">
                <div className="flex items-center justify-between text-sm">
                    <h4 className="font-bold text-navy">Kemajuan Fisik di Lapangan</h4>
                    <span className="font-extrabold text-navy tabular-nums">{formatPct(project.progress)}</span>
                </div>
                <div
                    role="progressbar"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Kemajuan fisik proyek"
                    className="mt-2.5 h-3 w-full overflow-hidden rounded-full bg-surface"
                >
                    <div
                        className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
                        style={{ width: `${project.progress}%`, backgroundColor: meta.color }}
                    />
                </div>
            </div>

            {/* Bukti foto */}
            <div className="mt-8 border-t border-line pt-6">
                <div className="flex items-center justify-between gap-3">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-navy">
                        <Camera className="h-4 w-4 text-primary-dark" strokeWidth={2} aria-hidden="true" />
                        Bukti Foto Lapangan
                    </h4>
                    <span className="text-xs font-semibold text-body tabular-nums">{photos.length} foto</span>
                </div>

                {photos.length === 0 ? (
                    <p className="mt-4 rounded-xl border border-dashed border-line px-4 py-8 text-center text-sm text-body">
                        Belum ada foto dari warga untuk proyek ini. Jadilah yang pertama mengunggah.
                    </p>
                ) : (
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {photos.map((ph) => (
                            <PhotoCard key={ph.id} photo={ph} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

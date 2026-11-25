import { Link } from '@inertiajs/react';
import { ArrowRight, ListChecks } from 'lucide-react';
import { formatPct, formatRp, PAGU_TOTAL } from './sectordata';

export default function SectorCard({
    number,
    title,
    description,
    tag,
    color,
    budget,
    spent,
    progress,
    subCount,
    detailUrl,
    paguTotal = PAGU_TOTAL,
}) {
    const share = (budget / paguTotal) * 100;

    return (
        <article className="flex h-full flex-col rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-20px_rgba(24,50,75,0.35),0_2px_6px_rgba(24,50,75,0.06)] sm:p-6">
            {/* Atas: badge bidang + porsi PAGU (kiri), badge penjelasan (kanan) */}
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-navy">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                        Bidang {number}
                    </span>
                    <span className="text-xs font-semibold text-body tabular-nums">
                        {formatPct(share)} dari PAGU
                    </span>
                </div>

                <span className="rounded-full border border-[#D5E5F4] bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy">
                    {tag}
                </span>
            </div>

            {/* Headline + penjelasan */}
            <h3 className="mt-5 text-lg font-bold leading-snug tracking-[-0.01em] text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>

            {/* Dana awal & dana terpakai */}
            <dl className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface px-3.5 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-body">Dana Awal</dt>
                    <dd className="mt-1 text-[15px] font-extrabold tracking-[-0.02em] text-navy tabular-nums">
                        {formatRp(budget)}
                    </dd>
                </div>
                <div className="rounded-xl bg-surface px-3.5 py-3">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-body">Dana Terpakai</dt>
                    <dd className="mt-1 text-[15px] font-extrabold tracking-[-0.02em] text-navy tabular-nums">
                        {formatRp(spent)}
                    </dd>
                </div>
            </dl>

            {/* Progress penyelesaian bidang */}
            <div className="mt-5">
                <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-body">Progres penyelesaian</span>
                    <span className="font-extrabold text-navy tabular-nums">{formatPct(progress)}</span>
                </div>
                <div
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progres penyelesaian Bidang ${number}`}
                    className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface"
                >
                    <div
                        className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
                        style={{ width: `${progress}%`, backgroundColor: color }}
                    />
                </div>
            </div>

            {/* Bawah: badge pendukung (kiri), link rincian (kanan) */}
            <div className="mt-auto pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1.5 text-[11px] font-bold tracking-[0.02em] text-navy">
                    <ListChecks className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} aria-hidden="true" />
                    {subCount} Sub Kegiatan
                </span>

                <Link
                    href={detailUrl}
                    className="group/link inline-flex items-center gap-1.5 rounded-md text-[13px] font-bold text-primary-dark transition-colors hover:text-navy focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40"
                >
                    Rincian SPJ &amp; Sub Kegiatan
                    <ArrowRight
                        className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                        strokeWidth={2.2}
                        aria-hidden="true"
                    />
                </Link>
            </div>
            </div>
        </article>
    );
}

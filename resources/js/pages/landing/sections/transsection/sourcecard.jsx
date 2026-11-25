import { CheckCircle2 } from 'lucide-react';
import { formatPct, formatRp, PAGU_TOTAL } from './sectordata';

export default function SourceCard({
    number,
    title,
    description,
    note,
    color,
    amount,
    disbursed,
    paguTotal = PAGU_TOTAL,
}) {
    const cairPct = (disbursed / amount) * 100;
    const share = (amount / paguTotal) * 100;

    return (
        <article className="rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-20px_rgba(24,50,75,0.35),0_2px_6px_rgba(24,50,75,0.06)] sm:p-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-8">
                {/* Kiri: badge sumber + info cair, headline, keterangan */}
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-navy">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                            Sumber {number}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-body">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} aria-hidden="true" />
                            <span className="font-extrabold text-navy tabular-nums">{formatPct(cairPct)} cair</span>
                            <span aria-hidden="true">·</span>
                            <span>{note}</span>
                        </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold leading-snug tracking-[-0.01em] text-navy">{title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">{description}</p>
                </div>

                {/* Kanan: card kecil nilai kontribusi & porsi pendapatan */}
                <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-surface p-4 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-line">
                    <div className="lg:pb-3">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-body">Nilai Kontribusi</dt>
                        <dd className="mt-1 text-[15px] font-extrabold tracking-[-0.02em] text-navy tabular-nums">
                            {formatRp(amount)}
                        </dd>
                    </div>
                    <div className="lg:pt-3">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-body">Porsi Pendapatan</dt>
                        <dd className="mt-1 text-[15px] font-extrabold tracking-[-0.02em] text-navy tabular-nums">
                            {formatPct(share)}{' '}
                            <span className="text-xs font-semibold text-body">dari PAGU</span>
                        </dd>
                    </div>
                </dl>
            </div>

            {/* Progress pencairan */}
            <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
                    <span className="font-semibold text-body">Progres pencairan</span>
                    <span className="font-semibold text-body tabular-nums">
                        <span className="font-extrabold text-navy">{formatRp(disbursed)}</span> dari {formatRp(amount)}
                    </span>
                </div>
                <div
                    role="progressbar"
                    aria-valuenow={Math.round(cairPct)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progres pencairan Sumber ${number}`}
                    className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-surface"
                >
                    <div
                        className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none"
                        style={{ width: `${cairPct}%`, backgroundColor: color }}
                    />
                </div>
            </div>
        </article>
    );
}

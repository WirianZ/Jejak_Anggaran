import { useEffect, useState } from 'react';
import { formatPercent, formatRupiah } from './transdata';

export default function AllocationBar({ allocations, total }) {
    const [active, setActive] = useState(null); // id segmen yang sedang di-hover/fokus
    const [ready, setReady] = useState(false); // memicu animasi lebar saat mount

    useEffect(() => {
        const raf = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    const items = allocations.map((a) => ({ ...a, pct: (a.amount / total) * 100 }));
    const dim = (id) => (active && active !== id ? 'opacity-35' : 'opacity-100');

    return (
        <section
            aria-labelledby="alokasi-title"
            className="rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] sm:p-7"
        >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h3 id="alokasi-title" className="text-base font-bold tracking-[-0.01em] text-navy">
                        Alokasi Realisasi Belanja
                    </h3>
                    <p className="mt-1 text-sm text-body">Persentase penggunaan dana desa per bidang kegiatan.</p>
                </div>
                <p className="text-sm font-semibold text-navy tabular-nums">
                    <span className="mr-1.5 text-xs font-bold uppercase tracking-[0.08em] text-body">Total</span>
                    {formatRupiah(total)}
                </p>
            </div>

            {/* Progress bar bersegmen */}
            <div
                role="img"
                aria-label={`Alokasi belanja: ${items.map((i) => `${i.label} ${formatPercent(i.pct)}`).join(', ')}`}
                className="mt-6 flex h-4 w-full gap-[3px] overflow-hidden rounded-full bg-surface"
            >
                {items.map((i) => (
                    <div
                        key={i.id}
                        title={`${i.label}: ${formatPercent(i.pct)}`}
                        onMouseEnter={() => setActive(i.id)}
                        onMouseLeave={() => setActive(null)}
                        style={{ width: ready ? `${i.pct}%` : '0%', backgroundColor: i.color }}
                        className={`h-full min-w-0 transition-[width,opacity] duration-700 ease-out first:rounded-l-full last:rounded-r-full motion-reduce:transition-none ${dim(i.id)}`}
                    />
                ))}
            </div>

            {/* Legenda: warna, bidang, persentase, nominal */}
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((i) => (
                    <li
                        key={i.id}
                        tabIndex={0}
                        onMouseEnter={() => setActive(i.id)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(i.id)}
                        onBlur={() => setActive(null)}
                        className={`flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all focus:outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/25 ${dim(i.id)} ${active === i.id ? 'bg-surface' : ''}`}
                    >
                        <span
                            className="mt-[5px] h-3 w-3 shrink-0 rounded-[4px]"
                            style={{ backgroundColor: i.color }}
                            aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-semibold leading-snug text-navy">{i.label}</p>
                            <p className="mt-0.5 text-xs text-body tabular-nums">{formatRupiah(i.amount)}</p>
                        </div>
                        <span className="text-sm font-extrabold tracking-[-0.01em] text-navy tabular-nums">
                            {formatPercent(i.pct)}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

import { MapPin } from 'lucide-react';
import { STATUS_META, formatPct, formatRp } from './radardata';

export default function ProjectCard({ project, selected, onSelect }) {
    const { id, name, status, progress, pagu, absorbed, location } = project;
    const meta = STATUS_META[status];
    const absorbedPct = (absorbed / pagu) * 100;

    return (
        <button
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(id)}
            className={`block w-full rounded-2xl border bg-white p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 ${
                selected
                    ? 'border-primary shadow-[0_12px_28px_-14px_rgba(24,50,75,0.4)] ring-[3px] ring-primary/15'
                    : 'border-line hover:border-primary hover:shadow-[0_8px_20px_-12px_rgba(24,50,75,0.3)]'
            }`}
        >
            {/* Atas: badge status (kiri), persentase selesai (kanan) */}
            <span className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} aria-hidden="true" />
                    {meta.label}
                </span>
                <span className="rounded-full bg-[#18324B] px-2.5 py-1 text-[11px] font-extrabold text-white tabular-nums">
                    {formatPct(progress)} selesai
                </span>
            </span>

            <span className="mt-3 block text-[15px] font-bold leading-snug tracking-[-0.01em] text-navy">{name}</span>

            {/* Pagu sebagai progress bar serapan */}
            <span className="mt-3 block">
                <span className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="font-semibold text-body">
                        Pagu <span className="font-extrabold text-navy tabular-nums">{formatRp(pagu)}</span>
                    </span>
                    <span className="font-semibold text-body tabular-nums">Terserap {formatPct(absorbedPct)}</span>
                </span>
                <span className="mt-1.5 block h-2 w-full overflow-hidden rounded-full bg-surface">
                    <span
                        className="block h-full rounded-full"
                        style={{ width: `${absorbedPct}%`, backgroundColor: meta.color }}
                    />
                </span>
            </span>

            <span className="mt-3 flex items-center gap-1.5 text-xs text-body">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-dark" strokeWidth={2} aria-hidden="true" />
                <span className="truncate">{location}</span>
            </span>
        </button>
    );
}

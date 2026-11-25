const OPTIONS = [
    { id: 'semua', label: 'Semua' },
    { id: 'berjalan', label: 'Berjalan' },
    { id: 'selesai', label: 'Selesai' },
];

export default function ProjectFilter({ value, onChange, counts }) {
    return (
        <div role="group" aria-label="Filter status proyek" className="flex gap-1 rounded-xl bg-surface p-1">
            {OPTIONS.map(({ id, label }) => {
                const active = value === id;
                return (
                    <button
                        key={id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onChange(id)}
                        className={`inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary ${
                            active ? 'bg-white text-navy shadow-[0_1px_4px_rgba(24,50,75,0.12)]' : 'text-body hover:text-navy'
                        }`}
                    >
                        {label}
                        <span className={`rounded-full px-1.5 text-[10px] font-bold tabular-nums ${active ? 'bg-soft text-primary-dark' : 'text-body'}`}>
                            {counts[id]}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

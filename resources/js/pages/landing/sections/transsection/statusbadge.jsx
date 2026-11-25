const STATUS = {
    cair: { label: 'Cair', cls: 'border-emerald-200 bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
    proses: { label: 'Diproses', cls: 'border-amber-200 bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
    verifikasi: { label: 'Verifikasi', cls: 'border-[#D5E5F4] bg-soft text-navy', dot: 'bg-primary-dark' },
};

export default function StatusBadge({ status }) {
    const s = STATUS[status] ?? STATUS.verifikasi;
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${s.cls}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
            {s.label}
        </span>
    );
}

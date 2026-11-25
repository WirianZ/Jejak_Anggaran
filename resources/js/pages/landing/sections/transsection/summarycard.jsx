const FOOT_TONES = {
    default: 'border-[#D5E5F4] bg-soft text-navy',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

export default function SummaryCard({
    icon: Icon,
    label, // nama card (di samping ikon, kiri atas)
    tag, // badge penjelasan (kanan atas)
    value, // nominal (tengah)
    footIcon: FootIcon,
    footText, // badge bawah
    tone = 'default',
}) {
    return (
        <article className="flex h-full flex-col rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-20px_rgba(24,50,75,0.35),0_2px_6px_rgba(24,50,75,0.06)] sm:p-6">
            {/* Baris atas: ikon + nama (kiri), badge penjelasan (kanan) */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                    <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-soft text-primary-dark"
                        aria-hidden="true"
                    >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[13px] font-bold leading-tight tracking-[-0.01em] text-navy">{label}</h3>
                </div>

                <span className="shrink-0 rounded-full border border-[#D5E5F4] bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy">
                    {tag}
                </span>
            </div>

            {/* Tengah: nominal */}
            <p className="my-7 text-center text-[clamp(24px,2.4vw,32px)] font-extrabold leading-none tracking-[-0.03em] text-navy tabular-nums">
                {value}
            </p>

            {/* Bawah: badge keterangan */}
            <div className="mt-auto flex justify-center">
                <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-[0.02em] ${FOOT_TONES[tone]}`}
                >
                    <FootIcon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
                    {footText}
                </span>
            </div>
        </article>
    );
}

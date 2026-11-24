import { useState } from 'react';
import { Clock, Send, CheckCircle2 } from 'lucide-react';

export default function CatalogCard({
    id,
    title,
    description,
    icon: Icon,
    badge,
    estimate,
    onSubmit,
}) {
    const [name, setName] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        // Hubungkan ke backend di sini (misal router.post dari Inertia)
        if (onSubmit) onSubmit({ id, name: name.trim() });

        setSent(true);
        setName('');
    };

    const handleChange = (e) => {
        setName(e.target.value);
        if (sent) setSent(false);
    };

    return (
        <article
            className="group relative flex h-full flex-col rounded-[20px] border border-[#DBEAFE] bg-white p-6
                       shadow-[0_2px_12px_rgba(23,37,84,0.05)] transition-all duration-300 ease-out
                       hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:shadow-[0_12px_28px_rgba(59,130,246,0.15)]"
        >
            {/* Badge hiasan pojok kanan atas */}
            <span className="absolute right-5 top-5 rounded-full border border-[#DBEAFE] bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3B82F6]">
                {badge}
            </span>

            {/* Ikon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBEAFE] text-[#3B82F6] transition-colors duration-300 group-hover:bg-[#3B82F6] group-hover:text-white">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </div>

            {/* Teks */}
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[#172554]">
                {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                {description}
            </p>

            {/* Estimasi waktu */}
            <div className="mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-[#64748B]">
                <Clock className="h-3.5 w-3.5 text-[#3B82F6]" aria-hidden="true" />
                Estimasi proses: <span className="text-[#172554]">{estimate}</span>
            </div>

            {/* Form (selalu menempel di bagian bawah kartu) */}
            <form onSubmit={handleSubmit} className="mt-auto pt-6">
                <label
                    htmlFor={`nama-${id}`}
                    className="mb-1.5 block text-sm font-medium text-[#172554]"
                >
                    Nama Lengkap
                </label>
                <input
                    id={`nama-${id}`}
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Masukkan nama sesuai KTP"
                    autoComplete="name"
                    className="w-full rounded-xl border border-[#DBEAFE] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#172554]
                               placeholder:text-[#64748B]/70 transition
                               focus:border-[#3B82F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20"
                />

                <div className="mt-4 flex justify-center">
                    <button
                        type="submit"
                        disabled={!name.trim()}
                        className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-6 py-2.5 text-sm font-semibold text-white
                                   shadow-sm transition hover:bg-[#2563EB] hover:shadow-md
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2
                                   disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#3B82F6] disabled:hover:shadow-sm"
                    >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Kirim Pengajuan
                    </button>
                </div>

                {sent && (
                    <p
                        role="status"
                        className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-[#3B82F6]"
                    >
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Pengajuan berhasil dikirim
                    </p>
                )}
            </form>
        </article>
    );
}
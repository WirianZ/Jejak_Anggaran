import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FileSearch, Scale, ClipboardList, ArrowRight, Search, MailCheck } from 'lucide-react';

const BENEFITS = [
    { label: 'Analisis dokumen', icon: FileSearch },
    { label: 'Perbandingan harga', icon: Scale },
    { label: 'Laporan ringkas', icon: ClipboardList },
];

const btnPrimary =
    'inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-cta bg-cta px-5 text-sm font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

const btnSecondary =
    'inline-flex h-11 items-center justify-center rounded-xl border border-line bg-white px-5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:bg-surface focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

const inputClass =
    'h-10 w-full min-w-0 rounded-xl border border-line bg-surface px-3.5 text-[13px] text-navy placeholder:text-body/70 transition focus:border-primary focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-primary/25';

function TrackCard() {
    const [sessionCode, setSessionCode] = useState('');
    const [ticketCode, setTicketCode] = useState('');
    const [error, setError] = useState('');

    const handleCheck = (e) => {
        e.preventDefault();
        if (!sessionCode.trim()) {
            setError('Masukkan nomor sesi / kode tiket terlebih dahulu.');
            return;
        }
        setError('');
        // TODO: hubungkan ke backend, mis. router.get('/lacak', { kode: sessionCode.trim(), tiket: ticketCode.trim() })
        console.log('Lacak pengajuan:', { sessionCode: sessionCode.trim(), ticketCode: ticketCode.trim() });
    };

    return (
        <section
            id="lacak-berkas"
            aria-labelledby="lacak-title"
            className="relative w-full max-w-[460px] rounded-[18px] border border-line bg-white p-6 shadow-[0_30px_60px_-28px_rgba(24,50,75,0.35),0_2px_8px_rgba(24,50,75,0.06)]"
        >
            <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-navy">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-dark" />
                    </span>
                    Live track
                </span>

                <div className="flex items-center gap-2">
                    <h2 id="lacak-title" className="text-right text-sm font-bold leading-tight tracking-[-0.01em] text-navy">
                        Lacak Pengajuan Surat
                    </h2>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-soft text-primary-dark" aria-hidden="true">
                        <MailCheck className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                </div>
            </div>

            <form onSubmit={handleCheck} className="mt-6" noValidate>
                <label htmlFor="kode-sesi" className="block text-[10px] font-bold uppercase tracking-[0.08em] text-body">
                    Nomor Sesi / Kode Tiket Pemohonan
                </label>
                <div className="mt-1.5 flex items-center gap-2">
                    <input
                        id="kode-sesi"
                        type="text"
                        value={sessionCode}
                        onChange={(e) => {
                            setSessionCode(e.target.value);
                            if (error) setError('');
                        }}
                        placeholder="Contoh: PRJ-2026-00123"
                        autoComplete="off"
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'kode-error' : undefined}
                        className={inputClass}
                    />
                    <button
                        type="submit"
                        className="inline-flex h-10 w-12 shrink-0 flex-col items-center justify-center gap-px rounded-xl border border-cta bg-cta text-[10px] font-bold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <Search className="h-3.5 w-3.5" aria-hidden="true" />
                        Cek
                    </button>
                </div>
                {error && (
                    <p id="kode-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                        {error}
                    </p>
                )}

                <label htmlFor="kode-tiket" className="mt-5 block text-[10px] font-bold uppercase tracking-[0.08em] text-body">
                    Kode Tiket Permohonan
                </label>
                <input
                    id="kode-tiket"
                    type="text"
                    value={ticketCode}
                    onChange={(e) => setTicketCode(e.target.value)}
                    placeholder="Masukkan kode tiket permohonan"
                    autoComplete="off"
                    className={`${inputClass} mt-1.5`}
                />
            </form>
        </section>
    );
}

export default function Hero() {
    return (
        <main className="relative overflow-hidden bg-white">
            {/* dekorasi pucat */}
            <div aria-hidden="true" className="absolute -right-[110px] -top-[60px] h-[480px] w-[480px] rounded-full bg-soft" />

            <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-10 px-5 pb-10 pt-10 sm:px-10 lg:gap-14 lg:pb-8 lg:pt-10">
                {/* Kolom kiri */}
                <div className="min-w-0 max-w-[580px] flex-[1_1_440px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1.5">
                        <span className="h-[6px] w-[6px] rounded-full bg-primary-dark" aria-hidden="true" />
                        <span className="text-[11px] font-bold tracking-[0.08em] text-navy">TRANSPARANSI ANGGARAN PUBLIK</span>
                    </div>

                    <h1 className="mt-5 text-balance text-[clamp(30px,min(3.6vw,6vh),50px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-navy">
                        Mengawal <span className="text-primary-dark">Anggaran</span>, Membangun{' '}
                        <span className="text-primary-dark">Transparansi.</span>
                    </h1>

                    <p className="mt-5 max-w-[500px] text-[15px] leading-[1.6] text-body">
                        Periksa kewajaran anggaran proyek publik, pahami rincian biaya, dan dorong transparansi dengan analisis yang lebih mudah.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="#layanan-surat" className={btnPrimary}>
                            Ajukan Surat Mandiri
                            <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                        </a>
                        <Link href="/transparansi-dana-desa" className={btnSecondary}>
                            Transparansi Dana Desa
                        </Link>
                    </div>

                    {/* 3 fitur dalam satu baris */}
                    <ul className="mt-6 flex flex-nowrap items-center gap-x-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {BENEFITS.map(({ label, icon: Icon }) => (
                            <li key={label} className="flex shrink-0 items-center gap-2">
                                <span className="grid h-7 w-7 place-items-center rounded-lg bg-soft text-primary-dark" aria-hidden="true">
                                    <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                                </span>
                                <span className="whitespace-nowrap text-xs font-semibold text-navy">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Kolom kanan: form lacak pengajuan surat */}
                <div className="relative flex min-w-0 max-w-[600px] flex-[1_1_380px] justify-center lg:justify-end">
                    <TrackCard />
                </div>
            </div>
        </main>
    );
}
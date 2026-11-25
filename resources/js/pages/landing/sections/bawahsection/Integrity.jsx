import { Link } from '@inertiajs/react';

// TODO: ganti dengan nomor WhatsApp pengaduan resmi desa (format 62xxxxxxxxxx).
const WHATSAPP_URL = 'https://wa.me/62XXXXXXXXXX';

const btn =
    'inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl px-4 text-[15px] font-semibold sm:px-6 sm:text-base transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy';

export default function Integrity() {
    return (
        <section aria-labelledby="integritas-judul" className="bg-canvas px-5 pt-16 sm:px-10 sm:pt-20">
            <div className="mx-auto grid max-w-[1120px] items-center gap-10 rounded-3xl bg-navy p-6 shadow-[0_24px_60px_-28px_rgba(24,50,75,0.55)] sm:p-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
                {/* Kolom kiri */}
                <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 rounded-full bg-alert px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] text-white">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
                            <path d="M12 8.5v4M12 15.5h.01" />
                        </svg>
                        KOMITMEN BEBAS PUNGUTAN LIAR
                    </span>

                    <h2 id="integritas-judul" className="mt-5 text-balance text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[34px]">
                        Menemukan Permintaan Uang atau Kendala Pelayanan?
                    </h2>

                    <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-[#B7CCE0]">
                        Seluruh staf dan perangkat desa dilarang keras menerima imbalan dalam bentuk apa pun. Apabila Anda menemukan indikasi pungli, laporkan langsung melalui kanal pengaduan resmi. Identitas pelapor dijaga aman dan terlindungi.
                    </p>
                </div>

                {/* Kolom kanan */}
                <div className="flex flex-col gap-3.5">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btn} bg-primary text-navy hover:bg-[#8BBBE3]`}
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5z" />
                            <path d="M9.3 8.6c.2 2 1.9 3.9 4 4.6l1.2-1.2-1.7-1.1-.8.5a3.2 3.2 0 0 1-1.5-1.5l.5-.8-1.1-1.7z" />
                        </svg>
                        Lapor Pungli via WhatsApp
                    </a>
                    <Link href="/pengaduan" className={`${btn} bg-white text-navy hover:bg-soft`}>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
                            <path d="M8.5 12l2.5 2.5 4.5-5" />
                        </svg>
                        Saluran Aduan Anonim
                    </Link>
                </div>
            </div>
        </section>
    );
}
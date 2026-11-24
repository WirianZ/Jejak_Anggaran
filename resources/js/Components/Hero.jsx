import { Link } from '@inertiajs/react';

const BENEFITS = [
    {
        label: 'Analisis dokumen',
        icon: (
            <>
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
                <path d="M14 3l5 5v3" />
                <path d="M14 3v5h5" />
                <circle cx="16.5" cy="17.5" r="3" />
                <path d="M18.7 19.7L21 22" />
            </>
        ),
    },
    {
        label: 'Perbandingan harga',
        icon: (
            <>
                <path d="M4 6h10M4 12h16M4 18h7" />
                <path d="M17 4v4M17 16v4" />
            </>
        ),
    },
    {
        label: 'Laporan ringkas',
        icon: (
            <>
                <rect x="5" y="4" width="14" height="17" rx="2" />
                <path d="M9 4V3h6v1" />
                <path d="M9 11h6M9 15h4" />
            </>
        ),
    },
];

const METRICS = [
    { label: 'Total RAB', value: 'Rp 482,6 jt' },
    { label: 'Potensi selisih', value: 'Rp 41,3 jt' },
    { label: 'Item ditinjau', value: '7', suffix: 'dari 24' },
];

// Data contoh untuk pratinjau. Ganti dengan data dari Laravel (props Inertia) bila sudah ada.
const ROWS = [
    { name: 'Semen Portland 40 kg', vol: '320 sak', price: 'Rp 71.000', ok: true },
    { name: 'Besi beton Ø10 mm', vol: '180 btg', price: 'Rp 98.000', ok: false },
    { name: 'Pasir cor', vol: '42 m³', price: 'Rp 320.000', ok: false },
    { name: 'Batu split 2/3', vol: '36 m³', price: 'Rp 345.000', ok: true },
];

// Panjang batang dihitung dari harga RAB dibanding harga acuan (acuan = x 206).
const BARS = [
    { label: 'Pasir cor', width: 171, diff: '+20,8%', high: true },
    { label: 'Besi Ø10', width: 158, diff: '+14,0%', high: true },
    { label: 'Semen', width: 149, diff: '+4,4%', high: false },
    { label: 'Batu split', width: 146, diff: '+1,5%', high: false },
];

function Chip({ ok }) {
    return ok ? (
        <span className="inline-flex items-center gap-[5px] rounded-full bg-green-100 px-[9px] py-[3px] text-[11px] font-bold text-green-900">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden="true" />
            Wajar
        </span>
    ) : (
        <span className="inline-flex items-center gap-[5px] rounded-full bg-amber-100 px-[9px] py-[3px] text-[11px] font-bold text-[#8A4B08]">
            <span className="h-1.5 w-1.5 rounded-[2px] bg-amber-600" aria-hidden="true" />
            Tinjau
        </span>
    );
}

const btnPrimary =
    'inline-flex h-[54px] items-center justify-center gap-2 rounded-xl border border-cta bg-cta px-7 text-base font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';

const floatShadow = 'shadow-[0_24px_48px_-20px_rgba(24,50,75,0.35),0_2px_6px_rgba(24,50,75,0.06)]';

export default function Hero() {
    return (
        <main className="relative overflow-hidden bg-white">
            {/* dekorasi pucat */}
            <div aria-hidden="true" className="absolute -right-[124px] -top-[52px] h-[620px] w-[620px] rounded-full bg-soft" />
            <div aria-hidden="true" className="absolute bottom-10 right-[420px] hidden h-[150px] w-[150px] rotate-[14deg] rounded-[32px] border-[1.5px] border-[#D5E5F4] lg:block" />
            <div
                aria-hidden="true"
                className="absolute bottom-9 right-10 hidden h-[110px] w-[170px] lg:block"
                style={{ backgroundImage: 'radial-gradient(#BCD6EE 1.6px, transparent 1.6px)', backgroundSize: '18px 18px' }}
            />

            <div className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-5 pb-12 pt-10 sm:px-10 sm:pb-20 sm:pt-[72px]">
                {/* Kolom kiri */}
                <div className="min-w-0 max-w-[600px] flex-[1_1_480px]">
                    <div className="inline-flex items-center gap-[9px] rounded-full border border-[#D5E5F4] bg-soft px-3.5 py-2">
                        <span className="h-[7px] w-[7px] rounded-full bg-primary-dark" aria-hidden="true" />
                        <span className="text-xs font-bold tracking-[0.08em] text-navy">TRANSPARANSI ANGGARAN PUBLIK</span>
                    </div>

                    <h1 className="mt-[22px] text-balance text-[clamp(38px,4.6vw,62px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-navy">
                        Mengawal <span className="text-primary-dark">Anggaran</span>, Membangun{' '}
                        <span className="text-primary-dark">Transparansi.</span>
                    </h1>

                    <p className="mt-[22px] max-w-[520px] text-lg leading-[1.65] text-body">
                        Periksa kewajaran anggaran proyek publik, pahami rincian biaya, dan dorong transparansi dengan analisis yang lebih mudah.
                    </p>

                    <div className="mt-[34px] flex flex-wrap gap-3.5">
                        <Link href="/analisis" className={btnPrimary}>
                            Mulai Analisis
                            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </Link>
                        <Link
                            href="/tentang"
                            className="inline-flex h-[54px] items-center justify-center rounded-xl border border-line bg-white px-7 text-base font-semibold text-navy transition-colors hover:border-primary hover:bg-surface focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            Pelajari Lebih Lanjut
                        </Link>
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3.5">
                        {BENEFITS.map((b) => (
                            <li key={b.label} className="flex items-center gap-[11px]">
                                <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-soft text-primary-dark" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        {b.icon}
                                    </svg>
                                </span>
                                <span className="text-sm font-semibold text-navy">{b.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Kolom kanan: pratinjau produk */}
                <div className="relative min-w-0 max-w-[620px] flex-[1_1_520px] pb-0 sm:pb-[170px]">
                    <section
                        aria-label="Pratinjau dashboard analisis anggaran"
                        className="relative overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_30px_60px_-28px_rgba(24,50,75,0.35),0_2px_8px_rgba(24,50,75,0.06)]"
                    >
                        <div className="flex items-center gap-[7px] border-b border-line bg-surface px-[18px] py-3">
                            <span className="h-[9px] w-[9px] rounded-full bg-[#D5DEE8]" aria-hidden="true" />
                            <span className="h-[9px] w-[9px] rounded-full bg-[#D5DEE8]" aria-hidden="true" />
                            <span className="h-[9px] w-[9px] rounded-full bg-[#D5DEE8]" aria-hidden="true" />
                            <span className="ml-3 truncate rounded-lg border border-line bg-white px-3.5 py-1 text-[11px] text-body">
                                projahub.id/proyek/jalan-rabat-rt04
                            </span>
                        </div>

                        <div className="px-[22px] pb-[52px] pt-[22px]">
                            <div className="flex flex-wrap items-start justify-between gap-2.5">
                                <div className="min-w-0">
                                    <div className="text-[11px] font-semibold text-body">Proyek / Infrastruktur Desa</div>
                                    <div className="mt-1 text-[17px] font-bold tracking-[-0.01em] text-navy">Pembangunan Jalan Rabat Beton RT 04</div>
                                </div>
                                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-100 px-[11px] py-[5px] text-xs font-bold text-[#8A4B08]">
                                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7v5l3 2" />
                                    </svg>
                                    Perlu Ditinjau
                                </span>
                            </div>

                            <div className="mt-[18px] grid grid-cols-3 gap-3">
                                {METRICS.map((m) => (
                                    <div key={m.label} className="rounded-[14px] border border-line bg-surface px-3.5 py-[13px]">
                                        <div className="text-[11px] font-semibold text-body">{m.label}</div>
                                        <div className="mt-[5px] text-[17px] font-bold tracking-[-0.01em] text-navy tabular-nums">
                                            {m.value}
                                            {m.suffix && <span className="ml-1 text-xs font-semibold text-body">{m.suffix}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-[18px] overflow-x-auto rounded-[14px] border border-line">
                                <table className="w-full min-w-[440px] border-collapse text-[12.5px] tabular-nums">
                                    <caption className="sr-only">Rincian bahan dalam RAB</caption>
                                    <thead>
                                        <tr className="bg-surface text-left text-[11px] text-body">
                                            <th scope="col" className="px-3.5 py-[9px] font-semibold">Material</th>
                                            <th scope="col" className="px-2 py-[9px] font-semibold">Volume</th>
                                            <th scope="col" className="px-2 py-[9px] text-right font-semibold">Harga satuan</th>
                                            <th scope="col" className="px-3.5 py-[9px] text-right font-semibold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-navy">
                                        {ROWS.map((r) => (
                                            <tr key={r.name} className="border-t border-line">
                                                <th scope="row" className="px-3.5 py-2.5 text-left font-semibold">{r.name}</th>
                                                <td className="px-2 py-2.5">{r.vol}</td>
                                                <td className="px-2 py-2.5 text-right">{r.price}</td>
                                                <td className="px-3.5 py-2.5 text-right"><Chip ok={r.ok} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Kartu mengambang: perbandingan harga */}
                    <section
                        aria-label="Perbandingan harga RAB dengan harga acuan"
                        className={`absolute -left-9 bottom-0 hidden w-[318px] rounded-[18px] border border-line bg-white px-[18px] py-4 sm:block ${floatShadow}`}
                    >
                        <div className="text-[13px] font-bold text-navy">Harga RAB vs harga acuan</div>
                        <svg
                            viewBox="0 0 282 132"
                            className="mt-2 block w-full"
                            role="img"
                            aria-label="Grafik batang: pasir cor 20,8 persen di atas harga acuan, besi beton 14,0 persen, semen 4,4 persen, batu split 1,5 persen"
                        >
                            <line x1="206" y1="4" x2="206" y2="104" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />
                            <text x="206" y="120" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#64748B">Harga acuan</text>
                            {BARS.map((b, i) => {
                                const y = 8 + i * 29;
                                return (
                                    <g key={b.label}>
                                        <text x="0" y={y + 9} fontSize="10.5" fontWeight="600" fill="#18324B">{b.label}</text>
                                        <rect x="62" y={y} width={b.width} height="12" rx="4" fill={b.high ? '#3B82F6' : '#A9CBEA'} />
                                        <text x="239" y={y + 10} fontSize="10" fontWeight="700" fill="#18324B">{b.diff}</text>
                                    </g>
                                );
                            })}
                        </svg>
                    </section>

                    {/* Kartu mengambang: analisis dokumen */}
                    <section
                        aria-label="Pratinjau analisis dokumen RAB"
                        className={`absolute -right-[22px] bottom-3.5 hidden w-[228px] rounded-[18px] border border-line bg-white px-4 pb-4 pt-3.5 sm:block ${floatShadow}`}
                    >
                        <div className="flex items-center gap-[9px]">
                            <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-soft text-primary-dark" aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 3v5h5" />
                                </svg>
                            </span>
                            <div className="min-w-0">
                                <div className="whitespace-nowrap text-xs font-bold text-navy">RAB_Jalan_RT04.pdf</div>
                                <div className="text-[10.5px] text-body">24 item terbaca</div>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-col gap-[7px]" aria-hidden="true">
                            <div className="h-[7px] w-[92%] rounded bg-line" />
                            <div className="h-[7px] w-[78%] rounded bg-line" />
                            <div className="flex h-5 items-center rounded-md border border-[#F5D78A] bg-amber-100 px-[7px]">
                                <div className="h-1.5 w-[62%] rounded-[3px] bg-[#D9A441]" />
                            </div>
                            <div className="h-[7px] w-[85%] rounded bg-line" />
                        </div>
                        <div className="mt-3 flex items-center gap-[7px] text-[11px] font-semibold text-navy">
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#3B82F6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M8 12.5l3 3 5-6" />
                            </svg>
                            3 item di atas harga acuan
                        </div>
                    </section>

                    <p className="absolute -bottom-1.5 left-0 hidden text-[11px] text-body sm:block">
                        Tampilan dan angka pada pratinjau adalah data contoh.
                    </p>
                </div>
            </div>
        </main>
    );
}
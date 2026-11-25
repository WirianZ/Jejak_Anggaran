import { useState } from 'react';

const FAQS = [
    {
        q: 'Apakah pengurusan surat melalui ProjaHub dipungut biaya?',
        a: 'Pengurusan layanan administrasi melalui platform ini mengikuti ketentuan biaya resmi yang berlaku di desa. Tidak diperkenankan adanya pungutan di luar ketentuan resmi.',
    },
    {
        q: 'Bagaimana cara mengambil dokumen yang sudah selesai?',
        a: 'Dokumen yang telah selesai diproses dapat diunduh melalui akun pengguna apabila tersedia dalam bentuk digital, atau mengikuti arahan pengambilan dari kantor desa.',
    },
    {
        q: 'Apakah keabsahan dokumen ber-QR Code diakui instansi lain?',
        a: 'Keabsahan dokumen bergantung pada jenis dokumen, penerbit, dan ketentuan instansi terkait. QR Code dapat digunakan sebagai sarana verifikasi apabila diterapkan secara resmi.',
    },
    {
        q: 'Bagaimana warga bisa ikut memverifikasi transparansi proyek desa?',
        a: 'Warga dapat melihat informasi proyek yang dipublikasikan, memeriksa informasi anggaran yang tersedia, dan menggunakan kanal pelaporan resmi apabila menemukan ketidaksesuaian.',
    },
    {
        q: 'Bagaimana cara mengajukan surat melalui platform?',
        a: 'Pilih jenis surat yang tersedia, lengkapi formulir pengajuan, unggah persyaratan, lalu kirim pengajuan untuk diproses oleh petugas desa.',
    },
];

export default function Faq() {
    // satu pertanyaan terbuka dalam satu waktu; null = semua tertutup
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" aria-labelledby="faq-judul" className="bg-canvas px-5 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20">
            <div className="mx-auto max-w-[860px]">
                <header className="text-center">
                    <span className="inline-block rounded-full border border-edge bg-soft px-3.5 py-1.5 text-xs font-bold tracking-[0.08em] text-navy">
                        PUSAT BANTUAN WARGA
                    </span>
                    <h2 id="faq-judul" className="mt-4 text-balance text-3xl font-bold tracking-[-0.02em] text-navy sm:text-4xl">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="mx-auto mt-3 max-w-[520px] text-base leading-relaxed text-muted">
                        Informasi seputar mekanisme pengurusan surat digital dan transparansi anggaran desa.
                    </p>
                </header>

                <ul className="mt-10 flex flex-col gap-3.5">
                    {FAQS.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <li
                                key={item.q}
                                className={`rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ${
                                    isOpen
                                        ? 'border-primary shadow-[0_10px_28px_-18px_rgba(24,50,75,0.35)]'
                                        : 'border-edge hover:border-primary hover:shadow-[0_6px_18px_-14px_rgba(24,50,75,0.3)]'
                                }`}
                            >
                                <h3>
                                    <button
                                        type="button"
                                        id={`faq-btn-${i}`}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${i}`}
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-[18px] text-left text-[15px] font-semibold text-navy focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary sm:px-6 sm:text-base"
                                    >
                                        {item.q}
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={`h-5 w-5 shrink-0 text-body transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-180 text-primary-dark' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    id={`faq-panel-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-btn-${i}`}
                                    inert={!isOpen}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-[15px] leading-[1.7] text-body sm:px-6">{item.a}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
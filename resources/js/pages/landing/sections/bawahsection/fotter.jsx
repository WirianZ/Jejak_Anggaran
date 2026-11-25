import { Link } from '@inertiajs/react';

// TODO: ganti dengan data kantor desa yang sebenarnya.
const KONTAK = {
    alamat: 'Jl. Raya Praja No. 01, Balai Desa Sukamaju, Jawa Tengah',
    telepon: '(024) 7654-3210',
    email: 'pelayanan@projahub.id',
};

const LAYANAN = [
    { label: 'Surat Keterangan Usaha (SKU)', href: '/e-surat/sku' },
    { label: 'SKTM', href: '/e-surat/sktm' },
    { label: 'Surat Pengantar SKCK', href: '/e-surat/skck' },
    { label: 'Surat Keterangan Domisili', href: '/e-surat/domisili' },
    { label: 'Pengantar Akta Nikah', href: '/e-surat/akta-nikah' },
];

const AKUNTABILITAS = [
    { label: 'Transparansi Dana Desa', href: '/anggaran' },
    { label: 'Peta Radar Proyek Fisik', href: '/proyek/peta' },
    { label: 'Verifikasi Geotag Lapangan', href: '/proyek/geotag' },
    { label: 'Cek Keaslian QR Dokumen', href: '/verifikasi' },
    { label: 'Whistleblower Anti-Pungli', href: '/pengaduan' },
];

const LEGAL = [
    { label: 'Kebijakan Privasi Warga', href: '/kebijakan-privasi' },
    { label: 'Pakta Integritas Zero Pungli', href: '/pakta-integritas' },
    { label: 'SOP Pelayanan Digital', href: '/sop' },
];

const linkClass =
    'rounded text-sm text-muted transition-colors hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

function Column({ title, items }) {
    return (
        <nav aria-label={title}>
            <h3 className="text-xs font-bold tracking-[0.08em] text-navy">{title.toUpperCase()}</h3>
            <ul className="mt-4 flex flex-col gap-3">
                {items.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href} className={linkClass}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function Info({ icon, children }) {
    return (
        <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-px grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-primary" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                </svg>
            </span>
            <span className="min-w-0 break-words">{children}</span>
        </li>
    );
}

export default function Footer() {
    return (
        <footer className="border-t border-edge bg-soft px-5 pb-8 pt-14 sm:px-10">
            <div className="mx-auto max-w-[1120px]">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-[11px]" aria-label="ProjaHub, ke beranda">
                            
                            <span className="text-[22px] font-bold leading-none tracking-[-0.02em] text-navy">
                                Proja<span className="text-primary-dark">Hub</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-[360px] text-sm leading-[1.7] text-muted">
                            Platform inovasi tata kelola desa terpadu untuk mempercepat pelayanan, digitalisasi administrasi, dan transparansi anggaran menuju pemerintahan yang bersih dan akuntabel.
                        </p>
                        <span className="mt-5 inline-block rounded-lg border border-edge bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                            Platform Pelayanan Digital Desa
                        </span>
                    </div>

                    <Column title="Layanan Surat" items={LAYANAN} />
                    <Column title="Akuntabilitas" items={AKUNTABILITAS} />

                    <div>
                        <h3 className="text-xs font-bold tracking-[0.08em] text-navy">KANTOR PELAYANAN</h3>
                        <ul className="mt-4 flex flex-col gap-3.5">
                            <Info icon={<><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>}>
                                {KONTAK.alamat}
                            </Info>
                            <Info icon={<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />}>
                                {KONTAK.telepon}
                            </Info>
                            <Info icon={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>}>
                                {KONTAK.email}
                            </Info>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-edge pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
                    <p>© 2026 ProjaHub. Create by Putra and Habsy.</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {LEGAL.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className={linkClass}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
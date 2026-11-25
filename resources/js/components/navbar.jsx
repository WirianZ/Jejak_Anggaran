import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Layanan Surat', href: '#layanan-surat' },
    { label: 'Lacak Berkas', href: '#lacak-berkas' },
    { label: 'Transparansi APBDes', href: '#transparansi' },
    { label: 'Radar Proyek', href: '#radar-proyek' },
    { label: 'FAQ', href: '#faq' },
];

const linkClass =
    'rounded-lg px-2.5 py-1.5 text-[13px] font-semibold text-body transition-colors hover:bg-soft hover:text-navy focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-10">
                <Link href="/" className="flex items-center gap-2 text-base font-extrabold tracking-[-0.02em] text-navy">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-cta text-xs text-white" aria-hidden="true">P</span>
                    Praja Hub
                </Link>

                <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    <Link
                        href="/login"
                        className="inline-flex h-9 items-center rounded-lg border border-line bg-white px-3.5 text-[13px] font-semibold text-navy transition-colors hover:border-primary hover:bg-surface focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary"
                    >
                        Masuk
                    </Link>
                    <Link
                        href="/register"
                        className="inline-flex h-9 items-center rounded-lg border border-cta bg-cta px-3.5 text-[13px] font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Daftar Akun Warga
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="menu-mobile"
                    aria-label={open ? 'Tutup menu' : 'Buka menu'}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line text-navy lg:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <div id="menu-mobile" className="border-t border-line bg-white px-5 pb-5 pt-3 lg:hidden">
                    <nav aria-label="Navigasi seluler" className="flex flex-col">
                        {NAV_LINKS.map((l) => (
                            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`${linkClass} py-3`}>
                                {l.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-3 grid grid-cols-2 gap-2.5">
                        <Link href="/login" className="inline-flex h-11 items-center justify-center rounded-xl border border-line text-sm font-semibold text-navy">
                            Masuk
                        </Link>
                        <Link href="/register" className="inline-flex h-11 items-center justify-center rounded-xl bg-cta text-sm font-semibold text-white">
                            Daftar Akun Warga
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const MENU = [
    { label: 'Beranda', href: '/' },
    { label: 'E-Surat', href: '/e-surat' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Panduan', href: '/panduan' },
];

export function LogoMark({ className = 'h-10 w-10' }) {
    return (
        <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
            <path d="M9 4h14l9 9v20a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" fill="#6FA8D8" />
            <path d="M23 4v6a3 3 0 0 0 3 3h6z" fill="#EAF3FA" />
            <rect x="11" y="17" width="13" height="2.6" rx="1.3" fill="#18324B" />
            <rect x="11" y="23" width="8" height="2.6" rx="1.3" fill="#18324B" />
            <path d="M12 31.5L22 31" stroke="#18324B" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="31.5" r="2" fill="#18324B" />
            <circle cx="29" cy="31" r="7.5" fill="#18324B" stroke="#fff" strokeWidth="2.5" />
            <path d="M25.6 31l2.5 2.5 4.3-4.7" fill="none" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-[11px]" aria-label="ProjaHub, ke beranda">
            <LogoMark />
            <span className="text-[22px] font-bold leading-none tracking-[-0.02em] text-navy">
                Proja<span className="text-primary-dark">Hub</span>
            </span>
        </Link>
    );
}

const btn =
    'inline-flex items-center justify-center rounded-xl text-[15px] font-semibold transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2';
export const btnLogin = `${btn} h-11 border border-line bg-white px-[22px] text-navy hover:border-primary hover:bg-surface hover:text-cta`;
export const btnSolid = `${btn} h-11 border border-cta bg-cta px-[22px] text-white hover:border-cta-hover hover:bg-cta-hover`;

export default function Navbar() {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    const path = url.split('?')[0];
    const isActive = (href) => (href === '/' ? path === '/' : path.startsWith(href));

    // tutup menu mobile saat pindah halaman atau menekan Esc
    useEffect(() => setOpen(false), [url]);
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <header className="relative z-50 border-b border-line bg-white">
            <nav
                className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-8 px-5 sm:px-10"
                aria-label="Navigasi utama"
            >
                <Logo />

                <ul className="hidden h-full items-center gap-9 lg:flex">
                    {MENU.map((item) => (
                        <li key={item.href} className="h-full">
                            <Link
                                href={item.href}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                                className={`relative flex h-full items-center text-[15px] transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-sm ${
                                    isActive(item.href)
                                        ? 'font-semibold text-cta after:bg-cta'
                                        : 'font-medium text-body hover:text-cta'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 lg:flex">
                    <Link href="/login" className={btnLogin}>Login</Link>
                    <Link href="/register" className={btnSolid}>Sign Up</Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="menu-mobile"
                    aria-label={open ? 'Tutup menu' : 'Buka menu'}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-line text-navy transition-colors hover:bg-surface focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary lg:hidden"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                    </svg>
                </button>
            </nav>

            <div id="menu-mobile" className={`border-t border-line bg-white lg:hidden ${open ? 'block' : 'hidden'}`}>
                <div className="mx-auto max-w-[1280px] px-5 pb-5 pt-3 sm:px-10">
                    <ul className="flex flex-col">
                        {MENU.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                    className={`block rounded-xl px-3 py-3 text-base ${
                                        isActive(item.href) ? 'bg-soft font-semibold text-navy' : 'font-medium text-navy hover:bg-surface'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
                        <Link href="/login" className={btnLogin}>Login</Link>
                        <Link href="/register" className={btnSolid}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
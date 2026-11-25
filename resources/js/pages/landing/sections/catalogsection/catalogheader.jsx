export default function CatalogHeader() {
    return (
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-[9px] rounded-full border border-[#D5E5F4] bg-soft px-3.5 py-2">
                <span className="h-[7px] w-[7px] rounded-full bg-primary-dark" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.08em] text-navy">LAYANAN DIGITAL DESA</span>
            </div>

            <h2
                id="e-catalog-title"
                className="mt-[22px] text-balance text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-navy"
            >
                Katalog Pelayanan <span className="text-primary-dark">E-Surat Mandiri</span>
            </h2>

            <p className="mt-4 max-w-lg text-base leading-[1.65] text-body">
                Pilih jenis surat yang Anda butuhkan, lalu ajukan langsung dari rumah
                tanpa antre di kantor desa. Proses lebih cepat, biaya jelas, dan
                statusnya bisa dilacak kapan saja.
            </p>
        </header>
    );
}
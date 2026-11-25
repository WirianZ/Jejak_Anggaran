import CashbookTable from './cashtable';
import { cashbookEntries } from './cashdata';

export default function CashbookPanel({ entries = cashbookEntries }) {
    return (
        <div>
            {/* Headline + penjelasan singkat */}
            <div className="mb-6 max-w-2xl">
                <h3 className="text-[clamp(20px,2.2vw,26px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy">
                    Buku Kas <span className="text-primary-dark">Desa</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                    Catatan pengeluaran kas desa yang diurutkan dari transaksi terbaru, lengkap dengan
                    nomor bukti atau SPM, penerima dana, nominal, dan status pencairannya.
                </p>
            </div>

            <CashbookTable entries={entries} />
        </div>
    );
}

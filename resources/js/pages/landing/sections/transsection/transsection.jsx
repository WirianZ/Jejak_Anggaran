import { Landmark, Wallet, PiggyBank, TrendingUp, CheckCircle2, BadgeCheck } from 'lucide-react';
import TransparencyHeader from './transheader';
import SummaryCard from './summarycard';
import AllocationBar from './allocationbar';
import TransTabs from './transtabs';   
import {
    budgetMeta,
    paguTotal,
    spendingAllocations,
    buildSummary,
    formatRupiah,
    formatPercent,
} from './transdata';

// Semua prop opsional. Kirim dari Laravel lewat Inertia bila data sudah dinamis.
export default function TransparencySection({
    meta = budgetMeta,
    pagu = paguTotal,
    allocations = spendingAllocations,
}) {
    const s = buildSummary(pagu, allocations);

    const cards = [
        {
            id: 'pagu',
            icon: Landmark,
            label: 'Total Pendapatan Desa (PAGU)',
            tag: `APBDes ${meta.year}`,
            value: formatRupiah(s.pagu),
            footIcon: BadgeCheck,
            footText: `Anggaran penuh tahun ${meta.year}`,
        },
        {
            id: 'realisasi',
            icon: Wallet,
            label: 'Realisasi Belanja',
            tag: meta.termin,
            value: formatRupiah(s.realisasi),
            footIcon: TrendingUp,
            footText: `${formatPercent(s.realisasiPct)} dari PAGU terserap`,
        },
        {
            id: 'sisa',
            icon: PiggyBank,
            label: 'Sisa Kas Desa',
            tag: 'Belum terpakai',
            value: formatRupiah(s.sisa),
            footIcon: CheckCircle2,
            footText: `${formatPercent(s.sisaPct)} dari PAGU tersedia`,
            tone: 'success',
        },
    ];

    return (
        <section
            id="transparansi-anggaran"
            aria-labelledby="transparansi-title"
            // Mulai dari bg-surface agar menyambung dengan akhir gradient section katalog di atasnya
            className="relative -mt-px overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
        >
            {/* dekorasi pucat, senada dengan hero & katalog */}
            <div aria-hidden="true" className="absolute -right-[140px] top-[60px] h-[420px] w-[420px] rounded-full bg-soft/70" />
            <div aria-hidden="true" className="absolute -left-[120px] bottom-[-100px] h-[360px] w-[360px] rounded-full bg-soft/60" />

            <div className="relative mx-auto max-w-[1280px] px-5 sm:px-10">
                <TransparencyHeader
                    year={meta.year}
                    termin={meta.termin}
                    apbdesPdfUrl={meta.apbdesPdfUrl}
                    terminPdfUrl={meta.terminPdfUrl}
                />

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-14">
                    {cards.map(({ id, ...card }) => (
                        <SummaryCard key={id} {...card} />
                    ))}
                </div>

                <div className="mt-6">
                    <AllocationBar allocations={allocations} total={s.realisasi} />
                </div>

                <div className="mt-12 lg:mt-14">
                    <TransTabs />
                </div>

            </div>
        </section>
    );
}

// Data contoh. Ganti dengan data asli dari Laravel (props Inertia) lalu oper lewat props
// `TransparencySection`. Nilai Realisasi, Sisa Kas, dan persentase dihitung otomatis
// di bawah, jadi angka di card dan progress bar selalu konsisten.

export const budgetMeta = {
    year: 2026,
    termin: 'Termin III',
    apbdesPdfUrl: '/dokumen/apbdes-2026.pdf',
    terminPdfUrl: '/dokumen/realisasi-2026-termin-3.pdf',
};

// Total pendapatan desa (PAGU)
export const paguTotal = 1_200_000_000;

// Alokasi realisasi belanja per bidang. Warna dipakai bersama oleh bar dan legenda.
export const spendingAllocations = [
    { id: 'pemerintahan', label: 'Penyelenggaraan Pemerintahan', amount: 260_820_000, color: '#18324B' },
    { id: 'pembangunan', label: 'Pembangunan Desa', amount: 186_300_000, color: '#2F80C6' },
    { id: 'kesehatan', label: 'Kesehatan', amount: 111_780_000, color: '#14B8A6' },
    { id: 'pemberdayaan', label: 'Pemberdayaan Masyarakat', amount: 89_424_000, color: '#F59E0B' },
    { id: 'kemasyarakatan', label: 'Pembinaan Kemasyarakatan', amount: 59_616_000, color: '#8B5CF6' },
    { id: 'bencana', label: 'Penanggulangan Bencana', amount: 37_260_000, color: '#F43F5E' },
];

// ---------- helper ----------
const rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
});
const percent = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 });

export const formatRupiah = (n) => rupiah.format(n).replace(/\s/g, ' ');
export const formatPercent = (n) => `${percent.format(n)}%`;

export function buildSummary(pagu = paguTotal, allocations = spendingAllocations) {
    const realisasi = allocations.reduce((sum, a) => sum + a.amount, 0);
    const sisa = pagu - realisasi;
    return {
        pagu,
        realisasi,
        sisa,
        realisasiPct: (realisasi / pagu) * 100,
        sisaPct: (sisa / pagu) * 100,
    };
}

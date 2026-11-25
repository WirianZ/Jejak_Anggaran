// Data contoh 4 bidang belanja. Ganti dengan data asli dari Laravel (props Inertia).
// Total `budget` keempat bidang = Rp 1.200.000.000 (sama dengan PAGU) dan total `spent`
// = Rp 745.200.000 (sama dengan realisasi di card ringkasan).

export const PAGU_TOTAL = 1_200_000_000;

export const sectors = [
    {
        id: 'bidang-1',
        number: 1,
        title: 'Pelaksanaan Pembangunan Desa',
        description:
            'Pembangunan dan pemeliharaan infrastruktur desa seperti jalan, saluran air, jembatan, dan fasilitas umum.',
        tag: 'Infrastruktur',
        color: '#2F80C6',
        budget: 480_000_000,
        spent: 276_000_000,
        progress: 58,
        subCount: 12,
        detailUrl: '/transparansi-dana-desa/bidang-1',
    },
    {
        id: 'bidang-2',
        number: 2,
        title: 'Pemberdayaan Masyarakat dan BUMDes',
        description:
            'Pelatihan warga, dukungan UMKM, serta penyertaan modal dan penguatan usaha BUMDes.',
        tag: 'Ekonomi Warga',
        color: '#F59E0B',
        budget: 216_000_000,
        spent: 120_000_000,
        progress: 55,
        subCount: 8,
        detailUrl: '/transparansi-dana-desa/bidang-2',
    },
    {
        id: 'bidang-3',
        number: 3,
        title: 'Penyelenggaraan Pemerintahan Desa',
        description:
            'Operasional pemerintahan, penghasilan tetap perangkat desa, administrasi, dan pelayanan publik.',
        tag: 'Administrasi',
        color: '#18324B',
        budget: 396_000_000,
        spent: 288_000_000,
        progress: 73,
        subCount: 15,
        detailUrl: '/transparansi-dana-desa/bidang-3',
    },
    {
        id: 'bidang-4',
        number: 4,
        title: 'Kesehatan, Stunting, dan Tahap Darurat',
        description:
            'Posyandu, pencegahan stunting, bantuan kesehatan warga, serta dana siaga bencana dan keadaan darurat.',
        tag: 'Kesehatan & Sosial',
        color: '#14B8A6',
        budget: 108_000_000,
        spent: 61_200_000,
        progress: 57,
        subCount: 9,
        detailUrl: '/transparansi-dana-desa/bidang-4',
    },
];

// ---------- helper ----------
const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const percent = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 });

export const formatRp = (n) => rupiah.format(n).replace(/\s/g, ' ');
export const formatPct = (n) => `${percent.format(n)}%`;

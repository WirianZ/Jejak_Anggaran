// Data contoh sumber pendapatan desa. Ganti dengan data asli dari Laravel (props Inertia).
// Total `amount` kelima sumber = Rp 1.200.000.000 (sama dengan PAGU).
// `disbursed` = dana yang sudah cair ke kas desa. Persentase cair dan porsi dihitung otomatis.

export const sources = [
    {
        id: 'sumber-1',
        number: 1,
        title: 'Dana Desa (DD)',
        description:
            'Transfer dari APBN melalui kabupaten untuk membiayai pembangunan, pemberdayaan, dan penyelenggaraan pemerintahan desa.',
        note: 'Cair bertahap, Termin I dan II sudah masuk kas desa',
        color: '#18324B',
        amount: 540_000_000,
        disbursed: 432_000_000,
    },
    {
        id: 'sumber-2',
        number: 2,
        title: 'Alokasi Dana Desa (ADD)',
        description:
            'Bagian dari dana perimbangan kabupaten yang dialokasikan untuk desa, terutama operasional dan penghasilan tetap perangkat.',
        note: 'Cair per termin sesuai jadwal kabupaten',
        color: '#2F80C6',
        amount: 312_000_000,
        disbursed: 234_000_000,
    },
    {
        id: 'sumber-3',
        number: 3,
        title: 'Bantuan Keuangan Provinsi / Kabupaten',
        description:
            'Bantuan khusus dari pemerintah daerah untuk program atau kegiatan tertentu di desa.',
        note: 'Menunggu pencairan sisa termin berikutnya',
        color: '#14B8A6',
        amount: 168_000_000,
        disbursed: 84_000_000,
    },
    {
        id: 'sumber-4',
        number: 4,
        title: 'Bagi Hasil Pajak dan Retribusi Daerah',
        description:
            'Bagian pajak dan retribusi daerah yang dibagikan kepada desa sesuai ketentuan yang berlaku.',
        note: 'Dibayarkan berdasarkan realisasi penerimaan daerah',
        color: '#F59E0B',
        amount: 96_000_000,
        disbursed: 48_000_000,
    },
    {
        id: 'sumber-5',
        number: 5,
        title: 'Pendapatan Asli Desa dan Lain-lain',
        description:
            'Hasil usaha BUMDes, pengelolaan aset desa, swadaya masyarakat, dan pendapatan sah lainnya.',
        note: 'Diterima langsung oleh kas desa sepanjang tahun',
        color: '#8B5CF6',
        amount: 84_000_000,
        disbursed: 63_000_000,
    },
];

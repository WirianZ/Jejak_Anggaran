// Data contoh Buku Kas Desa. Ganti dengan data asli dari Laravel (props Inertia).
// status: 'cair' | 'proses' | 'verifikasi'

export const cashbookEntries = [
    { id: 'kas-1', date: '2026-11-20', voucher: 'SPM/062/XI/2026', recipient: 'CV Karya Mandiri (Pembangunan Drainase RT 03)', amount: 48_500_000, status: 'cair' },
    { id: 'kas-2', date: '2026-11-14', voucher: 'SPM/058/XI/2026', recipient: 'Posyandu Melati (Program Pencegahan Stunting)', amount: 6_750_000, status: 'cair' },
    { id: 'kas-3', date: '2026-11-05', voucher: 'BKU/049/XI/2026', recipient: 'Perangkat Desa (Penghasilan Tetap Oktober)', amount: 32_400_000, status: 'cair' },
    { id: 'kas-4', date: '2026-10-28', voucher: 'SPM/054/X/2026', recipient: 'BUMDes Sumber Rejeki (Penyertaan Modal)', amount: 25_000_000, status: 'proses' },
    { id: 'kas-5', date: '2026-10-19', voucher: 'SPM/051/X/2026', recipient: 'UD Bangun Jaya (Material Jalan Lingkungan)', amount: 37_200_000, status: 'cair' },
    { id: 'kas-6', date: '2026-10-10', voucher: 'BKU/043/X/2026', recipient: 'Kelompok Tani Makmur (Pelatihan Pertanian)', amount: 9_800_000, status: 'verifikasi' },
    { id: 'kas-7', date: '2026-09-30', voucher: 'SPM/047/IX/2026', recipient: 'Toko ATK Sejahtera (Operasional Kantor Desa)', amount: 3_150_000, status: 'cair' },
    { id: 'kas-8', date: '2026-09-22', voucher: 'SPM/044/IX/2026', recipient: 'Satgas Siaga Bencana Desa (Dana Darurat)', amount: 12_000_000, status: 'verifikasi' },
];

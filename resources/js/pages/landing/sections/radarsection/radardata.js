// Data contoh. Ganti dengan data asli dari Laravel (props Inertia).
// lat/lng di bawah adalah koordinat contoh: ganti dengan koordinat desamu.

export const mapCenter = [-7.58, 112.23];
export const mapZoom = 15;

export const STATUS_META = {
    berjalan: { label: 'Berjalan', color: '#2F80C6' },
    selesai: { label: 'Selesai', color: '#10B981' },
};

export const sampleProjects = [
    {
        id: 'p1',
        name: 'Pembangunan Drainase Dusun Krajan',
        category: 'Infrastruktur',
        status: 'berjalan',
        progress: 65,
        pagu: 150_000_000,
        absorbed: 97_500_000,
        contractor: 'CV Karya Mandiri',
        volume: 'Drainase beton 320 m, lebar 0,6 m, tinggi 0,8 m',
        location: 'Dusun Krajan, RT 03 / RW 01',
        startDate: '2026-08-10',
        endDate: '2026-12-15',
        lat: -7.5765,
        lng: 112.2255,
        description:
            'Pembangunan saluran drainase untuk mengurangi genangan air di permukiman saat musim hujan.',
    },
    {
        id: 'p2',
        name: 'Rabat Beton Jalan Lingkungan',
        category: 'Infrastruktur',
        status: 'berjalan',
        progress: 40,
        pagu: 210_000_000,
        absorbed: 84_000_000,
        contractor: 'UD Bangun Jaya',
        volume: 'Rabat beton 450 m, lebar 3 m, tebal 15 cm',
        location: 'Dusun Sumbermulyo, RT 01 / RW 02',
        startDate: '2026-09-01',
        endDate: '2027-01-10',
        lat: -7.5832,
        lng: 112.2371,
        description:
            'Peningkatan jalan lingkungan agar akses warga dan hasil pertanian lebih lancar sepanjang tahun.',
    },
    {
        id: 'p3',
        name: 'Rehabilitasi Posyandu Melati',
        category: 'Kesehatan',
        status: 'selesai',
        progress: 100,
        pagu: 85_000_000,
        absorbed: 83_200_000,
        contractor: 'Swakelola Desa (TPK)',
        volume: 'Bangunan 6 × 8 m, 2 ruang layanan, 1 toilet',
        location: 'Dusun Krajan, RT 02 / RW 01',
        startDate: '2026-05-05',
        endDate: '2026-09-20',
        lat: -7.5791,
        lng: 112.2318,
        description:
            'Perbaikan bangunan dan sarana posyandu untuk mendukung layanan kesehatan ibu, balita, dan pencegahan stunting.',
    },
    {
        id: 'p4',
        name: 'Gedung Usaha BUMDes',
        category: 'Ekonomi',
        status: 'berjalan',
        progress: 25,
        pagu: 180_000_000,
        absorbed: 45_000_000,
        contractor: 'CV Cipta Persada',
        volume: 'Bangunan 10 × 12 m, 1 lantai, gudang dan kios',
        location: 'Dusun Karanganyar, RT 04 / RW 03',
        startDate: '2026-10-05',
        endDate: '2027-02-28',
        lat: -7.5712,
        lng: 112.2342,
        description:
            'Gedung pusat kegiatan usaha BUMDes sebagai gudang hasil panen sekaligus ruang jual produk warga.',
    },
    {
        id: 'p5',
        name: 'Sumur Bor dan Jaringan Air Bersih',
        category: 'Air Bersih',
        status: 'berjalan',
        progress: 80,
        pagu: 95_000_000,
        absorbed: 76_000_000,
        contractor: 'CV Tirta Makmur',
        volume: 'Sumur bor 60 m, pipa distribusi 800 m, 1 menara tandon',
        location: 'Dusun Sumbermulyo, RT 03 / RW 02',
        startDate: '2026-07-15',
        endDate: '2026-12-05',
        lat: -7.5868,
        lng: 112.2289,
        description:
            'Penyediaan air bersih untuk sekitar 120 kepala keluarga yang selama ini kesulitan air saat kemarau.',
    },
    {
        id: 'p6',
        name: 'Perbaikan Jembatan Penghubung Dusun',
        category: 'Infrastruktur',
        status: 'selesai',
        progress: 100,
        pagu: 120_000_000,
        absorbed: 118_400_000,
        contractor: 'CV Karya Mandiri',
        volume: 'Jembatan beton 14 m, lebar 3,5 m, dengan pagar pengaman',
        location: 'Perbatasan Dusun Krajan dan Karanganyar',
        startDate: '2026-04-12',
        endDate: '2026-08-30',
        lat: -7.5745,
        lng: 112.2288,
        description:
            'Penggantian jembatan lama yang rusak agar dapat dilalui kendaraan roda empat dengan aman.',
    },
];

// src: null = tampil placeholder. Untuk data asli isi URL gambar dari storage Laravel.
export const sampleDocs = [
    { id: 'f1', projectId: 'p1', title: 'Galian saluran sisi timur', user: 'Siti Aminah', location: 'Dusun Krajan RT 03', src: null },
    { id: 'f2', projectId: 'p1', title: 'Pemasangan U-ditch tahap 2', user: 'Bambang Hartono', location: 'Dusun Krajan RT 02', src: null },
    { id: 'f3', projectId: 'p2', title: 'Pengecoran segmen pertama', user: 'Agus Salim', location: 'Dusun Sumbermulyo RT 01', src: null },
    { id: 'f4', projectId: 'p3', title: 'Ruang layanan setelah renovasi', user: 'Rina Wulandari', location: 'Posyandu Melati', src: null },
    { id: 'f5', projectId: 'p5', title: 'Menara tandon air terpasang', user: 'Slamet Riyadi', location: 'Dusun Sumbermulyo RT 03', src: null },
];

// ---------- helper ----------
const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const pct = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 });
const dateFmt = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

export const formatRp = (n) => rupiah.format(n).replace(/\s/g, ' ');
export const formatPct = (n) => `${pct.format(n)}%`;
export const formatDate = (iso) => dateFmt.format(new Date(`${iso}T00:00:00`));
export const formatRange = (a, b) => `${formatDate(a)} – ${formatDate(b)}`;

import { HeartHandshake, MapPin, Store, HandHeart, Baby, ShieldCheck } from 'lucide-react';

export const letterServices = [
    {
        id: 'pengantar-nikah',
        title: 'Surat Pengantar Nikah',
        description: 'Pengajuan surat pengantar untuk keperluan administrasi pernikahan.',
        icon: HeartHandshake,
        badge: 'Keluarga',
        estimate: '1–2 hari kerja',
    },
    {
        id: 'keterangan-domisili',
        title: 'Surat Keterangan Domisili',
        description: 'Pengajuan surat keterangan tempat tinggal warga.',
        icon: MapPin,
        badge: 'Kependudukan',
        estimate: '1 hari kerja',
    },
    {
        id: 'keterangan-usaha',
        title: 'Surat Keterangan Usaha',
        description: 'Pengajuan surat keterangan kepemilikan atau aktivitas usaha.',
        icon: Store,
        badge: 'Usaha',
        estimate: '1–2 hari kerja',
    },
    {
        id: 'sktm',
        title: 'Surat Keterangan Tidak Mampu (SKTM)',
        description: 'Pengajuan surat keterangan kondisi sosial ekonomi warga.',
        icon: HandHeart,
        badge: 'Sosial',
        estimate: '2–3 hari kerja',
    },
    {
        id: 'keterangan-kelahiran',
        title: 'Surat Keterangan Kelahiran',
        description: 'Pengajuan surat keterangan peristiwa kelahiran.',
        icon: Baby,
        badge: 'Kependudukan',
        estimate: '1 hari kerja',
    },
    {
        id: 'pengantar-skck',
        title: 'Surat Pengantar SKCK',
        description: 'Pengajuan surat pengantar untuk keperluan pembuatan SKCK.',
        icon: ShieldCheck,
        badge: 'Kepolisian',
        estimate: '1 hari kerja',
    },
];
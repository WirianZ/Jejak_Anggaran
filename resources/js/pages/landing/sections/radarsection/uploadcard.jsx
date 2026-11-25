import { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';
import { Camera, CheckCircle2, ImagePlus, Send, X } from 'lucide-react';

const MAX_MB = 5;
const field =
    'h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-navy placeholder:text-body/60 focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/20';

// submitUrl: endpoint Laravel (POST, multipart). Bila kosong, komponen berjalan mode demo
// (foto hanya ditambahkan di tampilan, tidak dikirim ke server).
export default function UploadCard({ id = 'unggah-temuan', projects, defaultProjectId, submitUrl = null, onSubmitted }) {
    const [projectId, setProjectId] = useState(defaultProjectId ?? projects[0]?.id ?? '');
    const [form, setForm] = useState({ name: '', title: '', location: '' });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);
    const [sending, setSending] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (defaultProjectId) setProjectId(defaultProjectId);
    }, [defaultProjectId]);

    const set = (key) => (e) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        setDone(false);
    };

    const clearFile = () => {
        if (preview) URL.revokeObjectURL(preview);
        setFile(null);
        setPreview(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    const onFile = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        if (!f.type.startsWith('image/')) return setError('File harus berupa gambar (JPG, PNG, atau WEBP).');
        if (f.size > MAX_MB * 1024 * 1024) return setError(`Ukuran foto maksimal ${MAX_MB} MB.`);
        setError('');
        setDone(false);
        if (preview) URL.revokeObjectURL(preview);
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    const finish = () => {
        onSubmitted?.({
            id: `up-${Date.now()}`,
            projectId,
            title: form.title.trim(),
            user: form.name.trim(),
            location: form.location.trim(),
            src: preview, // object URL dipakai oleh daftar foto, jadi tidak di-revoke di sini
            pending: true,
        });
        setForm({ name: '', title: '', location: '' });
        setFile(null);
        setPreview(null);
        if (inputRef.current) inputRef.current.value = '';
        setDone(true);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!file) return setError('Pilih foto terlebih dahulu.');
        setError('');

        if (!submitUrl) return finish();

        setSending(true);
        router.post(
            submitUrl,
            { project_id: projectId, name: form.name, title: form.title, location: form.location, photo: file },
            {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: finish,
                onError: (errs) => setError(Object.values(errs)[0] ?? 'Gagal mengunggah. Coba lagi.'),
                onFinish: () => setSending(false),
            },
        );
    };

    const canSubmit = projectId && form.name.trim() && form.title.trim() && file && !sending;

    return (
        <section
            id={id}
            aria-labelledby="unggah-title"
            className="scroll-mt-24 rounded-[20px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(24,50,75,0.06)] sm:p-6"
        >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E5F4] bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-navy">
                <Camera className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} aria-hidden="true" />
                Partisipasi Warga
            </span>

            <h3 id="unggah-title" className="mt-4 text-lg font-bold tracking-[-0.01em] text-navy">
                Unggah Temuan Foto
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
                Melihat kondisi proyek di sekitarmu? Kirim foto beserta judul dan lokasinya. Foto akan
                diperiksa perangkat desa sebelum tampil sebagai bukti lapangan.
            </p>

            <form onSubmit={submit} className="mt-5 space-y-3.5">
                <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-navy">Proyek</span>
                    <select value={projectId} onChange={(e) => setProjectId(e.target.value)} className={field}>
                        {projects.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Area pilih foto */}
                <div>
                    <span className="mb-1.5 block text-xs font-bold text-navy">Foto</span>
                    {preview ? (
                        <div className="relative overflow-hidden rounded-xl border border-line">
                            <img src={preview} alt="Pratinjau foto yang dipilih" className="aspect-[4/3] w-full object-cover" />
                            <button
                                type="button"
                                onClick={clearFile}
                                aria-label="Hapus foto"
                                className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-navy shadow transition-colors hover:bg-white focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary"
                            >
                                <X className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                            </button>
                        </div>
                    ) : (
                        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-primary/50 bg-surface px-4 py-7 text-center transition-colors hover:bg-soft focus-within:ring-[3px] focus-within:ring-primary/30">
                            <ImagePlus className="h-6 w-6 text-primary-dark" strokeWidth={1.8} aria-hidden="true" />
                            <span className="text-[13px] font-semibold text-navy">Pilih atau ambil foto</span>
                            <span className="text-[11px] text-body">JPG, PNG, atau WEBP, maksimal {MAX_MB} MB</span>
                            <input ref={inputRef} type="file" accept="image/*" onChange={onFile} className="sr-only" />
                        </label>
                    )}
                </div>

                <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-navy">Judul foto</span>
                    <input value={form.title} onChange={set('title')} maxLength={80} placeholder="Contoh: Saluran belum tersambung" className={field} />
                </label>

                <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-navy">Lokasi pengambilan</span>
                    <input value={form.location} onChange={set('location')} maxLength={80} placeholder="Contoh: Dusun Krajan RT 03" className={field} />
                </label>

                <label className="block">
                    <span className="mb-1.5 block text-xs font-bold text-navy">Nama pengunggah</span>
                    <input value={form.name} onChange={set('name')} maxLength={60} placeholder="Nama Anda" className={field} />
                </label>

                <div aria-live="polite">
                    {error && <p className="text-xs font-semibold text-rose-600">{error}</p>}
                    {done && (
                        <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                            Terima kasih! Foto terkirim dan menunggu verifikasi.
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-cta bg-cta px-5 text-sm font-semibold text-white transition-colors hover:border-cta-hover hover:bg-cta-hover focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <Send className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                    {sending ? 'Mengirim…' : 'Kirim Temuan'}
                </button>
            </form>
        </section>
    );
}

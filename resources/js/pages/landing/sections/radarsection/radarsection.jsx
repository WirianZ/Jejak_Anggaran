import { useMemo, useState } from 'react';
import RadarHeader from './radarheader';
import RadarMap from './radarmap';
import ProjectList from './projectlist';
import ProjectDetail from './projectdetail';
import UploadCard from './uploadcard';
import { sampleDocs, sampleProjects } from './radardata';

// Semua prop opsional. Kirim dari Laravel lewat Inertia bila data sudah dinamis.
// submitUrl: endpoint POST untuk unggah foto (kosong = mode demo).
export default function RadarSection({ projects = sampleProjects, photos: initialPhotos = sampleDocs, submitUrl = null }) {
    const [filter, setFilter] = useState('semua');
    const [selectedId, setSelectedId] = useState(projects[0]?.id ?? null);
    const [photos, setPhotos] = useState(initialPhotos);

    const filtered = useMemo(
        () => (filter === 'semua' ? projects : projects.filter((p) => p.status === filter)),
        [projects, filter],
    );
    const counts = useMemo(
        () => ({
            semua: projects.length,
            berjalan: projects.filter((p) => p.status === 'berjalan').length,
            selesai: projects.filter((p) => p.status === 'selesai').length,
        }),
        [projects],
    );

    // Bila proyek terpilih tersaring keluar, pakai proyek pertama pada hasil filter
    const selected = filtered.find((p) => p.id === selectedId) ?? filtered[0] ?? null;
    const projectPhotos = selected ? photos.filter((ph) => ph.projectId === selected.id) : [];

    const goToUpload = () => {
        const el = document.getElementById('unggah-temuan');
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el?.querySelector('select, input')?.focus({ preventScroll: true });
    };

    // Tinggi peta dan daftar proyek disamakan di layar besar
    const BOX = 'lg:h-[560px]';

    return (
        <section
            id="radar-pembangunan"
            aria-labelledby="radar-title"
            className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
                <RadarHeader projectCount={projects.length} photoCount={photos.length} onUploadClick={goToUpload} />

                {/* Urutan di mobile: peta, daftar, detail, unggah. Di desktop: 2 kolom x 2 baris */}
                <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
                    <RadarMap
                        projects={filtered}
                        selectedId={selected?.id}
                        onSelect={setSelectedId}
                        className={`h-[360px] sm:h-[460px] ${BOX} lg:col-start-1 lg:row-start-1`}
                    />

                    <ProjectList
                        projects={filtered}
                        filter={filter}
                        onFilterChange={setFilter}
                        counts={counts}
                        selectedId={selected?.id}
                        onSelect={setSelectedId}
                        className={`max-h-[560px] ${BOX} lg:col-start-2 lg:row-start-1`}
                    />

                    <div className="lg:col-start-1 lg:row-start-2">
                        <ProjectDetail project={selected} photos={projectPhotos} />
                    </div>

                    <div className="lg:col-start-2 lg:row-start-2">
                        <UploadCard
                            projects={projects}
                            defaultProjectId={selected?.id}
                            submitUrl={submitUrl}
                            onSubmitted={(photo) => setPhotos((prev) => [photo, ...prev])}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

import ProjectCard from './projectcard';
import ProjectFilter from './projectfilter';

export default function ProjectList({ projects, filter, onFilterChange, counts, selectedId, onSelect, className = '' }) {
    return (
        <section
            aria-labelledby="daftar-proyek-title"
            className={`flex flex-col rounded-[20px] border border-line bg-white p-4 shadow-[0_2px_8px_rgba(24,50,75,0.06)] sm:p-5 ${className}`}
        >
            <div className="flex items-baseline justify-between gap-3">
                <h3 id="daftar-proyek-title" className="text-base font-bold tracking-[-0.01em] text-navy">
                    Daftar Proyek
                </h3>
                <span className="text-xs font-semibold text-body tabular-nums">{projects.length} proyek</span>
            </div>

            <div className="mt-3">
                <ProjectFilter value={filter} onChange={onFilterChange} counts={counts} />
            </div>

            <ul className="mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 [scrollbar-width:thin]">
                {projects.length === 0 && (
                    <li className="rounded-xl border border-dashed border-line px-4 py-10 text-center text-sm text-body">
                        Tidak ada proyek pada filter ini.
                    </li>
                )}
                {projects.map((p) => (
                    <li key={p.id}>
                        <ProjectCard project={p} selected={p.id === selectedId} onSelect={onSelect} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

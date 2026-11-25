import { Camera, Clock3, MapPin } from 'lucide-react';

export default function PhotoCard({ photo }) {
    const { title, user, location, src, pending } = photo;
    const initial = user?.trim()?.[0]?.toUpperCase() ?? '?';

    return (
        <figure className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-soft to-surface">
                {src ? (
                    <img src={src} alt={title} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                    <div className="grid h-full w-full place-items-center text-primary-dark/50" aria-hidden="true">
                        <Camera className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                )}
                {pending && (
                    <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700">
                        <Clock3 className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                        Menunggu verifikasi
                    </span>
                )}
            </div>

            <figcaption className="p-3.5">
                <p className="text-[13px] font-bold leading-snug text-navy">{title}</p>
                <div className="mt-2.5 flex items-center gap-2">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-soft text-[11px] font-extrabold text-primary-dark" aria-hidden="true">
                        {initial}
                    </span>
                    <span className="truncate text-xs font-semibold text-navy">{user}</span>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-body">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-dark" strokeWidth={2} aria-hidden="true" />
                    <span className="truncate">{location}</span>
                </p>
            </figcaption>
        </figure>
    );
}

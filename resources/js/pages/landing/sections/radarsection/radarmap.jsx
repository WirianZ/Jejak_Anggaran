import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Map as MapIcon, Satellite } from 'lucide-react';
import { STATUS_META, mapCenter, mapZoom } from './radardata';

const TILES = {
    jalan: {
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; kontributor OpenStreetMap',
    },
    satelit: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Citra &copy; Esri, Maxar, Earthstar Geographics',
    },
};

function markerIcon(color, selected) {
    const size = selected ? 36 : 28;
    const ring = selected ? `,0 0 0 6px ${color}40` : '';
    return L.divIcon({
        className: '', // hilangkan kotak putih bawaan leaflet
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:3px solid #fff;box-shadow:0 4px 12px rgba(24,50,75,.4)${ring};display:flex;align-items:center;justify-content:center;"><span style="width:8px;height:8px;border-radius:9999px;background:#fff;display:block"></span></div>`,
    });
}

const MODES = [
    { id: 'jalan', label: 'Peta Jalan', icon: MapIcon },
    { id: 'satelit', label: 'Satelit', icon: Satellite },
];

export default function RadarMap({ projects, selectedId, onSelect, className = '' }) {
    const [mode, setMode] = useState('jalan');
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const groupRef = useRef(null);
    const onSelectRef = useRef(onSelect);
    onSelectRef.current = onSelect;

    // 1) buat peta sekali
    useEffect(() => {
        const map = L.map(containerRef.current, {
            center: mapCenter,
            zoom: mapZoom,
            scrollWheelZoom: false, // supaya scroll halaman tidak "tersangkut" di peta
        });
        mapRef.current = map;
        groupRef.current = L.layerGroup().addTo(map);
        return () => {
            map.remove();
            mapRef.current = null;
            groupRef.current = null;
        };
    }, []);

    // 2) ganti lapisan peta jalan <-> satelit
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;
        const t = TILES[mode];
        const layer = L.tileLayer(t.url, { attribution: t.attribution, maxZoom: 19 }).addTo(map);
        return () => layer.remove();
    }, [mode]);

    // 3) gambar titik proyek
    useEffect(() => {
        const group = groupRef.current;
        if (!group) return;
        group.clearLayers();
        projects.forEach((p) => {
            const selected = p.id === selectedId;
            const marker = L.marker([p.lat, p.lng], {
                icon: markerIcon(STATUS_META[p.status].color, selected),
                zIndexOffset: selected ? 1000 : 0,
                title: p.name,
            });
            const tip = document.createElement('div');
            tip.textContent = p.name;
            marker.bindTooltip(tip, { direction: 'top', offset: [0, -16] });
            marker.on('click', () => onSelectRef.current(p.id));
            group.addLayer(marker);
        });
    }, [projects, selectedId]);

    // 4) sesuaikan zoom saat daftar proyek (filter) berubah
    useEffect(() => {
        const map = mapRef.current;
        if (!map || projects.length === 0) return;
        const bounds = L.latLngBounds(projects.map((p) => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [56, 56], maxZoom: 16 });
    }, [projects]);

    // 5) geser peta bila proyek terpilih berada di luar layar
    useEffect(() => {
        const map = mapRef.current;
        const p = projects.find((x) => x.id === selectedId);
        if (!map || !p) return;
        const latlng = L.latLng(p.lat, p.lng);
        if (!map.getBounds().contains(latlng)) map.panTo(latlng);
    }, [selectedId, projects]);

    return (
        // isolate: menjaga z-index internal leaflet agar tidak menimpa navbar
        <div className={`relative isolate overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_2px_8px_rgba(24,50,75,0.06)] ${className}`}>
            <div ref={containerRef} role="region" aria-label="Peta lokasi pembangunan desa" className="h-full w-full" />

            {/* Tombol mode peta */}
            <div
                role="group"
                aria-label="Mode peta"
                className="absolute right-3 top-3 z-[1000] flex gap-1 rounded-xl border border-line bg-white p-1 shadow-[0_4px_16px_rgba(24,50,75,0.15)]"
            >
                {MODES.map(({ id, label, icon: Icon }) => {
                    const active = mode === id;
                    return (
                        <button
                            key={id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setMode(id)}
                            className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary ${
                                active ? 'bg-[#18324B] text-white' : 'text-body hover:bg-surface hover:text-navy'
                            }`}
                        >
                            <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Legenda */}
            <div className="absolute bottom-3 left-3 z-[1000] flex gap-3 rounded-xl border border-line bg-white/95 px-3 py-2 text-[11px] font-semibold text-navy shadow-[0_4px_16px_rgba(24,50,75,0.15)]">
                {Object.entries(STATUS_META).map(([id, m]) => (
                    <span key={id} className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: m.color }} aria-hidden="true" />
                        {m.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

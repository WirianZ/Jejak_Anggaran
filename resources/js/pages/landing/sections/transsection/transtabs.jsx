import { useRef, useState } from 'react';
import { LayoutGrid, Coins, BookOpen } from 'lucide-react';
import SectorPanel from './sectorpanel';
import SourcePanel from './sourcepanel';
import CashbookPanel from './cashpanel';

const TABS = [
    { id: 'sektor', label: 'Rincian 4 Sektor Belanja', icon: LayoutGrid, panel: () => <SectorPanel /> },
    { id: 'sumber', label: 'Sumber Pendapatan', icon: Coins, panel: () => <SourcePanel /> },
    { id: 'kas', label: 'Buku Kas Desa', icon: BookOpen, panel: () => <CashbookPanel /> },
];

export default function TransTabs({ tabs = TABS }) {
    const [activeId, setActiveId] = useState(tabs[0].id);
    const btnRefs = useRef([]);

    const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

    // Navigasi keyboard sesuai pola WAI-ARIA tabs
    const handleKeyDown = (e) => {
        const i = tabs.findIndex((t) => t.id === activeId);
        let next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        setActiveId(tabs[next].id);
        btnRefs.current[next]?.focus();
    };

    return (
        <div>
            {/* Selector tab: bisa di-scroll horizontal di layar sempit */}
            <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div
                    role="tablist"
                    aria-label="Rincian anggaran desa"
                    onKeyDown={handleKeyDown}
                    className="mx-auto flex w-max gap-1.5 rounded-2xl border border-line bg-white p-1.5 shadow-[0_2px_8px_rgba(24,50,75,0.06)]"
                >
                    {tabs.map(({ id, label, icon: Icon }, idx) => {
                        const isActive = id === active.id;
                        return (
                            <button
                                key={id}
                                ref={(el) => (btnRefs.current[idx] = el)}
                                id={`tab-${id}`}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`panel-${id}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => setActiveId(id)}
                                className={`inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 text-[13px] font-semibold transition-colors focus:outline-none focus-visible:ring-[3px] focus-visible:ring-primary focus-visible:ring-offset-2 ${
                                    isActive
                                        ? 'bg-[#18324B] text-white'
                                        : 'text-body hover:bg-surface hover:text-navy'
                                }`}
                            >
                                <Icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                                {label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div
                key={active.id}
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${active.id}`}
                tabIndex={0}
                className="mt-6 focus:outline-none"
            >
                {active.panel()}
            </div>
        </div>
    );
}

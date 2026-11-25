import SectorCard from './sectorcard';
import { sectors } from './sectordata';

export default function SectorPanel({ items = sectors }) {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {items.map(({ id, ...sector }) => (
                <SectorCard key={id} {...sector} />
            ))}
        </div>
    );
}

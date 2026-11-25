import SourceCard from './sourcecard';
import { sources } from './sourcedata';

export default function SourcePanel({ items = sources }) {
    return (
        <div className="flex flex-col gap-6">
            {items.map(({ id, ...source }) => (
                <SourceCard key={id} {...source} />
            ))}
        </div>
    );
}

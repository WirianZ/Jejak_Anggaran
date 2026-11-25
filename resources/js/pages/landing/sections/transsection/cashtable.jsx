import StatusBadge from './statusbadge';
import { formatRp } from './sectordata';

const dateFmt = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
const formatDate = (iso) => dateFmt.format(new Date(`${iso}T00:00:00`));

const TH = 'px-5 py-3.5 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-body';

export default function CashbookTable({ entries }) {
    return (
        <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_2px_8px_rgba(24,50,75,0.06)]">
            {/* Tabel bisa digeser ke samping di layar sempit */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse">
                    <caption className="sr-only">Buku kas desa: transaksi terbaru</caption>
                    <thead className="bg-surface">
                        <tr>
                            <th scope="col" className={TH}>Tanggal</th>
                            <th scope="col" className={TH}>No. Bukti / SPM</th>
                            <th scope="col" className={TH}>Penerima Dana</th>
                            <th scope="col" className={`${TH} text-right`}>Nominal</th>
                            <th scope="col" className={TH}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((e) => (
                            <tr key={e.id} className="border-t border-line transition-colors hover:bg-surface/70">
                                <td className="whitespace-nowrap px-5 py-4 text-[13px] font-semibold text-navy tabular-nums">
                                    {formatDate(e.date)}
                                </td>
                                <td className="whitespace-nowrap px-5 py-4 text-[13px] text-body tabular-nums">
                                    {e.voucher}
                                </td>
                                <td className="px-5 py-4 text-[13px] leading-snug text-navy">{e.recipient}</td>
                                <td className="whitespace-nowrap px-5 py-4 text-right text-[13px] font-extrabold text-navy tabular-nums">
                                    {formatRp(e.amount)}
                                </td>
                                <td className="whitespace-nowrap px-5 py-4">
                                    <StatusBadge status={e.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

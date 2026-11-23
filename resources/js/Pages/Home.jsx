import { Head } from '@inertiajs/react';

export default function Home({ title, tanggal }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-3xl font-bold text-emerald-600">{title}</h1>
                <p className="mt-2 text-slate-500">Data dari Laravel: {tanggal}</p>
            </div>
        </>
    );
}
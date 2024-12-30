import Link from 'next/link';

export default function Page() {
  return (
    <main className="P-10">
        <h1>Dashboard</h1>
        <Link href={"/admin"}>
        Admin Panel
        </Link>
    </main>
  );
}
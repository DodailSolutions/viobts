import Link from 'next/link';

export const metadata = {
  title: 'Offline',
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1c45c8] text-2xl font-extrabold text-white">
          VIO
        </div>
        <h1 className="text-h2 font-display font-bold mb-4">You&apos;re offline</h1>
        <p className="text-body text-text-muted mb-8">
          We couldn&apos;t reach the network. Check your connection — any pages you&apos;ve
          already visited are still available.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-[#1c45c8] px-6 text-sm font-medium text-white transition-colors hover:bg-[#163AAD]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

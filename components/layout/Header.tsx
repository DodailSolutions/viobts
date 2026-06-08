import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" aria-label="VIO BTS — Home">
            <Image
              src="/images/logo/vio-logo-blue.png"
              alt="VIO BTS — We Are Your Technology Partner"
              width={905}
              height={440}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/services" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200">Services</Link>
            <Link href="/industries" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200">Industries</Link>
            <Link href="/who-we-are" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200">Company</Link>
            <Link href="/case-studies" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200">Work</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-[#1c45c8] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#163AAD] hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}

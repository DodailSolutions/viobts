import Link from 'next/link';
import { Home, Briefcase, Grid, Users, Mail } from 'lucide-react';

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-xl border-t border-border safe-area-inset-bottom md:hidden shadow-[0_-1px_3px_rgba(0,0,0,0.06)]">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-text-muted hover:text-accent transition-colors duration-200">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-text-muted hover:text-accent transition-colors duration-200">
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-medium">Services</span>
        </Link>
        <Link href="/industries" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-text-muted hover:text-accent transition-colors duration-200">
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium">Industries</span>
        </Link>
        <Link href="/who-we-are" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-text-muted hover:text-accent transition-colors duration-200">
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-medium">Company</span>
        </Link>
        <Link href="/contact-us" className="flex flex-col items-center justify-center w-full h-full space-y-1 text-text-muted hover:text-accent transition-colors duration-200">
          <Mail className="w-5 h-5" />
          <span className="text-[10px] font-medium">Contact</span>
        </Link>
      </div>
    </nav>
  );
}

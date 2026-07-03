import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-text-muted py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="inline-block" aria-label="VIO BTS — Home">
            <Image
              src="/images/logo/vio-logo-blue.png"
              alt="VIO BTS — We Are Your Technology Partner"
              width={905}
              height={440}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm max-w-xs leading-relaxed">We are your technology partner. Richmond, VA-based enterprise IT services firm.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/technology-workforce" className="hover:text-accent transition-colors duration-200">Technology Workforce</Link></li>
            <li><Link href="/services/big-data-analytics" className="hover:text-accent transition-colors duration-200">Big Data & Analytics</Link></li>
            <li><Link href="/services/cloud-enablement-cicd" className="hover:text-accent transition-colors duration-200">Cloud & CI/CD</Link></li>
            <li><Link href="/services/api-microservices" className="hover:text-accent transition-colors duration-200">API & Microservices</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/who-we-are" className="hover:text-accent transition-colors duration-200">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-accent transition-colors duration-200">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors duration-200">Blog</Link></li>
            <li><Link href="/contact-us" className="hover:text-accent transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 uppercase tracking-wider">Connect</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border text-xs text-center text-text-subtle">
        <p>&copy; {new Date().getFullYear()} VIO Business Technology Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

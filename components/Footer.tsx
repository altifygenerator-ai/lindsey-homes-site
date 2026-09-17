import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <Image src={site.logo} alt="Lindsey Homes" width={110} height={110} />
          <div>
            <strong>Lindsey Homes</strong>
            <p>Custom homes and private estate residences across Dallas–Fort Worth.</p>
          </div>
        </div>

        <div className="footer-contact">
          <span>New home inquiries</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
        </div>
      </div>

      <div className="shell footer-links">
        <nav aria-label="Footer navigation">
          <Link href="/custom-homes">Custom Homes</Link>
          <Link href="/floor-plans">Residences</Link>
          <Link href="/inspiration">Design</Link>
          <Link href="/about">Approach</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Lindsey Homes LLC</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

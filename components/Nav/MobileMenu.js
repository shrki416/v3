import Link from 'next/link';

export default function MobileMenu() {
  return (
    <div className="space-x-8 block md:hidden mt-4">
      <Link href="/about">
        <a className="text-base font-normal">About</a>
      </Link>
      <Link href="/projects">
        <a className="text-base font-normal">Projects</a>
      </Link>
      <Link href="/contact">
        <a className="text-base font-normal">Contact</a>
      </Link>
    </div>
  );
}

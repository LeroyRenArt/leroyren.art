
import Link from 'next/link';

export default function ScrollNav() {
  return (
    <nav className="bg-black bg-opacity-80 text-yellow-300 py-4 px-6 flex justify-center space-x-8 shadow-md fixed w-full z-50 top-0">
      <Link href="#serafine" className="hover:text-yellow-500 transition">Serafine</Link>
      <Link href="#pop" className="hover:text-yellow-500 transition">POP</Link>
      <Link href="#shadowcrystal" className="hover:text-yellow-500 transition">Guardian</Link>
      <Link href="#contact" className="hover:text-yellow-500 transition">Contact</Link>
    </nav>
  );
}

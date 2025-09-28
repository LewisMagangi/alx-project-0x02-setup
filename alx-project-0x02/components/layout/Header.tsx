

import Link from "next/link";

const Header: React.FC = () => (
  <header className="w-full bg-blue-600 text-white p-4 flex gap-6 items-center justify-center font-bold text-xl">
    <Link href="/home" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="/posts" className="hover:underline">Posts</Link>
  </header>
);

export default Header;

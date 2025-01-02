"use client";
import Link from 'next/link';
import Language from './Language';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState ,useEffect} from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full  ${isScrolled ? 'shadow-md bg-white z-50' : 'bg-transparent border-b border-blue-300'}`}>
      <div className="flex justify-between items-center  px-8">
        <div className="text-2xl font-bold text-[#24317e]">
          <img src="/logo 1.png" alt="" className='h-16'/>
        </div>
        <button
          className="text-2xl md:hidden text-[#24317e]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <nav className="hidden md:flex space-x-6 font-bold">
          <Link id='home-link' className="hover:text-blue-600 text-gray-800" href="/">Home</Link>
          <Link id='about-link' className="hover:text-blue-600 text-gray-800" href="/">About</Link>
          <Link id='services-link' className="hover:text-blue-600 text-gray-800" href="services">Services</Link>
          <Link id='contact-link' className="hover:text-blue-600 text-gray-800" href="contact">Contact</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Language />
          {/* <button className="border border-[#24317e] text-[#24317e] px-4 py-2 rounded hover:bg-[#24317e] hover:text-white">Contact</button> */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <nav className="flex flex-col items-center space-y-4">
          <Link id='home-link-mobile' className="hover:text-blue-600 text-gray-800" href="/">Home</Link>
          <Link id='about-link-mobile' className="hover:text-blue-600 text-gray-800" href="/">About</Link>
          <Link id='services-link-mobile' className="hover:text-blue-600 text-gray-800" href="services">Services</Link>
          <Link id='contact-link-mobile' className="hover:text-blue-600 text-gray-800" href="contact">Contact</Link>
          </nav>
          <div className="mt-4 flex flex-col space-y-4">
            <Language />
            <button className="border border-[#24317e] text-[#24317e] px-4 py-2 rounded hover:bg-[#24317e] hover:text-white">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

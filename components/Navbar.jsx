'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const menuLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Health Services', href: '/health-services' },
  { title: 'Concierge Medicine', href: '/concierge-medicine' },
  { title: 'Resources', href: '/resources' },
  { title: 'Enroll/Contact', href: '/contact' },
];

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="  bg-slate-400 md:opacity-60  top-0 left-0 right-0 z-10 overflow-hidden">
        <div className="md:w-[1092px] mx-auto justify-between lg:max-w-7xl md:items-center md:flex ">
          <div className="flex px-4 items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:bg-transparent bg-orange-300 md:block md:pb-0 m-0 ${
                navbar ? 'p-12 md:p-0 block z-10' : 'hidden'
              }`}
            >
              <ul className="h-screen  md:h-auto items-center justify-center md:flex">
                {menuLinks.map((item) => (
                  <li
                    key={item.title}
                    className="text-gray-50 hover:text-white  py-2 md:px-3 text-center border-b-2 md:border-b-0  hover:bg-cyan-800  border-cyan-800 md:hover:bg-transparent"
                  >
                    <Link href={item.href} onClick={() => setNavbar(!navbar)}>
                      {item.title.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

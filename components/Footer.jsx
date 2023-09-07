import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiOutlineLinkedin } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  'Primary Care',
  'HIV Services',
  'Urgent Care',
  'Concierge Medicine',
  'Sports Medicine',
  'Mental Health',
];

const links = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Health Services', href: '/health-services' },
  { title: 'Concierge Medicine', href: '/concierge-medicine' },
  { title: 'Resources', href: '/resources' },
  { title: 'Enroll/Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-400 w-full px-4 py-8">
      <div className="md:w-[1092px] flex-wrap flex justify-between m-auto py-8 px-4">
        <div className="flex md:w-[24%] flex-col py-4 ">
          <h3 className="text-3xl font-semibold">Logo</h3>
          <p className="text-xl py-4">
            Osra Medical offers fear-free primary care tailored uniquely for the
            gay, bi-sexual, and LGBTQ+ community.
          </p>
          <div className="flex gap-4 py-4">
            <Link href={'/'} className="">
              <BsFacebook size={24} />
            </Link>
            <Link href={'/'} className="">
              <AiFillTwitterCircle size={26} />
            </Link>
            <Link href={'/'} className="">
              <AiOutlineLinkedin size={24} />
            </Link>
          </div>
        </div>
        <div className="flex md:w-[24%] flex-col py-4">
          <h3 className="font-semibold text-2xl">Services</h3>
          <ul className="py-1 ">
            {services.map((service, i) => (
              <li className="list-none py-2 text-lg" key={i}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:w-[24%] flex-col py-4">
          <h3 className="font-semibold text-2xl">Links</h3>
          <ul className="py-1 ">
            {links.map((link, i) => (
              <li className="list-none py-2 text-lg" key={i}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex py-4 md:w-[24%] flex-col">
          <h3 className="font-semibold text-2xl">Have a questions?</h3>
          <ul className="py-1 ">
            <li className="list-none py-2 text-lg flex gap-4">
              <ImLocation2 size={36} />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="list-none py-2 text-lg flex gap-4">
              <BsTelephoneFill size={18} />
              <span>415-954-2220</span>
            </li>
            <li className="list-none py-2 text-lg flex gap-4">
              <BsFillEnvelopeFill size={18} />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

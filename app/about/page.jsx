import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-cyan-900 py-16">
      <div className="md:w-[550px] m-auto px-2 py-8 flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold text-3xl text-center text-white mb-4">
          Dr. Nasser Mohamed MD
        </h2>
        <Image src={'/me.jpg'} alt="dr" width={450} height={450} />
        <p className="text-center px-8 text-gray-300">
          <em>
            “I am grateful that I have found Dr. Mohamed to be my primary care
            physician. In a time where the word "empathy" is merely a marketing
            buzzword, Dr. Mohamed embodies empathy in his practice without any
            pretense.” WY - Yelp
          </em>
        </p>
        <div className="w-full flex flex-wrap justify-center items-center gap-4 my-8">
          <Link
            href={'/contact'}
            className=" border-2 border-orange-500 text-white hover:bg-orange-500  text-l md:text-xl px-4 py-4 "
          >
            Meet Dr. Nas for free
          </Link>
          <Link
            href={'/contact'}
            className="hover:bg-orange-600 border-2 border-orange-500 text-white  px-4 text-l md:text-xl py-4"
          >
            Call: 415-954-2220
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from 'react';
import Link from 'next/link';

const serviceItems = [
  {
    id: 1,
    title: 'Primary Care',
    description:
      'Our LGBTQ+ friendly primary care center in San Francisco provides patients access to San Francisco primary care services like vaccinations, sick visits, pregnancy tests, ear, nose, throat, STD screenings, prevention, treatment, and more.',
  },
  {
    id: 2,
    title: 'HIV Services',
    description:
      'Professional advice and awareness of HIV and hepatitis can prevent contraction. The HIV services include the treatment, diagnosis, screening, disease management, and preventive measures for HIV and hepatitis.',
  },
  {
    id: 3,
    title: 'Urgent Care',
    description:
      'If you seek urgent LGBTQ+ health services in San Francisco, trust Osra Medical. From minor cuts and wound care to sprains and minor broken bones, we care for most urgent care needs. Contact our LGBTQ+ friendly, urgent care emergency services to receive urgent care today.',
  },
  {
    id: 4,
    title: 'Concierge Medicine ',
    description:
      "Our primary care physicians' regular visits can monitor your health and treat complications at benign stages. In addition, Dr. Nas follows up on your cases and provides medical intelligence based on your health and body.",
  },
  {
    id: 5,
    title: 'Sports Medicine',
    description:
      'Physical fitness followed by treatment of sports injuries is the primary objective of sports medicine. Our physicians provide preventive measures for sports illness to the patients through imaging, referrals, diagnosis, and more.',
  },
  {
    id: 6,
    title: 'Mental Health',
    description:
      'Our LGBTQ+ health services in San Francisco monitor the mental health of patients. Psychiatric evaluation and counseling are provided to all the patients. Behavioral patterns of patients are analyzed to provide treatment accordingly.',
  },
];

const page = () => {
  return (
    <div className="w-full h-auto">
      {/* service info section  */}
      <div className="w-full h-auto flex justify-center items-center bg-cyan-900 py-16">
        <div className="m-auto md:w-[60%] text-center">
          <div className="md:px-8 px-2">
            <h2 className="text-4xl font-bold   text-white border-b border-gray-300 pb-10 md:px-6 px-2">
              LGBTQ+ Healthcare Services in San Francisco
            </h2>
            <p className="text-xl text-gray-100 py-8 md:px-16">
              Below are some of the LGBTQ+ healthcare services in San Francisco
              that you can receive at Osra Medical. Schedule an appointment with
              Dr. Nas today!
            </p>
          </div>
          <div className="mt-6 w-full flex justify-center flex-wrap md:justify-between gap-3">
            <Link
              href={'/contact'}
              className="bg-transparent border-2  hover:bg-orange-500 border-orange-500 text-white text-l md:text-xl px-10 py-4 mx-2"
            >
              Meet Dr. Nas for free
            </Link>
            <Link
              href={'/contact'}
              className="bg-transparent border-2  hover:bg-orange-500 border-orange-500 text-white px-10 text-l md:text-xl py-4 mx-2"
            >
              Call: 415-954-2220
            </Link>
          </div>
        </div>
      </div>
      {/* services section  */}
      <div className="w-full h-auto py-16 bg-cyan-900">
        <div className="md:w-[1092px] m-auto flex justify-center flex-wrap">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="flex md:w-[30%] gap-4 px-6 py-4 flex-col"
            >
              <h3 className="font-semibold border-b-2 text-center border-gray-400 py-4 text-4xl text-gray-200 ">
                {item.title}
              </h3>
              <p className="text-xl text-center px-4 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

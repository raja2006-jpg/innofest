import React from 'react';
import rvsLogo from '../assets/rvs_logo.png'
const  RVSBanner: React.FC = () => {
  return (
    <div className="bg-white/20 py-2 md:p-5 text-center text-white">
    <div className='flex items-center justify-center'>
      <div className=''>
        {/* Add the actual path to the logo image */}
        <img
          src={rvsLogo}
          alt="RVS Technical Campus Logo"
          className="w-20 h-20 hidden sm:block md:w-28 md:h-28 "
        />
      </div>
      <div className=''>
        <h1 className="text-xl md:text-4xl font-bold ">
            RVS Technical Campus - Coimbatore
        </h1>
        <p className=" text-sm md:text-xl font-semibold ">
            (An Autonomous Institution)
        </p>
      </div>

    </div>

        <p className="text-xs md:text-base mt-2 px-0.5 py-0.5">
            Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai.
            <br />
            Recognized by UGC, Accredited by NAAC with 'A' Grade
            <br />
            Kumaran Kottam Campus, Kannampalayam, Coimbatore - 641402
        </p>
    </div>
  );
};

export default RVSBanner;

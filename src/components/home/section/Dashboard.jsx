import React from 'react';
import {
  LikesIcon,
  RevenuesIcon,
  TransactionIcon,
  UsersIcon,
} from '../../icons/CardIcons';
import Topbar from '../../utils/Topbar';

const Dashboard = () => {
  return (
    <>
      <Topbar header={'Dashboard'} />
      <div className='my-10 grid grid-cols-4 gap-10'>
        <div className='px-6 py-5 bg-card-1 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <RevenuesIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Revenues</div>
          <div className='py-1 text-2xl font-sans font-bold'>$2,129,430</div>
        </div>
        <div className='px-6 py-5 bg-card-2 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <TransactionIcon />
          </div>
          <div className='text-sm font-lato font-normal'>
            Total Transactions
          </div>
          <div className='py-1 text-2xl font-sans font-bold'>1,520</div>
        </div>
        <div className='px-6 py-5 bg-card-3 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <LikesIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Likes</div>
          <div className='py-1 text-2xl font-sans font-bold'>9,721</div>
        </div>
        <div className='px-6 py-5 bg-card-4 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <UsersIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Users</div>
          <div className='py-1 text-2xl font-sans font-bold'>892</div>
        </div>
      </div>
      <div className='w-full py-7 px-10 bg-white rounded-2xl'>
        <p className='text-lg font-bold font-montserrat'>Activities</p>
      </div>
      <div className='mt-10 grid grid-cols-2 gap-10'>
        <div className='w-full py-7 px-10 bg-white rounded-2xl'>
          <div className='flex justify-between'>
            <p className='text-lg font-bold font-montserrat'>Top products</p>
            <button className='font-montserrat text-xs text-secondary font-normal'>
              May - June 2021
            </button>
          </div>
        </div>
        <div className='w-full py-7 px-10 bg-white rounded-2xl'>
          <div className='flex justify-between mb-3'>
            <p className='text-lg font-bold font-montserrat'>
              Today’s schedule
            </p>
            <button className='font-montserrat text-xs text-secondary font-normal'>
              See All
            </button>
          </div>
          <div className='my-3 px-3.5 border-l-4 border-light-green'>
            <p className='my-1 text-sm font-lato font-bold text-dark-gray'>
              Meeting with suppliers from Kuta Bali
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              14.00-15.00
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              at Sunset Road, Kuta, Bali
            </p>
          </div>
          <div className='my-3 px-3.5 border-l-4 border-light-blue'>
            <p className='my-1 text-sm font-lato font-bold text-dark-gray'>
              Check operation at Giga Factory 1
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              18.00-20.00
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              at Central Jakarta
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

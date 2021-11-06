import React, { useState } from 'react';
import Main from './home/Main';
import Sidebar from './home/Sidebar';

const Home = () => {
  const [nav, setNav] = useState(0);
  return (
    <div className='w-full min-h-screen p-10 bg-background flex'>
      <Sidebar nav={nav} setNav={setNav} />
      <Main nav={nav} />
    </div>
  );
};

export default Home;

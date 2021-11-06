import React from 'react';
import Dashboard from './section/Dashboard';

const Main = ({ nav }) => {
  const renderModal = () => {
    switch (nav) {
      case 0:
        return <Dashboard />;

      case 1:
        return;

      case 2:
        return;

      case 3:
        return;

      case 4:
        return;

      default:
        return <Dashboard />;
    }
  };

  return <div className='w-4/5 pl-15'>{renderModal()}</div>;
};

export default Main;

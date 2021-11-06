import Profile from '../assets/profile.png';

export const ProfileIcon = () => {
  return (
    <div className='rounded-full overflow-hidden h-7 w-7'>
      <img src={Profile} alt='' className='w-full h-full' />
    </div>
  );
};

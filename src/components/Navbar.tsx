import { Link } from 'react-router-dom';

const navigationItems = [
  { id: 1, label: 'Weather', icon: '🌧️', link: '/' },
  { id: 2, label: 'Cities', icon: '🌍', link: '/cities' },
  { id: 3, label: 'Map', icon: '🗺️', link: '/map' },
  { id: 4, label: 'Settings', icon: '⚙️', link: '/settings' }
];

const Navbar = () => {
  return (
    <div className='bg-gray-700 rounded-xl flex flex-col items-center px-3'>
      <div className='mb-20 mt-4'>Icon</div>
      <ul>
        {navigationItems.map((item) => {
          return (
            <li className='text-center mb-4'>
              <Link to={item.link}>
                <div className='mb-[5px]'>{item.icon}</div>
                <p>{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

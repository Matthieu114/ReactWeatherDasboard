import Navbar from './Navbar';
import Searchbar from './Searchbar';
const Layout = ({ children }: React.HTMLAttributes<JSX.Element>) => {
  return (
    <div className='flex w-full h-full bg-gray-900 p-8'>
      <Navbar />
      <div className='flex-grow grid grid-cols-3 grid-rows-[75px_1fr]'>
        <Searchbar />
        <div className='px-4 flex-grow col-span-3'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

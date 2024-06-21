import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const excludeNavbarPaths = ['/login', '/register'];
  const excludeFooterPaths = ['/login', '/register'];

  return (
    <div className="flex flex-col min-h-screen">
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!excludeFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;

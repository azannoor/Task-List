import { Outlet, useNavigate } from 'react-router-dom';

function PrivateRoute() {
    
  const isAuthenticated = localStorage.getItem('jsonwebtoken'); // replace this with your actual authentication check
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Outlet />;
}
export default PrivateRoute
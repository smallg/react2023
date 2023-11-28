import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to='/about'>About</Link>
      <Link to='/'>Board</Link>
      <Outlet />
    </div>
  )
};

export default Layout;
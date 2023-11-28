import { createBrowserRouter } from 'react-router-dom';
import Login from '../page/Login';
import Register from '../page/Register';
import Layout from '../page/Layout';
import Board from '../page/Board';
import About from '../page/About';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
  {
    path: '/login/:name/:id',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: 'board',
        index: true,
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
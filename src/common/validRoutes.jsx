import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallary from '../pages/Gallary';

export const ValidAuthroutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/Gallary', element: <Gallary /> },
];

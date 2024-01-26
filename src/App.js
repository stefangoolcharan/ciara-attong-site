import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import './style.css';
import { Routes } from 'react-router-dom';

//import pages
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import Books from './components/pages/Books';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/books" element={<Books />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


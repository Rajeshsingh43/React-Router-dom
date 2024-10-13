import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact, contactData } from "./Pages/Contact";
import { Movie } from "./Pages/Movie";
import AppLayout from './Components/Layout/AppLayout';
import './App.css'
import { ErrorPage } from './Pages/ErrorPage';
import { getMoviesData } from './api/GetApiData';
import { MovieDetails } from './Components/UI/MovieDetails';
import { GetMovieDetail } from './api/GetMovieDetail';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        },
        // {
        //   path: "*",
        //   element: <ErrorPage />,
        // },

        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: GetMovieDetail,
        },]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;













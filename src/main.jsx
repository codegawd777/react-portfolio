import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/error.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'resume', element: <Resume /> },
    ]
  },



])

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

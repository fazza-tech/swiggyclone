import { StrictMode , Suspense, lazy} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import RestaurentMenu from './components/RestaurentMenu.jsx' 
import Shimmer from './components/Shimmer.jsx'

const Grocery = lazy(() => import('./components/Grocery.jsx'))



const appRouter = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      {
        path: "/", element: <Body />, errorElement: <Error />
      },
      {
        path: "/about", element: <About />
      },
      {
        path: '/contact', element: <Contact />
      },
      {
        path: '/restaurants/:resId', element: <RestaurentMenu/>
      },
      {
        path: '/grocery', element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense> 
      }
    ],
    errorElement:<Error/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)

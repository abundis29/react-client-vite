import React from "react";
import './index.css'

import ReactDOM from "react-dom/client";
// import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(
  () => import(/* webpackChunkName: "pages" */ "./pages/Home")
);

// const Prefetched = React.lazy(() =>
//   import(
//     /* webpackPrefetch: true */
//     /* webpackChunkName: "prefetched" */
//     './prefetched'
//   ),
// )

const App = React.lazy(
  () =>
    import(
      /* webpackPreload: true */
      /* webpackChunkName: "preload" */
      "./App"
    )
);
const root = document.getElementById('root');
if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <React.Suspense fallback="...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<App />} />
            </Route>
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </React.StrictMode>
  )


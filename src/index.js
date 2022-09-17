import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopNav from './components/common/topnav';
import Home from './components/Home';
import Play from './components/Play';
import LevelGp from './components/Play_levelGp';
import Game from './components/Game';
import Community from './components/Community';
import About from './components/About';
import Review from './components/Review';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import { initializeApp } from "firebase/app/dist/index.cjs";
// import { getFirestore, collection, getDocs } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-firestore.js';
// import '@firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCc3hjP0cMh8C8z03hNCbpzn0Ol7wItFzg",
  authDomain: "wallywosagase.firebaseapp.com",
  projectId: "wallywosagase",
  storageBucket: "wallywosagase.appspot.com",
  messagingSenderId: "118721858523",
  appId: "1:118721858523:web:491a5b7fdcea9ac36db5fe",
  measurementId: "G-KM0JXSF2M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="index m-auto relative">
    <TopNav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="play" element={<Play db={db} />}>
          <Route index element={(
              <div>
                <LevelGp title="Newbie" db = {db} level={"Cards_Newbie"}/>
                <LevelGp title="Regular" db = {db} level={"Cards_Regular"}/>
                <LevelGp title="Pro" db = {db} level={"Cards_Pro"}/>
              </div>
          )} />
          <Route path=":id" element={<Game db={db} />} />
        </Route>

        {/* <Route path="review" element={<Error />}>
          <Route path=":id" element={<Review />} />
        </Route> */}

        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/play",
//     element: <Play db={db} />,
//     children: [
//       {
//         index: true,
//         element: <Community />,
//         path: ":input",
//       }
//     ]
//   },
//   {
//     path: "/community",
//     element: <Community />
//   },
//   {
//     path: "/about",
//     element: <About />
//   }
// ]);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div className="index m-auto relative">
//     <TopNav/>
//     <React.StrictMode>
//       <RouterProvider router={router}/>
//     </React.StrictMode>
//   </div>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
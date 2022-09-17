import { getFirestore, collection, getDocs, addDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Play(props) {

  return (
    <div className="absolute top-20 w-full">
      <Outlet/>
    </div>
  );
}



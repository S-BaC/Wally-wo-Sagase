import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, addDocs, doc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

export default function Game(props) {

  let location = useLocation();
  let id = useParams().id;
  let data = location.state.card.data;

  console.log(location.state);

  queries(props.db, id.split('%')[0], id.split('%')[1])

  return (
    <div>
      <p className="text-3xl font-thin">
        {data.Title}
      </p>
      <img src={"https://storage.cloud.google.com/wallywosagase.appspot.com/Quiz1/quiz.jpeg"} alt="" />
      {/* https://storage.googleapis.com/wallywosagase.appspot.com/Quiz1 */}
    </div>
  );
}

async function queries (db, col, id) {
  console.log(col, id);
  // const sfRef = doc(db, col, id);
  // console.log(sfRef);
  
  // const collections = await sfRef.listCollections();
  // collections.forEach(collection => {
  //   console.log('Found subcollection with id:', collection.id);
  // });
}


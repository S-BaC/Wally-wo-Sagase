import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import data from '../assets/data'

export default function Play(props) {

  const [cards, setCards] = useState(<div>Loading...</div>);

  useEffect(
    () => {
      setCards(
        data.questions.map(
          card => (
              <div className='card mx-7' key={card.id}>
                  <div className="h-36 overflow-hidden rounded-lg drop-shadow my-3">
                      <img src={card.img} alt="" className='rounded-lg drop-shadow' />
                  </div>
                  <div className="flex justify-between items-center flex-wrap">
                      <p className="text-2xl font-semibold">
                          {card.title}
                      </p>
                      <Link to={`/play/${card.id}`} state={{ card }} className='ml-auto bg-blue-800 text-white rounded px-3 py-1'>
                          Play
                      </Link>
                  </div>
              </div>
          )
        )
      )
    },  []
  )




  return (
    <div className="absolute top-20 w-full">
      <div className='mt-5'>
            {/* <p className="text-5xl font-thin">
                Games
            </p> */}

            {/* <hr className='border border-gray-300 my-3' /> */}

            <div className="card-wrapper flex flex-col justify-center gap-y-7 md:w-3/4 m-auto">
                {cards}
            </div>

        </div>
    </div>
  );
}



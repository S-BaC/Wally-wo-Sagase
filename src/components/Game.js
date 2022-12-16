import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import data from '../assets/data';

export default function Game(props) {

  const [content, setContent] = useState(<div>Loading...</div>)
  const [score, setScore] = useState(0);
  const [answerKey, setAnswerKey] = useState(['Loading']);

  const id = useParams().id;

  const already_added_answers = [];

  const answerChecker = (arg, answers) => {
    if(arg !== null && !already_added_answers.includes(arg)){
      already_added_answers.push(arg);
      setScore(answers.length - already_added_answers.length);
    }
  }

  const photoClicked = (e, answers) => {

    const gamePhoto = document.getElementById('game_photo');
    const clientRect = gamePhoto.getBoundingClientRect();
  
    const x = Math.round(((e.clientX-clientRect.left)/clientRect.width)*100);
    const y = Math.round(((e.clientY-clientRect.top)/clientRect.height)*100);

    console.log(answers)
  
    answers.forEach(
      xy => {
        if( x >= xy.x-5 && x <= xy.x+5 
          && y >= xy.y-5 && y <= xy.y+5){
            answerChecker(xy, answers)
            return;
          }
      }
    )
    answerChecker(null, answers)
  }
  

  useEffect(
    () => {

      const sampleImg = data.sample;
      const card = data.questions.filter(q => q.id == id)[0];
      setAnswerKey(card.answers);

      setContent(
        <div className="grid grid-cols-6 grid-rows-1 p-5 gap-5 md:w-9/12 m-auto">
          <div className=''>
            <img src={sampleImg} alt="Sample" className='rounded-lg drop-shadow' />
            <p className='mt-3 text-blue-800 text-center ml-auto'>5/5</p>
          </div>
          <div className='col-span-5'>
            <div className="rounded-lg drop-shadow">
              <img src={card.img} alt="" id='game_photo' className='rounded-lg drop-shadow' onClick={ (e) => photoClicked(e, card.answers) }/>
            </div>
          </div>
        </div>
      )
    }, []
  )


  return (
    <div className='absolute top-10 w-full'>
      
            {content}

            <p className='text-center'>Completed {score} </p>
        
    </div>
  );
}

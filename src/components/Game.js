import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../assets/data';

export default function Game(props) {

  const [content, setContent] = useState(<div>Loading...</div>)
  const [targetsLeft, setTargetsLeft] = useState(<div>Loading...</div>);

  const id = useParams().id;

  const already_added_answers = [];
  let ingame = true;
  let imgDiv, gamePhoto;

  const answerChecker = (arg, answers) => {

    if(ingame && arg !== null && !already_added_answers.includes(arg)){

      already_added_answers.push(arg);
      setTargetsLeft(answers.length - already_added_answers.length);

      const clientRect = gamePhoto.getBoundingClientRect();
      drawCircle(
        imgDiv,
        arg.x*clientRect.width/100,
        arg.y*clientRect.height/100,
        true);
 
      if(answers.length - already_added_answers.length === 0) ingame = false;
    }


  }

  const photoClicked = (e, answers) => {

    const clientRect = gamePhoto.getBoundingClientRect();
  
    const x = Math.round(((e.clientX-clientRect.left)/clientRect.width)*100);
    const y = Math.round(((e.clientY-clientRect.top)/clientRect.height)*100);

    let isCorrect = false;
  
    answers.forEach(
      xy => {
        if(  Math.abs(xy.x - x) <= 3
          && Math.abs(xy.y - y) <= 3  ){
            answerChecker(xy, answers);
            isCorrect = true;
          }
      }
    )

    if(!isCorrect){
      drawCircle(
        imgDiv,
        e.clientX-clientRect.left,
        e.clientY-clientRect.top,
        false);
  
      answerChecker(null, answers)
    }

    
  }
  

  useEffect(
    () => {

      const sampleImg = data.sample;
      const card = data.questions.filter(q => q.id == id)[0];
      setTargetsLeft(card.answers.length);

      setContent(
        <div className="grid grid-cols-6 grid-rows-1 p-5 gap-5 md:w-9/12 m-auto">
          <div className=''>
            <img src={sampleImg} alt="Sample" className='rounded-lg drop-shadow' />
            <p className='mt-3 text-blue-800 text-center ml-auto'>5/5</p>
          </div>
          <div className='col-span-5'>
            <div className="rounded-lg drop-shadow relative">
              <div id='img_area' className='w-full h-full bg-yellow-100 absolute'>
              </div>
              <img src={card.img} alt="" id='game_photo' className='rounded-lg drop-shadow' onClick={ (e) => photoClicked(e, card.answers) }/>
            </div>
          </div>
        </div>
      )

      setTimeout(() => {
        imgDiv = document.getElementById('img_area');
        gamePhoto = document.getElementById('game_photo');

      }, 10);
    }, []
  )


  return (
    <div className='absolute top-10 w-full'>
      
            {content}

            {targetsLeft > 0 && <p className='text-center'> {targetsLeft} left </p>}

            {targetsLeft === 0 && <p className='text-blue-800 text-center'> Congratualations. </p>}
        
    </div>
  );
}

function drawCircle(parent, x, y, isCorrect){
  const e = document.createElement('div');
  e.style.left = (x-20) + 'px';
  e.style.top = (y-20) + 'px';

  if(isCorrect){
    e.className = `bg-blue-500 z-10 rounded-full absolute w-10 h-10 border-black border-dashed border-2`;
    e.style.opacity = '0.6';

  } else {
    e.className = `bg-red-500 z-10 rounded-full absolute w-10 h-10 border-black border-dashed border-2 ease-in-out duration-500`;
    setTimeout(
      () => { e.style.opacity = 0 }, 100
    )
  }
  parent.append(e);
}
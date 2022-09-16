import { useState } from 'react';
import demoImg from '../assets/demo.jpg';

export default function LevelGp(props) {

    let seeAllBtn = props.cardNum <= 3 
            ? ""
            : (
                <button className='w-full text-center mt-5 font-semibold text-sm' 
                    onClick={(e) => toggleCards(allCardsShown, setAllCardsShown, e.target, setCards, props.cardNum)}>
                    SEE MORE
                </button>
                );

    let [cards, setCards] = useState(
        arrangeCards(Math.min(props.cardNum,3))
        );

    let [allCardsShown, setAllCardsShown] = useState(false);


    return (
        <div className='mt-10'>
            <p className="text-5xl font-thin">
                {props.title}
            </p>

            <hr className='border border-gray-300 my-3' />

            <div className="card-wrapper flex flex-wrap gap-y-7">
                {cards}
            </div>
            
           {seeAllBtn}

        </div>
    );
}

function toggleCards (condition, conditionSetter, obj, cardSetter, num) {
    if(condition){
        cardSetter(arrangeCards(3));
        obj.textContent = "SEE MORE";
        conditionSetter(false);
        
    } else {
        cardSetter(arrangeCards(num));
        obj.textContent = "SEE LESS";
        conditionSetter(true);
        // obj.classList.add('hidden');
    }
}

function arrangeCards (num) {
    let cards = [];
    for (let i = 0; i < num; i++) {
        cards.push(
            <div className='card w-60 mx-7'>
                <div className="h-36 overflow-hidden rounded-lg drop-shadow my-3">
                    <img src={demoImg} alt="" className='rounded-lg drop-shadow' />
                </div>
                <div className="flex justify-between items-center flex-wrap">
                    <p className="text-2xl font-semibold">
                        Demo
                    </p>
                    <p className="font-thin italic leading-10">
                        Community
                    </p>
                </div>
                <div className="flex gap-5 items-center flex-wrap my-3">
                    <button className='ml-auto bg-blue-600 text-white rounded px-3 py-1'>
                        Play
                    </button>
                    <button className='bg-slate-200 rounded px-2 py-1'>
                        Review
                    </button>
                </div>
            </div>
        );
    }
    return cards;
}


import { useState } from 'react';
import { getFirestore, collection, getDocs, addDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import demoImg from '../assets/demo.jpg';
import { Link, Outlet } from 'react-router-dom';

export default function LevelGp(props) {


    let [cards, setCards] = useState(<div>Loading...</div>);
    // let [allCardsShown, setAllCardsShown] = useState(false);
    let [seeAllBtn, setSeeAllBtn] = useState("");

    useState(() => {
        initialize(props.db, props.level)
            .then(res => {
                let cards = formatCards(res, props.level);
                setCards(cards);

                // TODO: SEE MORE / SEE LESS.
                /*
                if (cards.length > 3) {
                    setSeeAllBtn(
                        <button className='w-full text-center mt-5 font-semibold text-sm'
                            onClick={(e) => toggleCards(allCardsShown, setAllCardsShown, e.target, setCards, props.cardNum)}>
                            SEE MORE
                        </button>
                    );
                }
                */
            });
    }, []);

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

            <Outlet />
        </div>
    );
}

async function initialize(db, level) {

    let cards = [];

    // TODO: load this only when necessary.
    await getDocs(collection(db, level))
        .then(res => res.forEach(
            (doc) => {
                cards.push({
                    id: doc.id,
                    data: doc.data()
                });
            }));

    return cards;
}


function toggleCards(condition, conditionSetter, obj, cardSetter, num) {
    if (condition) {
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

function cardsMoreLess(condition, conditionSetter, textSetter) {
    if (condition) {
        textSetter("SEE LESS");
    } else {
        textSetter("SEE MORE");
    }
    conditionSetter(!condition);
}

function formatCards(cards, pre) {
    let arr = [];
    cards.forEach(card => {
        arr.push(
            <div className='card w-60 mx-7' key={card.id}>
                <div className="h-36 overflow-hidden rounded-lg drop-shadow my-3">
                    <img src={demoImg} alt="" className='rounded-lg drop-shadow' />
                </div>
                <div className="flex justify-between items-center flex-wrap">
                    <p className="text-2xl font-semibold">
                        {card.data.Title}
                    </p>
                    <p className="font-thin italic leading-10">
                        {card.data.Community ? "Community" : "Default"}
                    </p>
                </div>
                <div className="flex gap-5 items-center flex-wrap my-3">
                    <Link to={`/play/${pre}%${card.id}`} state={{ card }} className='ml-auto bg-blue-600 text-white rounded px-3 py-1'>
                        Play
                    </Link>
                    <Link to={`/play/${pre}%${card.id}`} className='bg-slate-200 rounded px-2 py-1'>
                        Review
                    </Link>
                </div>

            </div>
        )
    });
    return arr;
}

function arrangeCards(num) {
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


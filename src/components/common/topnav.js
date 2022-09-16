import React from "react";

import langIcon from '../../assets/icons/language.svg';
import soundIcon from '../../assets/icons/sound.svg';
import muteIcon from '../../assets/icons/mute.svg';
import profileIcon from '../../assets/icons/profile.svg';

export default function topnav() {
    return (
        <div className="flex justify-end absolute top-10 right-10">
            <a href="">
                <img src={langIcon} alt="Language" className="md:h-7 md:w-7h-6 w-6 mx-3"/>
            </a>
            <a href="">
                <img src={soundIcon} alt="Sound" className="md:h-7 md:w-7h-6 w-6 mx-3"/>
            </a>
            <a href="">
                <img src={profileIcon} alt="Profile" className="md:h-7 md:w-7h-6 w-6 mx-3"/>
            </a>
        </div>
    );
}
import React from 'react';
import Alien from './Alien';
import alien1 from '../Assets/Img/alien1.jpg';
import alien2 from '../Assets/Img/alien2.jpg';
import aliens3 from '../Assets/Img/aliens3.jpg';
import alien4 from '../Assets/Img/alien4.jpg';
import alien5 from '../Assets/Img/alien5.jpg';

var MasterAlienList = [
    {
        name: "Alien1",
        bio: "My bio",
        photo: alien1
    },
    {
        name: "Alien2",
        bio: "My bio",
        photo: alien2
    },
    {
        name: "Aliens3",
        bio: "My bio",
        photo: aliens3
    },
    {
        name: "Alien4",
        bio: "My bio",
        photo: alien4
    },
    {
        name: "Alien5",
        bio: "My bio",
        photo: alien5
    },

];

function AlienList() {
    return (
        <div>
            {MasterAlienList.map((aboutUs, index) =>
                <Alien name={aboutUs.name}
                    bio={aboutUs.bio}
                    photo={aboutUs.photo}
                    key={index} />
            )}
        </div>
    );
}

export default AlienList;
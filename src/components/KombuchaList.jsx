import React from 'react';
import Kombucha from './Kombucha';
import ginger from '../Assets/Img/ginger.png';
import Original from '../Assets/Img/Original.png';
import trilogy from '../Assets/Img/trilogy.png';

var MasterKombuchaList = [
    {
    name: "Kombucha",
    flavour: "Gingerade",
    brand: "GT's",
    photo: ginger
},
    {
        name: "Kombucha",
        flavour: "Original",
        brand: "GT's",
        photo: Original
    },
     {
        name: "Kombucha",
        flavour: "trilogy",
         brand: "GT's",
        photo: trilogy
    }

]
function KombuchaList() {

    return (
        <div>
            {MasterKombuchaList.map((kombucha, index) =>
                <Kombucha name={kombucha.name}
                    price={kombucha.price}
                    flavour={kombucha.flavour}
                    brand={kombucha.brand}
                    photo={kombucha.photo}
                    key={index} />
            )}
        </div>
    );
}

export default KombuchaList;
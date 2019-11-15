import React from 'react';
import Kombucha from './Kombucha';
import KG from '../Assets/Img/KG.jpeg';

var MasterKombuchaList = [
    {
    name: "Kombucha",
    flavour: "Gingerade",
    photo: KG
},
    {
        name: "Kombucha",
        flavour: "Gingerade",
        photo: KG
    }

]
function KombuchaList() {

    return (
        <div>
            {MasterKombuchaList.map((kombucha, index) =>
                <Kombucha name={kombucha.name}
                    price={kombucha.price}
                    flavour={kombucha.flavour}
                    photo={kombucha.photo}
                    key={index} />
            )}
        </div>
    );
}

export default KombuchaList;
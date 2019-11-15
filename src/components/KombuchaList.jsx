import React from 'react';
import Kombucha from './Kombucha';
import ginger from '../Assets/Img/ginger.jpg';

var MasterKombuchaList = [
    {
    name: "Kombucha",
    flavour: "Gingerade",
    photo: ginger
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
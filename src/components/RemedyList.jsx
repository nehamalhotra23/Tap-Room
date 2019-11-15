import React from 'react';
import Kombucha from './Kombucha';
import remedy1 from '../Assets/Img/remedy1.png';

var MasterRemedyList = [
    {
        name: "Kombucha",
        flavour: "Gingerade",
        brand: "GT's",
        photo: remedy1
    }

]
function RemedyList() {

    return (
        <div>
            {MasterRemedyList.map((Remedy, index) =>
                <Kombucha name={Remedy.name}
                    price={Remedy.price}
                    flavour={Remedy.flavour}
                    brand={Remedy.brand}
                    photo={Remedy.photo}
                    key={index} />
            )}
        </div>
    );
}

export default RemedyList;
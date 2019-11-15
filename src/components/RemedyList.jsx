import React from 'react';
import Kombucha from './Kombucha';
import remedy1 from '../Assets/Img/remedy1.png';
import raspberry from '../Assets/Img/raspberry.png';
import hibis from '../Assets/Img/hibis.png';
import cherry from '../Assets/Img/cherry.png';

var MasterRemedyList = [
  {
    name: 'Kombucha',
    flavour: 'Ginger Lemon',
    price: '$5',
    brand: 'Remedy',
    photo: remedy1
  },
  {
    name: 'Kombucha',
    flavour: 'Raspberry',
    price: '$5',
    brand: 'Remedy',
    photo: raspberry
  },
  {
    name: 'Kombucha',
    flavour: 'Hibiscus kiss',
    price: '$5',
    brand: 'Remedy',
    photo: hibis
  },
  {
    name: 'Kombucha',
    flavour: 'Cherry',
    price: '$5',
    brand: 'Remedy',
    photo: cherry
  }

];
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
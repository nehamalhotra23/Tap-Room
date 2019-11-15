import React from 'react';
import newkombucha from '../Assets/Img/newkombucha.jpg';

function NewKombucha() {
    var image = {
       height: "500px",
       width: "600px",
       marginTop: "30px",
    }
    return (
       
            <div className="row">
                <div className="col-md-6">
                 <img style={image} src={newkombucha} />
                </div>
                <div className="form-group col-md-6">
            <h1>Add a new Kombucha</h1>
                    <label for="inputCity">Name</label>
                    <input type="text" className="form-control" />
                    <label for="inputCity">Price</label>
                    <input type="text" className="form-control" />
                    <label for="inputCity">Flavour</label>
                    <input type="text" className="form-control" />
            
                    <label for="inputState">Brand</label>
                    <select className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select><br/>
                <button type="submit" className="btn btn-primary">Add</button>
                </div>

            </div>
        
    );
}

export default NewKombucha;
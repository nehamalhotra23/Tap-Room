import React from 'react';

function NewKombucha() {
    var main = {
        marginLeft: "400px",
        marginTop: "50px",
    }
    return (
        <div style={main}>
            <h1>Add a new Kombucha</h1>
            <div class="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">Name</label>
                    <input type="text" className="form-control" />
                    <label for="inputCity">Price</label>
                    <input type="text" className="form-control" />
                    <label for="inputCity">Flavour</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">brand</label>
                    <select className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}

export default NewKombucha;
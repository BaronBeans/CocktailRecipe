import * as React from 'react';
import { Component } from 'react';
// import '../stylesheets/components/_ingredients.css';

import ingredients from '../data/ingredients';

class Ingredients extends Component {
    render() {
        return (
            <div className="row tablecenter">
                <div className="col-1"></div>
                <div className="col-10">
                    <hr />
                    <h1>Ingredients List</h1>
                    <hr />
                    <ul>
                        {
                            ingredients.map(ingredient => {
                                return (
                                    <div key={ingredient.name}>
                                        <strong>{ingredient.name}</strong>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="col-1"></div>
            </div>
        );
    }
}

export default Ingredients;

import * as React from 'react';
import { Component } from 'react';
import '../stylesheets/components/_cocktails.css';

import cocktails from '../data/cocktails';

class Cocktails extends Component {
    render() {
        return (
            <div className="row tablecenter">
                <div className="col-1"></div>
                <div className="col-10">
                    <hr />
                    <h1>Cocktail List</h1>
                    <hr />
                    <ul>
                        {
                            cocktails.map(cocktail => {
                                return (
                                    <div key={cocktail.name}>
                                        <strong className="cocktailName">{cocktail.name}{` | `}</strong>
                                        <span>£{cocktail.price}0{` | `}</span>
                                        <span>{cocktail.ingredients}{`, `}</span>
                                        {/* {cocktail.ingredients.map(ingredients => {
                                            return (
                                                <div key={ingredients.name}>
                                                    <span>{ingredients.name}{`, `}</span>
                                                </div>
                                            )
                                        })} */}
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

export default Cocktails;

import * as React from 'react';
import { Component } from 'react';

import '../stylesheets/components/_all.css';
import '../stylesheets/components/_card.css';

import Rating from './Rating';
import { Cocktail } from '../data/cocktails';

class Card extends Component<{ cocktail: Cocktail }> {
    render() {
        return (
            <a className="col-md-3" href={'/' + this.props.cocktail.url}>
                <div className="card">
                    <img src={this.props.cocktail.image} alt={this.props.cocktail.name} />
                    <div className="container">
                        <h4 className="featureLeft">{this.props.cocktail.name}</h4>
                        <p className="overflowController">{this.props.cocktail.description}</p>
                        <div className="floatLeft">
                            <Rating rating={this.props.cocktail.rating} />
                        </div>
                        <div className="floatRight featureRight">
                            <p>{'£' + this.props.cocktail.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default Card;
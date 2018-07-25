import * as React from 'react';
import { Component } from 'react';

import '../stylesheets/components/_all.css';
import '../stylesheets/components/_card.css';

class Card extends Component<{ name: string, description: string, image: string, url: string }> {
    render() {
        return (
            <a className="col-md-3" href={'/' + this.props.url}>
                <div className="card">
                    <img src={this.props.image} alt={this.props.name} />
                    <div className="container">
                        <h4>{this.props.name}</h4>
                        <p className="overflowController">{this.props.description}</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default Card;
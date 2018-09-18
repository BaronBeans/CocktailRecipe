import * as React from 'react';
import { Component } from 'react';

import '../stylesheets/components/_all.css';
import '../stylesheets/components/_cocktails.css';

import cocktails from '../data/cocktails';
import Card from './Card';

class Cocktails extends Component {

    render() {
        return (
            <div className="row bottomSpacing">
                {
                    cocktails.map(cocktail => {
                        return (
                            <Card cocktail={cocktail} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cocktails;

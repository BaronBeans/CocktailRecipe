import * as React from 'react';
import { Component } from 'react';
import axios from 'axios'

import '../stylesheets/components/_all.css';
import '../stylesheets/components/_cocktails.css';

import cocktails, { Cocktail } from '../data/cocktails';
import Card from './Card';

class Cocktails extends Component<{}, { cocktails: Cocktail[] }> {

    constructor(props) {
        super(props);

        this.state = {
            cocktails: []
        };

        this.GetData()
    }

    private async GetData() {
        let succeeded = true;
        let data: any;

        try {
            const response = await fetch('http://localhost:3000/api/cocktails', { method: "GET" });

            data = await response.json();
            succeeded = response.ok;
        } catch (exception) {
            succeeded = false;
            console.log(exception);
        }

        this.setState({
            cocktails: data
        });
    }

    render() {
        return (


            <div className="row bottomSpacing">
                <div className="row">
                    {
                        this.state.cocktails.map(cocktail => {
                            return (
                                <Card cocktail={cocktail} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Cocktails;

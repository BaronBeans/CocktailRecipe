import * as React from 'react';
import { Component } from 'react';

import '../stylesheets/components/_all.css';
import '../stylesheets/components/_rating.css';

class Rating extends Component<{ rating: number }> {

    calculateScore(rating: number): number {
        return rating * 2;
    }

    renderScore(rating: number): string {
        var score: number = this.calculateScore(rating);

        switch (score) {
            case 1:
                return "0.5 stars";
            case 2:
                return "";
            case 3:
                return "1.5 stars";
            case 4:
                return "";
            case 5:
                return "2.5 stars";
            case 6:
                return "";
            case 7:
                return "3.5 stars";
            case 8:
                return "";
            case 9:
                return "4.5 stars";
            case 10:
                return "";
            default:
                return "Nothing";
        }
    }

    render() {
        return (
            <div className="ratingContainer">
                <p>{this.renderScore(this.props.rating)}</p>
            </div>
        )
    }
}

export default Rating;
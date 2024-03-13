import { format} from 'date-fns';
import React, { Component } from 'react';

class CurrentDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
     
    render() {
        const {date} = this.state;
        return (
            <div>
                <h2>{format(date,"dd" )}</h2>
                <p>{format(date,"EEEE" )}</p>
                <p>{format(date,"EEEE" )}</p>
            </div>
        );
    }
}

export default CurrentDay;


import React, {Component} from 'react';

class WeatherMessage extends Component{

    render(){
        const { temp, location } = this.props;
        return(
          <p>It's {temp} in { location }</p>
        );
    }
}

export default WeatherMessage;
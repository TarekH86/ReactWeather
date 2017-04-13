
import React, {Component} from 'react';

class WeatherMessage extends Component{

    render(){
        const { temp, location } = this.props;
        return(
          <h3 className="text-cente">It's {temp} in { location }</h3>
        );
    }
}

export default WeatherMessage;
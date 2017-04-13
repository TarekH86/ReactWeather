import React, { Component } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
    state = { isLoading: false };

    handleSearch = (location) => {

        this.setState({ 
            isLoading: true,
            errorMessage: undefined
     });

        openWeatherMap.getTemp(location).then(temp => {
            this.setState({
                isLoading: false,
                location: location,
                temp: temp
            });
        }, e => {
            this.setState({ 
                isLoading: false,
                errorMessage: e.message
             });
        });
    }

    renderMessage = () => {
        const { isLoading, location, temp } = this.state;
        if (isLoading) {
            return <h3 className="text-center">Fetching weather...</h3>;
        } else if (typeof temp !== 'undefined' && typeof loaction !== 'undfined') {
            return <WeatherMessage temp={temp} location={location} />;
        }
    }

renderError = () =>{
    const errorMessage = this.state.errorMessage;
    if ( typeof errorMessage === 'string'){
        return (
            <ErrorModal message={errorMessage}/>
        )
    }
}

    render() {
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {this.renderMessage()}
                {this.renderError()}
            </div>
        );
    }

}

export default Weather;
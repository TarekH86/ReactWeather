import React, { Component } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
    state = { isLoading: false };

    handleSearch = (location) => {

        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location).then(temp => {
            this.setState({
                isLoading: false,
                location: location,
                temp: temp
            });
        }, errorMessage => {
            this.setState({ isLoading: false });
            alert(errorMessage)

        });
    }

    renderMessage = () => {
        const { isLoading, location, temp } = this.state;
        if (isLoading) {
            return <h3>Fetching weather...</h3>;
        } else if (typeof temp !== 'undefined' && typeof loaction !== 'undfined') {
            return <WeatherMessage temp={temp} location={location} />;
        }
    }

    render() {
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {this.renderMessage()}
            </div>
        );
    }

}

export default Weather;
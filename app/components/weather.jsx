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
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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

    renderError = () => {
        const errorMessage = this.state.errorMessage;
        if (typeof errorMessage === 'string') {
            return (
                <ErrorModal message={errorMessage} />
            )
        }
    }


    componentDidMount() { //bilt in react function
        const location = this.props.location.query.location // first location is an window built in object, the second location after query is the url parameter.

        if (typeof location !== 'undefined' && location.length > 0) {
            this.handleSearch(location);
            // clear url params:
            window.location.hash = '#/';
        }

    }

// recive new props from the pairent component which is the Router
    componentWillReceiveProps(newProps) {//bilt in react function
        const location = newProps.location.query.location // first location is an window built in object, the second location after query is the url parameter.

        if (typeof location !== 'undefined' && location.length > 0) {
            this.handleSearch(location);
            // clear url params:
            window.location.hash = '#/';
        }
    }
    render() {
        return (
            <div>
                <h1 className="text-center page-title" >Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {this.renderMessage()}
                {this.renderError()}
            </div>
        );
    }

}

export default Weather;
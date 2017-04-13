import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <h1 className="text-cente">About</h1>
                <div className="card" style={{width: '300px'}}>
                <div className="card-section">
                    <p>This is a weather application build on React. I have built this for the complete React web app developper course</p>
                    <p>
                        Here are some of the tools I used: 
                    </p>
                    <ul>
                        <li>
                            <a href="https://facebook.github.io/react">React Js</a> - JavaScript framework.
                        </li>
                         <li>
                            <a href="https://openweathermap.org">Open Weather Map</a> - to search for weather data by city name. 
                        </li>
                    </ul>
                </div>
            </div>

            </div>
        );
    }
}

export default About;
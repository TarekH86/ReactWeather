import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {



onSearch = (e) => {
e.preventDefault();
const location = this.refs.location.value;
// encodeing location to use it in url:
const encodedLocation = encodeURIComponent(location);
if(location.length > 0){
// clear search box
this.refs.location.value ='';
// add encodedLocation to url params:
window.location.hash = `#/?location=${encodedLocation}` 
}

}



    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                <ul className="menu">
                    <li>
                        <input ref="location" type="search" placeholder="Search weather by city"/>
                    </li>
                    <li>
                        <input type="submit" className="button" value="Get Weather"/>
                    </li>
                </ul>
                </form>
                </div>
            </div>
        );
    }
}




export default Nav;

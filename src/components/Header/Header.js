import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            searched: '',
        }
    }

    handleSearchChange = e => {
        this.setState({ searched: e.target.value })
    }

    render() {
        const { searched} = this.state;
        return (
            <>
                <input onChange={this.handleSearchChange} type="text" id="selectCity" placeholder="Your City Name" />
                <Link to={`/weather/${searched}`}><button className="search">Search</button></Link>
                <p id="note">*City name brings good result then Country name</p>
            </>
        );
    }
}

export default Header;
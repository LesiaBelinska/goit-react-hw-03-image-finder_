import React, { Component } from 'react';
//import PropTypes from 'prop-types';


export default class Searchbar extends Component {
    state = {
        query: '',
    };

//     static propTypes = {
//         handleSubmit: PropTypes.func.isRequired,
//         handleChange: PropTypes.func.isRequired,
//         value: PropTypes.string.isRequired
//   };

    handleChange = e => {
        this.setState({
            query: e.currentTarget.value.toLowerCase()
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };


    render() {
       
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        value={this.state.query}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}



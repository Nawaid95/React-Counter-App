import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">
                    React Counter
                </a>
                <div className="form-inline">
                    <span className="badge badge-success ml-1">{this.positiveRated()}</span>
                    <span className="badge badge-danger ml-1">{this.negativeRated()}</span>
                </div>
            </nav>
        );
    }
    positiveRated() {
        var val_list = [...this.props.counter];
        var active_list = val_list.filter(val => val.value>0);
        return active_list.length
    };
    negativeRated() {
        var val_list = [...this.props.counter];
        var active_list = val_list.filter(val => val.value<0);
        return active_list.length
    };
}

export default NavBar;
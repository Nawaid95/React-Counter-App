import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-8">
                                <p className="text-warning">
                                    {this.props.children}
                                </p>
                            </div>
                            <div className="col-4">
                                <button onClick={ () => this.props.onDelete(this.props.counter) } className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><span className={this.countBadgeClasses()}>{this.countModifier()}</span></h5>
                        <div className="row">
                            <div className="col-sm-6 mb-1">
                                <button onClick={ () => this.props.onModify(this.props.counter,'add')} className="btn btn-primary btn-lg btn-block">+</button>
                            </div>
                            <div className="col-sm-6 mb-1">
                                <button onClick={ () => this.props.onModify(this.props.counter,'minus')} className="btn btn-primary btn-lg btn-block">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    countModifier() {
        var { value } = this.props.counter;
        return value === 0 ? "Zero": value;
    }
    countBadgeClasses() {
        var { value } = this.props.counter;
        var class_name = "badge m-2 badge-";
        class_name += value <= 0 ? "warning": "primary";
        return class_name;
    }
}

export default Counter;
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row pl-2 pr-2 mt-5 mb-5">
                    {this.props.counter.map(val => (
                        <Counter 
                            key={val.id}
                            counter={val}
                            onModify={this.props.onModify}
                            onDelete={this.props.onDelete}
                        >
                            {val.name}
                        </Counter>
                    ))}
                </div>
                <footer className="fixed-bottom page-footer blue">
                    <div className="footer-copyright text-center">
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                                <button onClick={this.props.onReset} className="btn btn-primary btn-lg btn-block">Reset</button>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Counters;
import React, { Component } from 'react';
import Spinner from '../loader/Loader';
import './Modal.css';

export default class Modal extends Component {
    render() {
        return (
            <div className="Overlay" onClick={this.props.onHandleClick}>
                {<Spinner /> && (
                    <div className="Modal">
                        <img src={this.props.img} alt={this.props.alt} />
                    </div>
                )}
            </div>
        );
    }
}
